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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length === 0) {
      // Simulate a successful submission (you can replace this with your actual submission logic)
      setSubmissionSuccess(true);
    } else {
      setSubmissionSuccess(false);
    }

    setErrors(newErrors);
  };

  return (
    <div id="Contact" className="section">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-20 mb-20">
        <div className="text-heading-section mb-10">
          <h2 className="text-4xl mb-2 font-medium">Contact</h2>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 pr-0 md:pr-10">
            <p className="mt-2 text-lg leading-loose font-medium text-darkputty">
              I'd love to hear from you. My inbox is always open and I'm eager
              to connect with fellow professionals, recruiters, and potential
              employers. Reach out at{" "}
              <span className="underline">
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
          <div className="w-1/2">
            <div className="p-4 mx-auto rounded-lg">
              {submissionSuccess ? (
                <div className="text-drap text-center mb-4">
                  Form submitted successfully!
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-putty"></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border bg-transparent focus:outline-none focus:ring-2 focus:ring-drap focus:border-none rounded transition duration-500 ${
                        errors.name ? "border-red-500" : "border-putty"
                      } rounded bg-transparent`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block "></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border bg-transparent focus:outline-none focus:ring-2 focus:ring-drap focus:border-none rounded transition duration-500 ${
                        errors.email ? "border-red-500" : "border-putty "
                      } rounded bg-transparent`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block "></label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-3 py-2 border bg-transparent focus:outline-none focus:ring-2 focus:ring-drap focus:border-none rounded transition duration-500 ${
                        errors.message ? "border-red-500" : "border-putty"
                      } rounded bg-transparent`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

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
    </div>
  );
};

export default Contact;
