import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MdContactMail } from "react-icons/md";
// Replace with your SVG path

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the form data
    emailjs
      .send(
        "service_4s6xaqf",
        "template_91xl5vi",
        formData,
        "1CSQPp9bWyP3forwb"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send the message, please try again.");
        }
      );

    // Reset the form
    setFormData({
      from_name: "",
      email: "",
      message: "",
    });
  };

  //   console.log(ContactSvg);

  return (
    <div className="flex justify-center items-center  mt-16">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden md:flex">
        <div className="hidden md:flex md:w-1/2 p-8 items-center justify-center">
          <MdContactMail className="text-[250px]" />
        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold px-7 py-3 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
