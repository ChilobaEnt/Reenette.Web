import { Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import reenetteLogo from '@/assets/reenette-logo.png';

const footerLinks = {
  destinations: [
    'Maasai Mara',
    'Amboseli National Park',
    'Mount Kenya',
    'Tsavo East & West',
    'Lake Nakuru',
    'Samburu National Reserve'
  ],
  services: [
    'Safari Tours',
    'Golf Tours',
    'Hotel Bookings',
    'Airport Transfers',
    'Guided Tours',
    'Cultural Experiences'
  ],
  support: [
    'Help Center',
    'Travel Insurance',
    'Booking Terms',
    'Privacy Policy',
    'Cookie Policy',
    'Contact Support'
  ]
};

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/reenette_toursntravel?igsh=MW9qbWJsZTBsdmhzZQ==', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/reenette_toursntravel', label: 'Twitter' }
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Inspired
            </h3>
            <p className="mb-6 opacity-90">
              Get travel tips, destination guides, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button
                variant="secondary"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={reenetteLogo} alt="Reenette Tours Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold">Reenette Tours</span>
            </div>
            <p className="mb-6 opacity-90 leading-relaxed">
              Reenette Tours and Travel Ltd. is a premier East African specialty safari provider 
              offering personalized, unforgettable travel experiences across Kenya since 1999.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-accent" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <span>+254 712 345 678 (WhatsApp)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <span>info@reenettetours.com</span>
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-lg mb-4">Safari Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  {link === 'Contact Support' ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 text-left">
                          {link}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold text-center">Contact Support</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted">
                            <Phone className="h-5 w-5 text-accent" />
                            <div>
                              <p className="font-medium">Phone & WhatsApp</p>
                              <p className="text-sm text-muted-foreground">+254 712 345 678</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted">
                            <Mail className="h-5 w-5 text-accent" />
                            <div>
                              <p className="font-medium">Email</p>
                              <p className="text-sm text-muted-foreground">info@reenettetours.com</p>
                            </div>
                          </div>
                          
                          <div className="p-3 rounded-lg bg-muted">
                            <p className="font-medium mb-2">Follow Us</p>
                            <div className="flex space-x-3">
                              <a
                                href="https://www.instagram.com/reenette_toursntravel?igsh=MW9qbWJsZTBsdmhzZQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                              >
                                <Instagram className="h-4 w-4" />
                                <span>@reenette_toursntravel</span>
                              </a>
                              <a
                                href="https://twitter.com/reenette_toursntravel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                              >
                                <Twitter className="h-4 w-4" />
                                <span>@reenette_toursntravel</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : link === 'Booking Terms' ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 text-left">
                          {link}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-center">Booking Terms & Conditions</DialogTitle>
                          <p className="text-sm text-muted-foreground text-center">Last Updated: 22 August 2025</p>
                        </DialogHeader>
                        <div className="space-y-6 py-4">
                          <p className="text-sm">
                            These Booking Terms & Conditions apply to all bookings made with Reenette Tours and Travel via our website, email, phone, or in person. By making a booking, you confirm that you have read, understood, and agree to be bound by these Terms.
                          </p>
                          
                          <div className="space-y-4">
                            <section>
                              <h3 className="font-bold text-lg mb-2">1. Bookings & Payments</h3>
                              <ul className="space-y-2 text-sm">
                                <li>• A booking is considered confirmed only after we receive your deposit or full payment, as indicated in your invoice.</li>
                                <li>• Prices are quoted in GBP (£) and include applicable taxes unless otherwise stated.</li>
                                <li>• All quotations are valid for 30 days unless otherwise specified.</li>
                                <li>• Payments may be made via bank transfer, mobile money (M-Pesa), credit/debit card.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">2. Deposits & Balance Payments</h3>
                              <ul className="space-y-2 text-sm">
                                <li>• A non-refundable deposit of £300 per person is required to secure your booking. Occasionally, a non-refundable deposit greater than £300 may be required, and you will be advised of this at the time of booking.</li>
                                <li>• The balance must be received no later than 8 weeks prior to the start of your trip.</li>
                                <li>• If the balance is not paid by the due date, we reserve the right to treat your booking as cancelled, and the deposit will be forfeited.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">3. Cancellations by You</h3>
                              <p className="text-sm mb-2">If you need to cancel your booking, you must notify us in writing. The following cancellation fees apply:</p>
                              <ul className="space-y-2 text-sm">
                                <li>• More than 56 days before travel: Deposit only.</li>
                                <li>• 55 – 43 days before travel: 30% of total holiday price.</li>
                                <li>• 42 – 29 days before travel: 50% of total holiday price.</li>
                                <li>• 28 – 15 days before travel: 75% of total holiday price.</li>
                                <li>• Less than 14 days before travel: 100% of total holiday price.</li>
                              </ul>
                              <p className="text-sm mt-2">If the deposit paid is greater than any of the cancellation bands, the higher amount will apply as a cancellation charge.</p>
                              <p className="text-sm mt-2">Certain suppliers (e.g., airlines, hotels) may impose stricter cancellation terms, which will apply in addition to the above.</p>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">4. Cancellations by Us</h3>
                              <ul className="space-y-2 text-sm">
                                <li>• We may cancel your booking due to unforeseen circumstances, including safety concerns, natural disasters, government restrictions, or insufficient participant numbers (if applicable).</li>
                                <li>• In such cases, we will offer you a full refund or the option to reschedule at no additional cost.</li>
                                <li>• We are not liable for additional expenses you may incur (e.g., flights, visas, vaccinations) due to such cancellations.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">5. Changes to Your Booking</h3>
                              <ul className="space-y-2 text-sm">
                                <li>• Requests for changes to dates, itineraries, or participants must be made in writing and are subject to availability.</li>
                                <li>• Additional charges may apply if suppliers impose amendment fees.</li>
                                <li>• If we must make changes to your booking (e.g., due to supplier availability), we will inform you as soon as possible and offer an alternative arrangement of equal or higher value.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">6. Travel Insurance</h3>
                              <ul className="space-y-2 text-sm">
                                <li>• Comprehensive travel insurance is strongly recommended for all travellers.</li>
                                <li>• Your policy should cover medical emergencies, evacuation, trip cancellations, delays, lost luggage, and any high-risk activities (e.g., safari, diving, hiking).</li>
                                <li>• We are not responsible for any costs incurred as a result of you failing to secure adequate insurance.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">7. Health, Safety & Travel Documents</h3>
                              <ul className="space-y-2 text-sm">
                                <li>• You are responsible for ensuring that you meet all health, vaccination, visa, and passport requirements for your trip.</li>
                                <li>• Passports must be valid for at least 6 months beyond your travel dates.</li>
                                <li>• You must inform us of any medical conditions, dietary requirements, or special needs at the time of booking.</li>
                                <li>• While we take all reasonable measures to ensure your safety, you travel at your own risk and must follow all instructions provided by our guides and partners.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">8. Force Majeure</h3>
                              <p className="text-sm mb-2">We are not liable for delays, changes, or cancellations caused by events beyond our reasonable control, including but not limited to:</p>
                              <ul className="space-y-2 text-sm">
                                <li>• Natural disasters (floods, earthquakes, storms)</li>
                                <li>• War, terrorism, political unrest, or strikes</li>
                                <li>• Epidemics, pandemics, or government-imposed restrictions</li>
                                <li>• Technical or operational failures by third-party providers (airlines, hotels, transport companies)</li>
                              </ul>
                              <p className="text-sm mt-2">In such cases, refunds or rescheduling options will be provided where possible but are not guaranteed.</p>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">9. Liability</h3>
                              <ul className="space-y-2 text-sm">
                                <li>• Our liability is strictly limited to the amount paid to us for your booking.</li>
                                <li>• We act as an agent for third-party suppliers (e.g., hotels, airlines, transport providers) and are not responsible for their acts, omissions, or failures.</li>
                                <li>• We are not liable for personal injury, illness, death, loss, or damage to property unless directly caused by our proven negligence.</li>
                                <li>• Participation in certain activities (e.g., safaris, water sports, adventure tours) involves inherent risks. By booking, you acknowledge and accept these risks.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">10. Client Responsibilities</h3>
                              <ul className="space-y-2 text-sm">
                                <li>• You are responsible for ensuring that all details in your booking confirmation are accurate.</li>
                                <li>• You must conduct yourself responsibly and respect local laws, customs, wildlife, and communities during your trip.</li>
                                <li>• We reserve the right to refuse service or terminate your participation in a tour without refund if your behaviour is unsafe, disruptive, or offensive.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">11. Complaints</h3>
                              <ul className="space-y-2 text-sm">
                                <li>• If you have a complaint during your trip, you must notify us or our local representative immediately so that we can attempt to resolve it.</li>
                                <li>• Complaints not raised during the trip must be submitted in writing within 14 days of your return.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">12. Governing Law</h3>
                              <p className="text-sm">These Terms are governed by the laws of Kenya. Any disputes will be subject to the exclusive jurisdiction of the courts of Nairobi, Kenya.</p>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">13. Contact Information</h3>
                              <p className="text-sm mb-2">For questions, concerns, or support, please contact us:</p>
                              <ul className="space-y-1 text-sm">
                                <li>📧 info@reenettetours.com</li>
                                <li>📞 +254 712 345 678</li>
                                <li>📍 Nairobi, Kenya</li>
                              </ul>
                            </section>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : link === 'Privacy Policy' ? (
                    <Dialog>
                      <DialogTrigger asChild data-privacy-policy>
                        <button className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 text-left">
                          {link}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-center">Privacy Policy</DialogTitle>
                          <p className="text-sm text-muted-foreground text-center">Last Updated: 22 August 2025</p>
                        </DialogHeader>
                        <div className="space-y-6 py-4">
                          <p className="text-sm">
                            At Reenette Tours and Travel, your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, make a booking, or contact us.
                          </p>
                          <p className="text-sm">
                            By using our website, you agree to the practices described in this policy.
                          </p>
                          
                          <div className="space-y-4">
                            <section>
                              <h3 className="font-bold text-lg mb-2">1. Information We Collect</h3>
                              <p className="text-sm mb-2">We may collect the following information when you interact with us:</p>
                              <ul className="space-y-2 text-sm">
                                <li>• Personal details – name, email address, phone number, billing address.</li>
                                <li>• Booking details – travel dates, preferences, accommodation, and activity choices.</li>
                                <li>• Payment details – processed securely via trusted payment providers (we do not store your full card information).</li>
                                <li>• Website usage data – through cookies, analytics, and similar tools (see our Cookie Policy).</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">2. How We Use Your Information</h3>
                              <p className="text-sm mb-2">We use your information to:</p>
                              <ul className="space-y-2 text-sm">
                                <li>• Process and confirm your bookings.</li>
                                <li>• Communicate with you about your trip or enquiry.</li>
                                <li>• Improve our website, services, and customer experience.</li>
                                <li>• Send you offers, promotions, or newsletters (if you opt in).</li>
                                <li>• Comply with legal and regulatory requirements.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">3. Sharing Your Information</h3>
                              <p className="text-sm mb-2">We only share your data when necessary:</p>
                              <ul className="space-y-2 text-sm">
                                <li>• With service providers (e.g., hotels, airlines, tour guides) to deliver your booking.</li>
                                <li>• With payment processors to complete transactions securely.</li>
                                <li>• If required by law, government authorities, or to protect our legal rights.</li>
                              </ul>
                              <p className="text-sm mt-2">We do not sell or rent your personal data to third parties.</p>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">4. Cookies & Tracking</h3>
                              <ul className="space-y-2 text-sm">
                                <li>• Our website uses cookies and similar technologies to improve functionality, track usage, and deliver relevant offers.</li>
                                <li>• For more details, please read our Cookie Policy.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">5. Data Security</h3>
                              <ul className="space-y-2 text-sm">
                                <li>• We take appropriate technical and organisational measures to protect your personal data from loss, misuse, or unauthorised access.</li>
                                <li>• However, no online system is 100% secure, so we cannot guarantee absolute protection.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">6. Your Rights</h3>
                              <p className="text-sm mb-2">Depending on applicable law (e.g., GDPR, Kenya Data Protection Act), you may have the right to:</p>
                              <ul className="space-y-2 text-sm">
                                <li>• Access, correct, or delete your personal data.</li>
                                <li>• Withdraw consent for marketing communications at any time.</li>
                                <li>• Request restriction of processing or data portability.</li>
                              </ul>
                              <p className="text-sm mt-2">To exercise these rights, contact us at info@reenettetours.com.</p>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">7. Data Retention</h3>
                              <p className="text-sm mb-2">We keep your personal data only as long as necessary to:</p>
                              <ul className="space-y-2 text-sm">
                                <li>• Fulfil your booking and provide services.</li>
                                <li>• Meet legal, tax, or regulatory requirements.</li>
                                <li>• Resolve disputes and enforce agreements.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">8. Third-Party Links</h3>
                              <p className="text-sm">Our website may contain links to other websites (e.g., travel insurance partners, tour providers). We are not responsible for the privacy practices or content of external sites.</p>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">9. Children's Privacy</h3>
                              <p className="text-sm">Our services are not directed at children under 18. If we learn that we have collected personal data from a minor without parental consent, we will delete it promptly.</p>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">10. Changes to This Policy</h3>
                              <p className="text-sm">We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new "Last Updated" date.</p>
                            </section>

                            <section>
                              <h3 className="font-bold text-lg mb-2">11. Contact Us</h3>
                              <p className="text-sm mb-2">If you have any questions about this Privacy Policy or how your information is handled, please contact us:</p>
                              <div className="space-y-2 text-sm">
                                <p>📧 info@reenettetours.com</p>
                                <p>📞 +254 712 345 678</p>
                                <p>📍 Nairobi, Kenya</p>
                              </div>
                            </section>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <a
                      href="#"
                      className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
                    >
                      {link}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="text-sm opacity-80 text-center md:text-right">
              <p>&copy; 2025 Reenette Tours and Travel Ltd. All rights reserved.</p>
              <p className="mt-1">Licensed Kenya Tour Operator | Fully Bonded | KATA Member</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}