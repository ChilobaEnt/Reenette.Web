import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, Send } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { toast } from 'sonner';

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  tour?: string;
  date?: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    rating: 5,
    text: "The Karen Country Club round was exactly what we hoped for — beautifully maintained greens, a relaxed clubhouse atmosphere, and excellent pacing from the team. It felt premium from arrival to the final hole.",
    tour: "Karen Country Club Experience",
    date: "Sep 18, 2026"
  },
  {
    id: 2,
    author: "Michael chen",
    rating: 5,
    text: "Everything was well organized from the airport pickup to the golf day itself. The course was in great condition, the staff were welcoming, and the trip felt easy and genuinely enjoyable.",
    tour: "Premium Golf Tour Package",
    date: "Aug 04, 2026"
  },
  {
    id: 3,
    author: "Emma Thompson",
    rating: 4.9,
    text: "We booked a weekend golf break and it exceeded expectations. The views were stunning, the caddies were helpful, and the whole experience felt polished without being too formal.",
    tour: "Kenya Golf Getaway",
    date: "Mar 27, 2026"
  },
  {
    id: 4,
    author: "James Makali",
    rating: 5,
    text: "My golf trip was smooth from start to finish. The course was challenging but fair, the hospitality was warm, and the lodge arrangements were comfortable and well planned.",
    tour: "Safari & Golf Combo",
    date: "Nov 12, 2025"
  },
  {
    id: 5,
    author: "Lisa Rodriguez",
    rating: 4.8,
    text: "The experience was easy to plan and genuinely memorable. We loved the pace of the itinerary, the warm welcome at the club, and the quality of the course itself.",
    tour: "Golf & Leisure Escape",
    date: "Jun 09, 2026"
  }
];

export const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    text: '',
    tour: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.author.trim() || !formData.text.trim()) {
      toast.error('Please fill in your name and review');
      return;
    }

    const newReview: Review = {
      id: reviews.length + 1,
      author: formData.author,
      rating: formData.rating,
      text: formData.text,
      tour: formData.tour || undefined,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    };

    setReviews(prev => [newReview, ...prev]);
    setFormData({
      author: '',
      rating: 5,
      text: '',
      tour: ''
    });
    setShowForm(false);
    toast.success('Thank you for your review!');
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Guest Reviews</h2>
          <p className="text-lg text-muted-foreground mb-8">What our travelers say about us</p>
          <Button 
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-primary/90"
          >
            {showForm ? 'Hide Form' : 'Share Your Experience'}
          </Button>
        </div>

        {/* Review Submission Form */}
        {showForm && (
          <Card className="max-w-2xl mx-auto mb-12 bg-white border-2">
            <CardHeader>
              <CardTitle>Share Your Review</CardTitle>
            </CardHeader>
            <CardContent className="text-black">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <Input
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tour (optional)</label>
                    <Input
                      name="tour"
                      value={formData.tour}
                      onChange={handleInputChange}
                      placeholder="Tour name (optional)"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= formData.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-300 text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Review</label>
                  <Textarea
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    placeholder="Tell us about your experience..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 gap-2">
                  <Send className="w-4 h-4" />
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Reviews Display */}
        <div>
          <p className="text-center text-sm text-muted-foreground mb-6">
            {reviews.length} traveler{reviews.length !== 1 ? 's' : ''} have shared their experiences
          </p>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id}>
                    <Card className="bg-white text-black border-0 shadow-lg rounded-lg">
                      <CardContent className="p-8 text-black">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-300 text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-lg mb-6 italic text-black">"{review.text}"</p>
                      <div>
                        <p className="font-semibold text-lg text-black">{review.author}</p>
                        {review.tour && (
                          <p className="text-sm text-black">{review.tour}</p>
                        )}
                        {review.date && (
                          <p className="text-xs text-black mt-1">{review.date}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
