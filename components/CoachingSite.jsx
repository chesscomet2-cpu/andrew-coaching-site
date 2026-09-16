'use client'

import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function CoachingSite() {
  const [copied, setCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('chesscomet2@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-2">
     
          <span className="text-lg font-semibold text-blue-900">Andrew Jeselson</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="text-5xl font-bold text-blue-900 mb-2 leading-tight">
                Expert Chess Coaching
              </h1>
              <p className="text-2xl text-gray-700 mb-8 font-light">
                Online lessons from an accomplished competitive player
              </p>

              {/* Credentials */}
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-4xl font-bold text-blue-900">2055</div>
                  <p className="text-gray-600">USCF Rating (Expert Level)</p>
                </div>

                <div className="text-sm text-gray-600 space-y-2">
                  <p>✓ 10+ years competitive chess experience</p>
                  <p>✓ Tournament player with titled opposition</p>
                  <p>✓ Online and over-the-board competition</p>
                  <p>✓ Personalized lesson approach</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <button
                  onClick={handleEmailCopy}
                  className="px-6 py-3 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>
                <a
                  href="mailto:chesscomet2@gmail.com"
                  className="px-6 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded hover:bg-blue-50 transition"
                >
                  Email Me
                </a>
              </div>
            </div>

            {/* Image Placeholder - you can replace with actual <img
  src="/d96fba83-4786-47fe-acf4-fac734d44b1e.jpeg"
  alt="Andrew chess coaching"
  className="rounded-lg aspect-square object-cover w-full"
/>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">About</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm an Expert-level chess player with 10+ years of competitive experience. I've competed in tournaments across the country, playing against titled players both online and over the board.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I enjoy working with students of all levels—from beginners learning the basics to experienced players looking to sharpen their skills and reach the next rating milestone. My coaching focuses on understanding your goals and tailoring lessons to help you improve.
          </p>
        </div>
      </section>

      {/* Rates Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Online Coaching</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-6">
            <div className="text-5xl font-bold text-blue-900 mb-2">$50</div>
            <p className="text-gray-600 text-lg">per hour</p>
          </div>

          <p className="text-gray-700 text-lg mb-6">
            I offer flexible online coaching sessions tailored to your needs—whether you want to work on opening preparation, middle game tactics, endgame technique, or game analysis.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📧 Contact me to schedule a lesson</p>
            <p>💬 We'll discuss your chess goals and availability</p>
            <p>🎯 Lessons are customized to help you improve</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to improve?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Get in touch to discuss your chess goals and book your first lesson
          </p>
          <div className="space-y-3">
            <a
              href="mailto:chesscomet2@gmail.com"
              className="inline-block px-8 py-3 bg-white text-blue-900 font-semibold rounded hover:bg-gray-100 transition"
            >
              Email: chesscomet2@gmail.com
            </a>
            <p className="text-blue-100 text-sm">
              Based in Revere, MA • Available for online coaching
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-6 text-center text-gray-600 text-sm">
          <p>Expert chess coaching • Online lessons • Personalized instruction</p>
        </div>
      </footer>
    </div>
  );
}
