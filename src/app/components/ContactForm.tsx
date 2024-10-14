"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
      } else {
        setResponseMessage("Error sending message.");
      }
    } catch (error) {
      setResponseMessage("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-10 bg-zinc-900">
      <h1 className="text-3xl text-white font-bold mb-6">Contact Us</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: true })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">Name is required</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">Email is invalid</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs italic">Message is required</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      {responseMessage && <p className="text-white mt-4">{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;
