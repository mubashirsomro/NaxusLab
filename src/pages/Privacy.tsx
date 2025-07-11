
import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: December 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              fill out a form, or contact us for support.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>
          </div>

          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate about new features and updates</li>
            </ul>
          </div>

          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4">
              <p className="text-muted-foreground">Email: privacy@digitalagency.com</p>
              <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
