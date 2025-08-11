import React from "react";
import { motion } from "framer-motion";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const Privacy = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: "information-collection", title: "Information We Collect" },
    { id: "information-usage", title: "How We Use Your Information" },
    { id: "information-sharing", title: "Information Sharing" },
    { id: "data-security", title: "Data Security" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "your-rights", title: "Your Rights" },
    { id: "data-retention", title: "Data Retention" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-20"
      >
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we protect and handle your information.
          </p>
          <p className="text-sm md:text-base text-indigo-300 mt-4">
            Last updated: August 09, 2025
          </p>
        </div>
      </motion.div>

      {/* Table of Contents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gray-50 py-8 md:py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-indigo-950 mb-6 text-center">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-left p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300 border border-gray-200 hover:border-orange-200"
              >
                <span className="text-orange-500 font-medium text-sm">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <span className="ml-2 text-gray-700 text-sm md:text-base">
                  {section.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="bg-gradient-to-r from-orange-50 to-indigo-50 p-6 md:p-8 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <strong className="text-indigo-950">TIND Logistics</strong> is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our logistics services and website.
              </p>
            </div>
          </motion.div>

          {/* Section 1: Information We Collect */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="information-collection"
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-6 md:mb-8 border-b-2 border-orange-500 pb-3">
              1. Information We Collect
            </h2>
            
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-indigo-800 mb-4">
                  Personal Information
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  We collect personally identifiable information that you voluntarily provide when you:
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-2 ml-4">
                  <li>Create an account on our platform</li>
                  <li>Request logistics services or shipping quotes</li>
                  <li>Contact our customer support team</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Complete forms on our website</li>
                </ul>
                
                <div className="mt-6 bg-gray-50 p-4 md:p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>This information may include:</strong>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Full name and contact details</li>
                      <li>• Email address and phone number</li>
                      <li>• Company information</li>
                      <li>• Shipping addresses</li>
                    </ul>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Payment and billing information</li>
                      <li>• Account credentials</li>
                      <li>• Service preferences</li>
                      <li>• Communication history</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-indigo-800 mb-4">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  When you visit our website, we automatically collect certain information about your device and browsing behavior:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-2">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Operating system details</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-2">
                    <li>Pages visited and time spent</li>
                    <li>Referring website information</li>
                    <li>Search terms used</li>
                    <li>Usage patterns and preferences</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 2: How We Use Your Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="information-usage"
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-6 md:mb-8 border-b-2 border-orange-500 pb-3">
              2. How We Use Your Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: "🚚",
                  title: "Service Delivery",
                  description: "To provide, maintain, and improve our logistics and shipping services"
                },
                {
                  icon: "📞",
                  title: "Communication",
                  description: "To send service updates, confirmations, and provide customer support"
                },
                {
                  icon: "👤",
                  title: "Account Management",
                  description: "To create, maintain, and manage your user account and preferences"
                },
                {
                  icon: "💳",
                  title: "Payment Processing",
                  description: "To process transactions securely and prevent fraudulent activities"
                },
                {
                  icon: "📊",
                  title: "Analytics & Improvement",
                  description: "To understand user behavior and continuously improve our services"
                },
                {
                  icon: "⚖️",
                  title: "Legal Compliance",
                  description: "To comply with applicable laws, regulations, and industry standards"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <span className="text-2xl md:text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-indigo-800 text-base md:text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 3: Information Sharing */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="information-sharing"
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-6 md:mb-8 border-b-2 border-orange-500 pb-3">
              3. Information Sharing and Disclosure
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-4 md:p-6 rounded-r-lg mb-6 md:mb-8">
              <p className="text-red-800 font-medium text-sm md:text-base">
                <strong>Important:</strong> We do not sell, trade, or otherwise transfer your personal information to third parties for their marketing purposes.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-indigo-800 mb-4">
                  Trusted Service Providers
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  We may share your information with trusted third-party service providers who assist us in operating our business:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Payment processors</li>
                      <li>• Shipping partners</li>
                      <li>• Cloud hosting providers</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Customer support tools</li>
                      <li>• Analytics platforms</li>
                      <li>• Security services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-indigo-800 mb-4">
                  Legal Requirements
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We may disclose your information when required by law or to protect our rights, prevent fraud, enforce our terms of service, or comply with legal processes and government requests.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Data Security */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="data-security"
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-6 md:mb-8 border-b-2 border-orange-500 pb-3">
              4. Data Security
            </h2>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 md:p-6 rounded-r-lg mb-6 md:mb-8">
              <p className="text-green-800 text-sm md:text-base leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: "🔒", title: "SSL Encryption", description: "All data transmission is encrypted using SSL/TLS protocols" },
                { icon: "🛡️", title: "Secure Servers", description: "Our servers are protected with advanced firewalls and security systems" },
                { icon: "👥", title: "Access Controls", description: "Strict employee access controls and regular security training" },
                { icon: "🔍", title: "Regular Audits", description: "Periodic security assessments and vulnerability testing" },
                { icon: "🔐", title: "Multi-Factor Authentication", description: "Enhanced protection for sensitive account access" },
                { icon: "📱", title: "Device Security", description: "Secure authentication for mobile and web applications" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-5 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-2xl md:text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-indigo-800 text-sm md:text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 bg-yellow-50 border border-yellow-200 p-4 md:p-6 rounded-lg">
              <p className="text-yellow-800 text-sm md:text-base">
                <strong>Please note:</strong> While we implement robust security measures, no method of transmission over the internet is 100% secure. We continuously work to improve our security practices to protect your information.
              </p>
            </div>
          </motion.section>

          {/* Section 5: Cookies & Tracking */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="cookies"
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-6 md:mb-8 border-b-2 border-orange-500 pb-3">
              5. Cookies and Tracking Technologies
            </h2>
            
            <div className="space-y-6 md:space-y-8">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Our website uses cookies and similar technologies to enhance your browsing experience and improve our services. Cookies are small data files stored on your device that help us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-indigo-800">Essential Cookies</h3>
                  <ul className="text-gray-600 text-sm md:text-base space-y-2">
                    <li>• Remember your login information</li>
                    <li>• Maintain your session preferences</li>
                    <li>• Enable core website functionality</li>
                    <li>• Ensure security features work properly</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-indigo-800">Analytics & Performance</h3>
                  <ul className="text-gray-600 text-sm md:text-base space-y-2">
                    <li>• Analyze website traffic and usage</li>
                    <li>• Understand user behavior patterns</li>
                    <li>• Improve website performance</li>
                    <li>• Provide personalized content</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Cookie Management</h4>
                <p className="text-blue-700 text-sm md:text-base">
                  You can control cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality and your user experience.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 6: Your Rights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="your-rights"
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-6 md:mb-8 border-b-2 border-orange-500 pb-3">
              6. Your Rights and Choices
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              You have several rights regarding your personal information. You can exercise these rights by contacting us using the information provided in this policy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                { 
                  title: "Access", 
                  description: "Request a copy of the personal information we hold about you",
                  icon: "👁️"
                },
                { 
                  title: "Correction", 
                  description: "Request correction of inaccurate or incomplete information",
                  icon: "✏️"
                },
                { 
                  title: "Deletion", 
                  description: "Request deletion of your personal information (subject to legal requirements)",
                  icon: "🗑️"
                },
                { 
                  title: "Portability", 
                  description: "Request transfer of your data to another service provider",
                  icon: "📤"
                },
                { 
                  title: "Opt-out", 
                  description: "Unsubscribe from marketing communications at any time",
                  icon: "🚫"
                },
                { 
                  title: "Restriction", 
                  description: "Request restriction of processing in certain circumstances",
                  icon: "⏸️"
                }
              ].map((right, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-xl md:text-2xl">{right.icon}</span>
                    <div>
                      <h4 className="font-semibold text-indigo-800 text-base md:text-lg mb-2">
                        {right.title}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {right.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 7: Data Retention */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="data-retention"
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-6 md:mb-8 border-b-2 border-orange-500 pb-3">
              7. Data Retention
            </h2>
            
            <div className="space-y-6 md:space-y-8">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We retain your personal information only as long as necessary to fulfill the purposes for which it was collected and to comply with our legal obligations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-4">Retention Periods</h3>
                  <ul className="text-gray-600 text-sm md:text-base space-y-2">
                    <li>• Account data: Until account deletion</li>
                    <li>• Transaction records: 7 years (legal requirement)</li>
                    <li>• Communication logs: 3 years</li>
                    <li>• Website analytics: 2 years</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-4">Secure Deletion</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    When data retention periods expire, we securely delete or anonymize your information using industry-standard methods to ensure it cannot be recovered.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 8: Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="contact"
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-6 md:mb-8 border-b-2 border-orange-500 pb-3">
              8. Contact Us
            </h2>
            
            <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                Privacy Questions or Concerns?
              </h3>
              <p className="text-indigo-100 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                If you have any questions about this Privacy Policy or our privacy practices, please don't hesitate to contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 md:mb-4">Contact Information</h4>
                  <div className="space-y-2 md:space-y-3 text-sm md:text-base">
                    <p><strong>Email:</strong> info@tind-ng.com</p>
                    <p><strong>Customer Care:</strong> +234 815 987 9973</p>
                    <p><strong>Business Line:</strong> +234 809 787 2172</p>
                    <p><strong>Address:</strong> 129, Yaba Road, Yaba Lagos</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 md:mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm md:text-base">
                    <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
                    <p><strong>Weekend:</strong> Closed</p>
                    <p><strong>Response Time:</strong> Within 24 hours</p>
                  </div>
                  <div className="mt-4 md:mt-6">
                    <p className="text-indigo-200 text-xs md:text-sm">
                      For urgent privacy matters, please call our customer care line during business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Policy Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-orange-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-lg"
          > 
            <h3 className="text-lg md:text-xl font-semibold text-orange-800 mb-4">
              Policy Updates
            </h3>
            <p className="text-orange-700 text-sm md:text-base leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by email or through a prominent notice on our website. Your continued use of our services after such modifications constitutes acceptance of the updated Privacy Policy.
            </p>
            <p className="text-orange-600 text-xs md:text-sm mt-4 font-medium">
              This Privacy Policy was last updated on August 11, 2025.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;