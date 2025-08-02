import { useState } from "react";
import { toast } from "sonner";
import { Mail, User, MessageSquare, Send, Sparkles } from "lucide-react";
import "./ContactForm3D.css";

export const ContactForm3D = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Message sent successfully! ✨");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="contact-form-container">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>

      {/* Main Container with 3D Transform */}
      <div className="transform-container">
        <div className="contact-card">
          <div className="card-header">
            <div className="icon-container">
              <Sparkles className="main-icon" />
              <div className="icon-overlay">
                <Sparkles className="main-icon" />
              </div>
            </div>
            <h1 className="card-title">Get In Touch</h1>
            <p className="card-description">
              Send us a message and we'll get back to you soon
            </p>
          </div>

          <div className="form-content">
            <form onSubmit={handleSubmit} className="form">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <User className="label-icon" />
                  Name
                </label>
                <div className="input-container">
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="form-input"
                    placeholder="Your full name"
                    required
                  />
                  <div className="input-overlay"></div>
                </div>
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <Mail className="label-icon" />
                  Email
                </label>
                <div className="input-container">
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                  <div className="input-overlay"></div>
                </div>
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <MessageSquare className="label-icon" />
                  Message
                </label>
                <div className="input-container">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="form-textarea"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                  <div className="input-overlay"></div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                <div className="button-overlay"></div>
                <div className="button-content">
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="button-icon" />
                      Send Message
                    </>
                  )}
                </div>
              </button>
            </form>

            {/* Decorative Element */}
            <div className="form-footer">
              <div className="footer-content">
                <div className="footer-dot footer-dot-1"></div>
                <span>We'll respond within 24 hours</span>
                <div className="footer-dot footer-dot-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional 3D Elements */}
      <div className="decorative-elements decorative-bottom">
        <div className="decorative-square"></div>
      </div>
      <div className="decorative-elements decorative-top">
        <div className="decorative-circle"></div>
      </div>
    </div>
  );
};