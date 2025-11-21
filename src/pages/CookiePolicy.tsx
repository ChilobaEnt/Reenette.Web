import { Navigation } from '@/components/ui/navigation';
import { useEffect } from 'react';
import { Footer } from '@/components/sections/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Clock, Settings, Mail, MapPin } from 'lucide-react';

const CookiePolicy = () => {
  useEffect(() => {
    // Add a meta robots tag to prevent indexing of this page
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      // Clean up when the component unmounts
      if (meta && meta.parentNode) meta.parentNode.removeChild(meta);
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Last Updated: 12 August 2025</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">1</Badge>
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                This Cookie Policy explains how Renette Tours ("we", "our", "us") uses cookies and similar technologies to recognise you when you visit our website. It explains what these technologies are, why we use them, and your rights to control their use.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By continuing to browse or use our website, you agree to the use of cookies as described in this policy.
              </p>
            </CardContent>
          </Card>

          {/* What Are Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">2</Badge>
                What Are Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files placed on your device (computer, smartphone, or other internet-enabled device) when you visit a website. They help make websites work more efficiently and provide information to the site owners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cookies can be:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                <li><strong>Session Cookies</strong> – deleted when you close your browser.</li>
                <li><strong>Persistent Cookies</strong> – stay on your device until deleted or expired.</li>
              </ul>
            </CardContent>
          </Card>

          {/* How We Use Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">3</Badge>
                How We Use Cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Improve Website Performance</strong> – ensure our site functions smoothly.</li>
                <li><strong>Enhance User Experience</strong> – remember your preferences, such as language and region.</li>
                <li><strong>Analytics</strong> – track website traffic and usage to improve content and services.</li>
                <li><strong>Marketing</strong> – show you relevant offers, tours, and promotions based on your interests.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Types of Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">4</Badge>
                Types of Cookies We Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Type</th>
                      <th className="text-left p-4 font-semibold">Purpose</th>
                      <th className="text-left p-4 font-semibold">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-4">Essential Cookies</td>
                      <td className="p-4">Needed for core website functionality.</td>
                      <td className="p-4">Login sessions, security features.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Performance & Analytics Cookies</td>
                      <td className="p-4">Help us understand how visitors use the site.</td>
                      <td className="p-4">Google Analytics, visitor counts.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Functionality Cookies</td>
                      <td className="p-4">Remember your preferences and settings.</td>
                      <td className="p-4">Language selection, saved itineraries.</td>
                    </tr>
                    <tr>
                      <td className="p-4">Advertising Cookies</td>
                      <td className="p-4">Show relevant ads or special offers.</td>
                      <td className="p-4">Facebook Pixel, Google Ads tracking.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">5</Badge>
                Third-Party Cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Some cookies are set by third-party services we use for analytics, advertising, or social media sharing (e.g., Google, Facebook, Instagram). We have no control over these cookies; please refer to their respective privacy policies for more details.
              </p>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">6</Badge>
                <Settings className="h-5 w-5" />
                Managing Cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Adjust your browser settings to block or delete cookies.</li>
                <li>Opt out of targeted advertising via industry opt-out tools.</li>
                <li>Use our Cookie Consent Tool to change your preferences anytime.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                Note: Disabling certain cookies may affect the functionality and performance of our website.
              </p>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">7</Badge>
                Updates to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, law, or our practices. Any updates will be posted here with a revised "Last Updated" date.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">8</Badge>
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@reenettetours.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;