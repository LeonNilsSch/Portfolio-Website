import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center p-4 mt-40">
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-lg"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-lg"
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 rounded-lg hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;