import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEndpoint = "https://formspree.io/f/xpzvjnkj"; // Replace 'yourFormId' with your actual Formspree form ID

    fetch(formEndpoint, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      if (response.ok) {
        setSubmissionSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        setSubmissionSuccess(false); // You might want to handle this scenario differently
      }
    })
    .catch(() => {
      setSubmissionSuccess(false); // Handle network errors or other unexpected issues
    });
  };

  return (
    <div id="Contact" className="section">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-10 mb-20">
        <h2 className="text-4xl mb-2 font-medium">Contact</h2>
<div className="flex justify-between items-start">
  {/* Left column */}
          <div className="w-full md:w-2/5 md:pr-10 mb-6 md:mb-0">
            <p className="mt-2 text-md leading-loose font-medium text-darkputty">
              I'd love to hear from you. My inbox is always open and I'm eager
              to connect with fellow professionals, recruiters, and potential
              employers. Reach out at{" "}
              <span className="underline text-">
                <a
                  href="mailto:kcounts0211@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kcounts0211@gmail.com
                </a>
              </span>{" "}
              or drop me a message through the form below, and I'll get back to
              you promptly.
            </p>
          </div>
{/* Right column */}
<div className="w-1/2 h-auto flex justify-center items-center">
        {submissionSuccess ? (
          <div className="text-drap text-center mb-4">
            Success! <br /> I will be in touch shortly!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-drap focus:border-none rounded transition duration-500 border-putty bg-transparent mb-4"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-drap focus:border-none  transition duration-500 border-putty rounded bg-transparent mb-4"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-drap focus:border-none transition duration-500 border-putty rounded bg-transparent mb-4"
            />
            <button
              type="submit"
              className="bg-putty rounded border border-putty text-darkgrey py-2 px-4 hover:bg-darkgrey hover:text-putty hover:border hover:border-drap hover:scale-105 active:scale-90 duration-500"
            >
              Submit
            </button>
          </form>
        )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
