'use client'
import React, { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const ContactSection = () => {
    const [isSending,setIsSending] = useState(false);
  const customerForm = useRef();
  const distributorForm = useRef();

  const sendEmail = (e, formRef) => {
    setIsSending(true)
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jt4uvle", // Replace with your EmailJS service ID
        "template_5a0xkgf", // Replace with your EmailJS template ID
        formRef.current,
        "efPf0u1zDn-baacb3" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Message Sent!", result.text);
          toast("Your message has been sent successfully!");
           setIsSending(false)
        },
        (error) => {
          console.log("An error occurred", error.text);
          toast("An error occurred. Please try again.");
          
           setIsSending(false)
        }
      );

    // Reset form fields after submission
    formRef.current.reset();
  };

  return (
    <div className="w-full" id="contact">
      <section className="body-font" id="products">
        <div className="container px-10 py-24 mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracki text-center sm:text-5xl">
              Let&#39;s Talk
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
              Whether you&#39;re a customer or a distributor, get in touch with
              us to learn more about our products and services.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <Tabs
              defaultValue="Shadcn-ui Installation"
              className="min-w-[90vw] flex flex-col md:justify-center md:items-center p-10"
            >
              <TabsList className="mx-auto flex justify-center w-max bg-gray-200 text-black">
                <TabsTrigger value="Shadcn-ui Installation">
                  Customer Enquiry
                </TabsTrigger>
                <TabsTrigger value="Inators UI Usage">
                  Distributor Enquiry
                </TabsTrigger>
              </TabsList>

              {/* Customer Enquiry Form */}
              <TabsContent
                value="Shadcn-ui Installation"
                className="mt-10 min-w-[80vw]"
              >
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                      Customer Enquiry
                    </h1>
                    <p className="mx-auto mt-4 mb-6 max-w-md text-center text-gray-500">
                      We&#39;d love to hear from you! Let us know how we can
                      help with your needs.
                    </p>
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                      <form
                        ref={customerForm}
                        onSubmit={(e) => sendEmail(e, customerForm)}
                        className="space-y-4"
                      >
                        <input type="hidden" name="client" value="customer" />
                        <div>
                          <label className="sr-only" htmlFor="name">
                            Name
                          </label>
                          <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Name"
                            type="text"
                            name="name"
                            id="name"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label className="sr-only" htmlFor="email">
                              Email
                            </label>
                            <input
                              className="w-full rounded-lg border-gray-200 p-3 text-sm"
                              placeholder="Email address"
                              type="email"
                              name="email"
                              id="email"
                              required
                            />
                          </div>
                          <div>
                            <label className="sr-only" htmlFor="phone">
                              Phone
                            </label>
                            <input
                              className="w-full rounded-lg border-gray-200 p-3 text-sm"
                              placeholder="Phone Number"
                              type="tel"
                              name="phone"
                              id="phone"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="sr-only" htmlFor="message">
                            Message
                          </label>
                          <textarea
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Message"
                            rows="8"
                            name="message"
                            id="message"
                            required
                          ></textarea>
                        </div>
                        <div className="mt-4">
                          <button
                            type="submit"
                            disabled={isSending}
                            className="inline-block w-full rounded-lg bg-rose-500 px-5 py-3 font-medium text-white sm:w-auto"
                          >
                            {isSending ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.2em"
                                height="1.2em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#ffffff"
                                  d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                  opacity={0.25}
                                ></path>
                                <path
                                  fill="#ffffff"
                                  d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                                >
                                  <animateTransform
                                    attributeName="transform"
                                    dur="0.75s"
                                    repeatCount="indefinite"
                                    type="rotate"
                                    values="0 12 12;360 12 12"
                                  ></animateTransform>
                                </path>
                              </svg>
                            ) : (
                              "Send Enquiry"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Distributor Enquiry Form */}
              <TabsContent
                value="Inators UI Usage"
                className="mt-10 min-w-[80vw]"
              >
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                      Distributor Enquiry
                    </h1>
                    <p className="mx-auto mt-4 mb-6 max-w-md text-center text-gray-500">
                      Interested in becoming a distributor? Let us know, and
                      we&#39;ll get back to you with details.
                    </p>
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                      <form
                        ref={distributorForm}
                        onSubmit={(e) => sendEmail(e, distributorForm)}
                        className="space-y-4"
                      >
                        <input
                          type="hidden"
                          name="client"
                          value="distributor"
                        />
                        <div>
                          <label className="sr-only" htmlFor="name">
                            Name
                          </label>
                          <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Name"
                            type="text"
                            name="name"
                            id="name"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label className="sr-only" htmlFor="email">
                              Email
                            </label>
                            <input
                              className="w-full rounded-lg border-gray-200 p-3 text-sm"
                              placeholder="Email address"
                              type="email"
                              name="email"
                              id="email"
                              required
                            />
                          </div>
                          <div>
                            <label className="sr-only" htmlFor="phone">
                              Phone
                            </label>
                            <input
                              className="w-full rounded-lg border-gray-200 p-3 text-sm"
                              placeholder="Phone Number"
                              type="tel"
                              name="phone"
                              id="phone"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="sr-only" htmlFor="address">
                            Address
                          </label>
                          <textarea
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Enter your full address"
                            rows="8"
                            name="address"
                            id="address"
                            required
                          ></textarea>
                        </div>
                        <div>
                          <label className="sr-only" htmlFor="message">
                            Message
                          </label>
                          <textarea
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Message"
                            rows="8"
                            name="message"
                            id="message"
                            required
                          ></textarea>
                        </div>
                        <div className="mt-4">
                          <button
                            type="submit"
                            className="inline-block w-full rounded-lg bg-rose-500 px-5 py-3 font-medium text-white sm:w-auto"
                          >
                            {isSending ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.2em"
                                height="1.2em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#ffffff"
                                  d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                  opacity={0.25}
                                ></path>
                                <path
                                  fill="#ffffff"
                                  d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                                >
                                  <animateTransform
                                    attributeName="transform"
                                    dur="0.75s"
                                    repeatCount="indefinite"
                                    type="rotate"
                                    values="0 12 12;360 12 12"
                                  ></animateTransform>
                                </path>
                              </svg>
                            ) : (
                              "Send Enquiry"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
