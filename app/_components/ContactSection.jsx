"use client";
import React, { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);
  const customerForm = useRef();
  const distributorForm = useRef();

  const sendEmail = (e, formRef) => {
    setIsSending(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jt4uvle",
        "template_5a0xkgf",
        formRef.current,
        "efPf0u1zDn-baacb3",
      )
      .then(
        () => {
          toast("Your message has been sent successfully!");
          setIsSending(false);
        },
        () => {
          toast("An error occurred. Please try again.");
          setIsSending(false);
        },
      );
    formRef.current.reset();
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "transparent",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "1px solid #E0D8CC",
    padding: "0.75rem 0",
    color: "#1A1510",
    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.625rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#786E63",
    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
    marginBottom: "0.25rem",
  };

  const FormFields = ({ formRef, onSubmit, type }) => (
    <form
      ref={formRef}
      onSubmit={(e) => onSubmit(e, formRef)}
      style={{ marginTop: "2.5rem" }}
    >
      <input type="hidden" name="client" value={type} />
      <div
        style={{ gap: "2rem", marginBottom: "2rem" }}
        className="grid grid-cols-1 sm:grid-cols-2"
      >
        <div>
          <label style={labelStyle}>Name</label>
          <input
            style={inputStyle}
            placeholder="Your full name"
            type="text"
            name="name"
            required
            onFocus={(e) => (e.target.style.borderBottomColor = "#C41230")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#E0D8CC")}
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            style={inputStyle}
            placeholder="your@email.com"
            type="email"
            name="email"
            required
            onFocus={(e) => (e.target.style.borderBottomColor = "#C41230")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#E0D8CC")}
          />
        </div>
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <label style={labelStyle}>Phone</label>
        <input
          style={inputStyle}
          placeholder="+91 00000 00000"
          type="tel"
          name="phone"
          onFocus={(e) => (e.target.style.borderBottomColor = "#C41230")}
          onBlur={(e) => (e.target.style.borderBottomColor = "#E0D8CC")}
        />
      </div>
      {type === "distributor" && (
        <div style={{ marginBottom: "2rem" }}>
          <label style={labelStyle}>Company</label>
          <input
            style={inputStyle}
            placeholder="Your company name"
            type="text"
            name="company"
            onFocus={(e) => (e.target.style.borderBottomColor = "#C41230")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#E0D8CC")}
          />
        </div>
      )}
      <div style={{ marginBottom: "2.5rem" }}>
        <label style={labelStyle}>Message</label>
        <textarea
          style={{ ...inputStyle, resize: "none" }}
          placeholder={
            type === "customer"
              ? "How can we help you?"
              : "Tell us about your distribution requirements..."
          }
          name="message"
          rows={4}
          required
          onFocus={(e) => (e.target.style.borderBottomColor = "#C41230")}
          onBlur={(e) => (e.target.style.borderBottomColor = "#E0D8CC")}
        />
      </div>
      <button
        type="submit"
        disabled={isSending}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          backgroundColor: isSending ? "#786E63" : "#C41230",
          color: "#ffffff",
          padding: "0.875rem 1.75rem",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          fontWeight: 500,
          border: "none",
          cursor: isSending ? "not-allowed" : "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          !isSending && (e.currentTarget.style.backgroundColor = "#A00E27")
        }
        onMouseLeave={(e) =>
          !isSending && (e.currentTarget.style.backgroundColor = "#C41230")
        }
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#FAF7F2", borderTop: "1px solid #E0D8CC" }}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          style={{ gap: "4rem" }}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C41230",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              Get in Touch
            </span>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 300,
                color: "#1A1510",
                lineHeight: 1.1,
                marginTop: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              {"Let's talk"} <br />
              {"about "}
              <em style={{ fontStyle: "italic", color: "#C41230" }}>MOYO</em>
            </h2>
            <p
              style={{
                color: "#786E63",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                lineHeight: 1.75,
                maxWidth: "360px",
                marginBottom: "2.5rem",
                fontSize: "0.95rem",
              }}
            >
              Whether you&#39;re a customer with a question or a distributor
              looking to partner &mdash; we&#39;d love to hear from you.
            </p>

            <div>
              {[
                { label: "Customer Support", value: "care@moyobrands.com" },
                {
                  label: "Business Enquiries",
                  value: "business@moyobrands.com",
                },
                { label: "Location", value: "Mumbai, India" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                    borderBottom: "1px solid #E0D8CC",
                    paddingBottom: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#786E63",
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      width: "140px",
                      flexShrink: 0,
                      paddingTop: "2px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      color: "#1A1510",
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Tabs defaultValue="customer">
              <TabsList
                style={{
                  backgroundColor: "transparent",
                  borderBottom: "1px solid #E0D8CC",
                  width: "100%",
                  borderRadius: 0,
                  padding: 0,
                  height: "auto",
                  gap: 0,
                  justifyContent: "flex-start",
                }}
              >
                {["customer", "distributor"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    style={{
                      borderRadius: 0,
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      fontSize: "0.65rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      paddingLeft: 0,
                      paddingBottom: "0.75rem",
                      marginRight: "2rem",
                    }}
                    className="data-[state=active]:text-[#C41230] data-[state=active]:border-b-2 data-[state=active]:border-[#C41230] text-[#786E63]"
                  >
                    {tab === "customer" ? "Customer" : "Distributor"}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="customer">
                <FormFields
                  formRef={customerForm}
                  onSubmit={sendEmail}
                  type="customer"
                />
              </TabsContent>
              <TabsContent value="distributor">
                <FormFields
                  formRef={distributorForm}
                  onSubmit={sendEmail}
                  type="distributor"
                />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
