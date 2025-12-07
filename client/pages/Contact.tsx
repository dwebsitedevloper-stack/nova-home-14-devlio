import Navbar from "@/components/Navbar";
import { Leaf, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-soft-beige">
      <Navbar />
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Leaf className="w-16 h-16 text-forest-green mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
              Contact Us
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-forest-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-forest-green mb-2">Address</h3>
                    <p className="text-foreground">
                      2500 Forest Trail Lane<br />
                      Green Valley, CA 94025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <Phone className="w-6 h-6 text-forest-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-forest-green mb-2">Phone</h3>
                    <p className="text-foreground">
                      (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <Mail className="w-6 h-6 text-forest-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-forest-green mb-2">Email</h3>
                    <p className="text-foreground">
                      info@naturegym.com<br />
                      support@naturegym.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-forest-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-forest-green mb-2">Hours</h3>
                    <p className="text-foreground">
                      Monday - Friday: 6 AM - 10 PM<br />
                      Saturday - Sunday: 7 AM - 8 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Content Area */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-forest-green mb-4">Get in Touch</h2>
              <p className="text-foreground mb-6">
                Ready to start your wellness journey? Reach out to us with any questions about our programs, memberships, or facilities. We're here to help you achieve your fitness goals!
              </p>
              <p className="text-foreground mb-6">
                You can visit us in person during our operating hours, call us to schedule a tour, or send us an email with your inquiries.
              </p>
              <Link
                to="/"
                className="inline-block px-6 py-2 bg-forest-green text-white rounded-lg font-bold hover:bg-forest-green/90 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Placeholder for future features */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-xl font-bold text-forest-green mb-4">More Coming Soon</h3>
            <p className="text-foreground mb-4">
              This Contact page is ready to be enhanced! You can ask me to add a contact form, embedded map, team directory, or more detailed contact options.
            </p>
            <button
              onClick={() => {
                const userMessage = "Please add more contact page features like a contact form, embedded map, or team directory.";
                alert("Ready to update this page! Share your content request: " + userMessage);
              }}
              className="px-6 py-2 bg-earthy-brown text-white rounded-lg font-bold hover:bg-earthy-brown/90 transition-colors"
            >
              Customize This Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
