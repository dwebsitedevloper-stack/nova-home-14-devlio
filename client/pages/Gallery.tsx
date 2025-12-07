import Navbar from "@/components/Navbar";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-soft-beige">
      <Navbar />
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Leaf className="w-16 h-16 text-forest-green mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            Gallery
          </h1>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-lg text-foreground mb-6">
              This page is ready to be customized! Continue prompting me to add more gallery images, videos, and detailed photo collections of facilities, classes, and events.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/"
                className="px-6 py-2 bg-forest-green text-white rounded-lg font-bold hover:bg-forest-green/90 transition-colors"
              >
                Back to Home
              </Link>
              <button
                onClick={() => {
                  const userMessage = "Please add detailed Gallery content with organized photo collections, categories, and video highlights of NatureGym facilities and events.";
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
    </div>
  );
}
