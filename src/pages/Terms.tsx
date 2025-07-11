
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: December 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using our services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Services</h2>
            <p className="text-muted-foreground mb-4">
              We provide digital agency services including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Web development and design</li>
              <li>Mobile application development</li>
              <li>UI/UX design services</li>
              <li>Digital marketing solutions</li>
              <li>SEO optimization</li>
              <li>E-commerce solutions</li>
            </ul>
          </div>

          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Payment Terms</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Payment terms will be specified in individual project agreements</li>
              <li>All payments are due within 30 days of invoice date unless otherwise agreed</li>
              <li>Late payments may incur additional fees</li>
              <li>Refunds are subject to our refund policy as outlined in project agreements</li>
            </ul>
          </div>

          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property</h2>
            <p className="text-muted-foreground">
              Upon full payment, clients receive full ownership of custom work created specifically 
              for their project. We retain rights to general methodologies, techniques, and 
              pre-existing intellectual property.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Our liability is limited to the amount paid for services. We are not liable for 
              indirect, incidental, or consequential damages.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, contact us at:
            </p>
            <div className="mt-4">
              <p className="text-muted-foreground">Email: legal@digitalagency.com</p>
              <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
