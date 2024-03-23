import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset error for the current field
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset errors and submission success state
    setErrors({});
    setSubmissionSuccess(false);

    let newErrors = {};
    // Validation checks
    if (!formData.name) newErrors.name = "Please fill out the name field.";
    if (!formData.email) {
      newErrors.email = "Please fill out the email field.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message)
      newErrors.message = "Please fill out the message field.";

    // If there are any errors, set them and halt the form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Proceed with form submission to Formspree
    const formEndpoint = "https://formspree.io/f/xpzvjnkj"; // Ensure this is your actual Formspree endpoint
    fetch(formEndpoint, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmissionSuccess(true);
          // Clear the form fields after successful submission
          setFormData({ name: "", email: "", message: "" });
        } else {
          setSubmissionSuccess(false); // Handle unsuccessful submission
        }
      })
      .catch(() => {
        setSubmissionSuccess(false); // Handle server errors or no response
      });
  };

  return (
    <div id="Contact" className="section">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-10 mb-20">
        <h2 className="text-4xl mb-2 font-medium">Contact</h2>
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <p className="mt-2 text-md leading-loose font-medium text-darkputty">
              I'd love to hear from you. My inbox is always open and I'm eager
              to connect with fellow professionals, recruiters, and potential
              employers. Reach out at
              <span className="underline text-blue-600">
                <a
                  href="mailto:kcounts0211@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kcounts0211@gmail.com
                </a>
              </span>
              or drop me a message through the form below, and I'll get back to
              you promptly.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            {submissionSuccess ? (
              <div className="text-drap text-center mb-4">
                Success! <br /> I will be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded bg-transparent transition duration-300 focus:outline-none ${
                      errors.name
                        ? "border-red-500 bg-red-50"
                        : "border-putty focus:ring-drap focus:border-drap"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded bg-transparent transition duration-300 focus:outline-none ${
                      errors.email
                        ? "border-red-500 bg-red-50"
                        : "border-putty focus:ring-drap focus:border-drap"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-3 py-2 border rounded bg-transparent transition duration-300 focus:outline-none ${
                      errors.message
                        ? "border-red-500 bg-red-50"
                        : "border-putty focus:ring-drap focus:border-drap"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="primary-btn mx-0 px-5"
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
