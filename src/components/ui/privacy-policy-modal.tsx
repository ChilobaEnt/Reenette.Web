import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Privacy Policy — Reenette Tours & Travel Ltd</DialogTitle>
          <DialogDescription>
            Effective date: January 5th 2026
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">1. Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Reenette Tours & Travel Ltd is committed to protecting the privacy of our customers, website visitors and partners. This Privacy Policy explains what personal data we collect, why, how we use it, your rights and how to contact us.
                </p>
                <p className="mt-3">
                  <strong>Data controller:</strong> Reenette Tours & Travel Ltd — contact: info@reenette.com. For privacy enquiries contact our Data Protection Representative at info@reenette.com
                </p>
                <p className="mt-3">
                  We process personal data in accordance with the Data Protection Act, No. 24 of 2019 (Kenya) and established data protection principles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. What personal data we collect</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We may collect:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Identity data:</strong> name, date of birth, nationality.</li>
                  <li><strong>Contact data:</strong> email, postal address, phone/WhatsApp number.</li>
                  <li><strong>Travel data:</strong> passport number, visa details, travel dates, booking history.</li>
                  <li><strong>Payment data:</strong> card or bank details (we recommend using payment processors; we do not store full card numbers unless necessary and stored securely).</li>
                  <li><strong>Health data:</strong> dietary and medical needs when relevant to travel (special category data — processed only with explicit consent and minimal necessary handling).</li>
                  <li><strong>Technical data:</strong> IP address, device/browser type, cookies and analytics data.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3. How we use your data (Purposes & Legal Bases)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We use your personal data for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Booking & fulfilment:</strong> to make and manage travel bookings and reservations (contractual necessity).</li>
                  <li><strong>Payments & invoicing:</strong> to process payments and communicate invoices (contractual).</li>
                  <li><strong>Customer service:</strong> to respond to enquiries and manage complaints (legitimate interest / contractual).</li>
                  <li><strong>Marketing:</strong> only with your explicit consent — to send newsletters, offers, or promotions (consent). You can withdraw consent at any time.</li>
                  <li><strong>Legal & safety:</strong> to comply with legal obligations (e.g., immigration, safety reporting), and to protect vital interests where necessary.</li>
                  <li><strong>Analytics & site improvement:</strong> aggregated and pseudonymised analytics (legitimate interest).</li>
                </ul>
                <p className="mt-3">Under GDPR-style duties (and Kenya DPA), we inform data subjects about the legal bases for processing and their rights.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">4. Cookies & tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our website uses cookies and similar technologies to provide essential functionality and analytics. You can manage cookie preferences through your browser; we will provide a cookie banner for non-essential cookies where required.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">5. Sharing and third-party processors</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We share personal data only with trusted third parties required to deliver services (hotels, transport providers, payment processors, marketing platforms). We use contracts and security measures to ensure processors comply with data protection requirements.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">6. International transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p>If we transfer your data outside Kenya (for example to payment processors or cloud providers), we will ensure appropriate safeguards are in place (standard contractual clauses, data protection agreements) in accordance with applicable law and the DPA.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">7. Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We retain booking and transactional data for as long as required by law and for legitimate business purposes (for example accounting, complaints, or safety incidents). Typical retention periods:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Booking & transactional records:</strong> 7 years (or as required by tax law)</li>
                  <li><strong>Marketing consents:</strong> until withdrawn</li>
                  <li><strong>Logs/analytics:</strong> up to 2 years (or anonymised)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">8. Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We implement reasonable technical and organisational measures (encryption, access controls, staff training) to protect data. No system is 100% secure — if a personal data breach occurs we will notify affected individuals and the Office of the Data Protection Commissioner as required by law.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">9. Children</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We do not knowingly collect personal data from children under 18 without parental consent. Where processing data of a child is required (e.g., family bookings), we obtain consent from the parent/guardian and use age-appropriate protections.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">10. Your rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Depending on jurisdiction and local law, you may have rights to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Access the personal data we hold about you.</li>
                  <li>Request correction or deletion (“right to be forgotten”) of your personal data.</li>
                  <li>Request restriction or objection to processing.</li>
                  <li>Request portability of your data.</li>
                  <li>Withdraw consent at any time (for marketing).</li>
                  <li>Lodge a complaint with the Office of the Data Protection Commissioner (Kenya) or relevant supervisory authority.</li>
                </ul>
                <p className="mt-3">We will respond to valid requests within legally required timescales. See the ICO and GDPR guidance on what to include in notices and how to handle requests.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">11. How to exercise your rights or contact us</CardTitle>
              </CardHeader>
              <CardContent>
                <p>To exercise any right or for privacy enquiries, email: info@reenette.com with subject “Privacy request” and provide enough detail to identify you and the records you seek. You may also write to: Reenette Tours & Travel Ltd, [00100]</p>
                <p className="mt-3">If you remain dissatisfied you may lodge a complaint with the Office of the Data Protection Commissioner — Kenya (ODPC).</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">12. Changes to this policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We may update this Privacy Policy — the effective date will be amended. Significant changes will be notified on the website or via email where we hold contact details.</p>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>

        <div className="flex justify-end pt-4">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PrivacyPolicyModal;
