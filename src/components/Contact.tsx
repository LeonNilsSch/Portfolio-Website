import React from "react";

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="w-full flex justify-center items-center p-4 mt-20 pt-40"
    >
      <form
        method="POST"
        action="https://getform.io/f/pamznolb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-white">Contact</p>
          <p className="text-gray-400 py-4">
            {/* Submit the form below or shoot me an email */}
          </p>
        </div>
        <input
          className="bg-gray-800 text-gray-200 p-2 rounded-lg"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-gray-800 text-gray-200 rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-gray-800 text-gray-200 p-2 rounded-lg resize-none"
          name="message"
          rows={10}
          maxLength={420} // Set maximum character limit to 420
          placeholder="Message (max 420 characters)"
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 border-gray-600 rounded-lg hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
