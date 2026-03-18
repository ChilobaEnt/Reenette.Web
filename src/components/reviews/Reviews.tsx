import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

export interface Review {
  id: number;
  tour_id: number;
  user_id?: number | null;
  rating: number;
  comment?: string | null;
  created_at: string;
}

export function Reviews({ tourId, showList = false, initialRating = 0 }:{tourId:number; showList?:boolean; initialRating?: number}) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ rating: 5, comment: '' });

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/.netlify/functions/getReviews?tour_id=${tourId}`);
      if (!res.ok) throw new Error('Failed to load reviews');
      const data: Review[] = await res.json();
      setReviews(data);
    } catch (err: any) {
      setError(err.message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
    const id = setInterval(fetchReviews, 15000);
    return () => clearInterval(id);
  }, [tourId]);

  const avg = reviews.length ? (reviews.reduce((s,r)=>s+Number(r.rating),0)/reviews.length) : 0;
  const displayRating = avg || initialRating || 0;

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/.netlify/functions/postReview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tour_id: tourId, rating: form.rating, comment: form.comment })
      });
      if (!res.ok) throw new Error('Failed to submit');
      setForm({ rating: 5, comment: '' });
      await fetchReviews();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Star className="h-4 w-4 text-accent fill-current" />
      <span className="text-sm font-medium">{displayRating.toFixed(1)}</span>
      {showList && (
        <div className="mt-3 w-full">
          {loading && <div className="text-sm text-muted-foreground">Loading reviews...</div>}
          {error && <div className="text-sm text-destructive">{error}</div>}
          <ul className="space-y-2 mt-2 max-h-40 overflow-auto text-sm">
            {reviews.map(r => (
              <li key={r.id} className="border-b pb-2">
                <div className="text-xs text-muted-foreground">{new Date(r.created_at).toLocaleString()}</div>
                <div className="font-medium">{r.rating} / 5</div>
                {r.comment && <div className="text-muted-foreground">{r.comment}</div>}
              </li>
            ))}
          </ul>

          <form onSubmit={submitReview} className="mt-3 space-y-2">
            <div>
              <label className="block text-xs mb-1">Rating</label>
              <select value={form.rating} onChange={(e)=>setForm(s=>({...s, rating: Number(e.target.value)}))} className="input">
                {[5,4,3,2,1].map(n=> <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs mb-1">Comment (optional)</label>
              <textarea value={form.comment} onChange={(e)=>setForm(s=>({...s, comment: e.target.value}))} className="w-full p-2 border rounded" rows={3} />
            </div>
            <div>
              <button type="submit" disabled={submitting} className="btn">{submitting ? 'Sending...' : 'Submit Review'}</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Reviews;
