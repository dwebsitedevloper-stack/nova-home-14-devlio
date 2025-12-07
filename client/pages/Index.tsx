import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Leaf, MapPin, Phone, Mail, Users, Dumbbell, Leaf as LeafIcon } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Index() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const programs = [
    {
      title: "Strength Training",
      description: "Build muscle and increase endurance with our comprehensive strength program using both traditional and nature-inspired equipment.",
      icon: "💪",
    },
    {
      title: "Outdoor Yoga & Mindfulness",
      description: "Connect with nature while improving flexibility, balance, and mental clarity in our serene outdoor spaces.",
      icon: "🧘",
    },
    {
      title: "Cardio & Conditioning",
      description: "High-energy workouts combining trail running, circuit training, and eco-friendly cardio equipment.",
      icon: "🏃",
    },
    {
      title: "Wellness & Recovery",
      description: "Holistic wellness program including meditation, stretching, nutrition guidance, and recovery sessions.",
      icon: "🌿",
    },
  ];

  const trainers = [
    {
      name: "Alex Rivera",
      specialty: "Strength & Conditioning",
      image: "https://images.pexels.com/photos/6539791/pexels-photo-6539791.jpeg",
      bio: "10+ years of experience in functional fitness and outdoor training.",
    },
    {
      name: "Jordan Chen",
      specialty: "Yoga & Mindfulness",
      image: "https://images.pexels.com/photos/9004275/pexels-photo-9004275.jpeg",
      bio: "Certified yoga instructor dedicated to holistic wellness.",
    },
    {
      name: "Casey Morgan",
      specialty: "Cardio & Endurance",
      image: "https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg",
      bio: "Marathon runner and certified fitness coach specializing in outdoor training.",
    },
  ];

  const testimonials = [
    {
      quote: "NatureGym completely transformed my relationship with fitness. Training outdoors surrounded by nature has improved both my physical health and mental wellbeing.",
      author: "Sarah Johnson",
      role: "Member since 2023",
    },
    {
      quote: "The trainers here are incredibly knowledgeable and passionate about sustainable fitness. I've never felt more motivated and supported.",
      author: "Michael Torres",
      role: "Premium Member",
    },
    {
      quote: "Finally found a gym that aligns with my values! The eco-friendly approach combined with excellent training facilities is unbeatable.",
      author: "Emma Wilson",
      role: "Yoga Enthusiast",
    },
  ];

  const wellnessTips = [
    {
      title: "Connect with Nature Daily",
      description: "Spending just 20 minutes outdoors can reduce stress and boost mood. Integrate nature into your daily wellness routine.",
    },
    {
      title: "Sustainable Nutrition",
      description: "Focus on whole foods, local produce, and plant-based options. Proper nutrition fuels both your body and the planet.",
    },
    {
      title: "Holistic Recovery",
      description: "Balance intense workouts with proper sleep, meditation, and stretching. Recovery is when growth happens.",
    },
    {
      title: "Eco-Conscious Habits",
      description: "Choose sustainable workout gear, reduce waste, and support environmental conservation through your lifestyle choices.",
    },
  ];

  const membershipPlans = [
    {
      name: "Monthly",
      price: "$49",
      period: "per month",
      features: [
        "Unlimited gym access",
        "All outdoor facilities",
        "Group classes included",
        "Basic fitness assessment",
        "Community access",
      ],
    },
    {
      name: "Yearly",
      price: "$499",
      period: "per year",
      features: [
        "Unlimited gym access",
        "All outdoor facilities",
        "Group classes included",
        "Monthly fitness assessment",
        "Priority trainer booking",
        "Exclusive wellness workshops",
        "Guest passes (12/year)",
        "2 months free equivalent",
      ],
      highlighted: true,
    },
  ];

  const faqs = [
    {
      question: "What's included in a gym membership?",
      answer: "Your membership includes unlimited access to all indoor and outdoor facilities, group classes, and community events. Additional personal training and specialized programs are available.",
    },
    {
      question: "Do I need to be fit to join?",
      answer: "Absolutely not! NatureGym welcomes everyone at any fitness level. Our trainers will create a personalized program tailored to your current abilities and goals.",
    },
    {
      question: "What about weather conditions?",
      answer: "We offer both indoor facilities and covered outdoor spaces. Our trainers can adapt workouts for any weather, and we're open year-round with climate-controlled options.",
    },
    {
      question: "Are personal training sessions available?",
      answer: "Yes! Personal training sessions with our certified trainers are available for an additional fee. You can book with any trainer whose specialty matches your goals.",
    },
    {
      question: "Is there a contract requirement?",
      answer: "No contracts required! Our monthly membership offers flexibility, and our yearly plan provides significant savings. Cancel anytime with 30 days notice.",
    },
  ];

  const galleries = [
    {
      image: "https://images.pexels.com/photos/812745/pexels-photo-812745.jpeg",
      title: "Strength Training Zone",
    },
    {
      image: "https://images.pexels.com/photos/9004275/pexels-photo-9004275.jpeg",
      title: "Outdoor Yoga Area",
    },
    {
      image: "https://images.pexels.com/photos/434400/pexels-photo-434400.jpeg",
      title: "Adventure Training",
    },
    {
      image: "https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg",
      title: "Group Fitness Classes",
    },
    {
      image: "https://images.pexels.com/photos/6539791/pexels-photo-6539791.jpeg",
      title: "Equipment Facilities",
    },
    {
      image: "https://images.pexels.com/photos/7077809/pexels-photo-7077809.jpeg",
      title: "Wellness & Recovery",
    },
  ];

  return (
    <div className="min-h-screen bg-soft-beige">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/812745/pexels-photo-812745.jpeg)",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 animate-bounce">
            <Leaf className="w-16 h-16" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Nature Meets Fitness
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Experience holistic wellness in perfect harmony with nature. Train hard, live green, thrive together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/membership"
              className="px-8 py-3 bg-forest-green hover:bg-forest-green/90 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              Join Now
            </Link>
            <Link
              to="/programs"
              className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-bold text-lg transition-colors border border-white"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Gym Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-forest-green">
            Welcome to NatureGym
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-soft-beige rounded-lg">
              <Leaf className="w-12 h-12 text-forest-green mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-forest-green">5 Outdoor Zones</h3>
              <p className="text-foreground">
                Expansive outdoor training areas surrounded by natural beauty and greenery for authentic outdoor fitness.
              </p>
            </div>
            <div className="p-8 bg-soft-beige rounded-lg">
              <Dumbbell className="w-12 h-12 text-earthy-brown mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-forest-green">Premium Equipment</h3>
              <p className="text-foreground">
                State-of-the-art strength training equipment, eco-friendly machines, and functional training areas.
              </p>
            </div>
            <div className="p-8 bg-soft-beige rounded-lg">
              <Users className="w-12 h-12 text-forest-green mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-forest-green">50+ Acres</h3>
              <p className="text-foreground">
                Sprawling campus providing ample space for training, recovery zones, and sustainable facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 bg-forest-green text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="p-8 bg-forest-green/50 border border-white/20 rounded-lg hover:bg-forest-green/70 transition-colors"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-white/90">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-forest-green">
            Meet Our Trainers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 animate-zoom-in"
                  />
                </div>
                <div className="p-6 bg-soft-beige">
                  <h3 className="text-2xl font-bold text-forest-green mb-2">{trainer.name}</h3>
                  <p className="text-earthy-brown font-semibold mb-3">{trainer.specialty}</p>
                  <p className="text-foreground">{trainer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-forest-green text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            What Our Members Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-forest-green/50 border border-white/20 rounded-lg">
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-white/80">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Tips */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-forest-green">
            Wellness Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {wellnessTips.map((tip, index) => (
              <div key={index} className="p-8 bg-soft-beige rounded-lg border-l-4 border-earthy-brown">
                <h3 className="text-2xl font-bold text-forest-green mb-3">{tip.title}</h3>
                <p className="text-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="membership" className="py-20 px-4 bg-soft-beige">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-forest-green">
            Membership Plans
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg transition-all ${
                  plan.highlighted
                    ? "bg-forest-green text-white scale-105 shadow-2xl"
                    : "bg-white border-2 border-forest-green/20"
                }`}
              >
                <h3 className={`text-3xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-forest-green"}`}>
                  {plan.name}
                </h3>
                <p className={`text-5xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-earthy-brown"}`}>
                  {plan.price}
                </p>
                <p className={`mb-6 ${plan.highlighted ? "text-white/80" : "text-foreground"}`}>
                  {plan.period}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Leaf className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-forest-green"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold text-lg transition-all ${
                  plan.highlighted
                    ? "bg-white text-forest-green hover:bg-white/90"
                    : "bg-forest-green text-white hover:bg-forest-green/90"
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-forest-green">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((item, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 animate-zoom-in"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end">
                  <p className="text-white font-bold text-lg p-4">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-soft-beige">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-forest-green">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-forest-green/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 bg-white hover:bg-soft-beige transition-colors flex items-center justify-between text-left"
                >
                  <h3 className="text-xl font-bold text-forest-green">{faq.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-forest-green transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="p-6 bg-soft-beige border-t-2 border-forest-green/20">
                    <p className="text-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 bg-forest-green/50 rounded-lg">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-white/90">
                2500 Forest Trail Lane<br />
                Green Valley, CA 94025
              </p>
            </div>
            <div className="p-8 bg-forest-green/50 rounded-lg">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-white/90">
                (555) 123-4567<br />
                Mon-Sun, 6 AM - 10 PM
              </p>
            </div>
            <div className="p-8 bg-forest-green/50 rounded-lg">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-white/90">
                info@naturegym.com<br />
                support@naturegym.com
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-forest-green rounded-lg font-bold text-lg hover:bg-white/90 transition-colors"
          >
            Send us a Message
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-green/10 py-8 px-4 border-t border-forest-green/20">
        <div className="max-w-6xl mx-auto text-center text-foreground">
          <p>&copy; 2024 NatureGym. All rights reserved. Designed for wellness and sustainability.</p>
        </div>
      </footer>
    </div>
  );
}
