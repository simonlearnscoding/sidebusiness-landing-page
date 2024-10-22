"use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { Globe } from "@phosphor-icons/react";
import { Bricolage_Grotesque } from "@next/font/google";

const Bricolage = Bricolage_Grotesque({
  weight: "400",
  subsets: ["latin"],
});

// type FormData = {
//   name: string;
//   email: string;
//   message: string;
// };

const InputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  const inputId = label.toLowerCase().replace(/\s+/g, "-"); // Generate a unique id based on the label

  return (
    <div className="mb-3 w-full px-1">
      <label htmlFor={inputId} className=" hidden">
        {label}
      </label>
      <input
        id={inputId}
        placeholder={placeholder} // Added placeholder here
        className="shadow-none bg-transparent appearance-none border-b font-sans text-xl border-zinc-100 rounded-none w-full pb-4 pt-3 px-1 text-zinc-00 leading-tight focus:outline-none focus:border-b-2 focus:border-zinc-50"
      />
    </div>
  );
};

const InputWithLabel = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <div className="w-full flex mt-6 flex-col">
      <div className={` px-1 text-2xl ${Bricolage.className}  text-zinc-50 `}>
        {label}
      </div>
      <InputField label="Name" placeholder={description} />
    </div>
  );
};
const TextAreaWithLabel = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex mt-6 flex-col">
      <div className={` px-1 text-2xl ${Bricolage.className}  text-zinc-50 `}>
        {label}
      </div>
      <textarea
        rows={3}
        className="shadow-none bg-transparent appearance-none border-b font-sans text-xl border-zinc-200 rounded-none w-full pt-3 pb-4 px-1 text-zinc-100 leading-tight focus:outline-none focus:border-b-2 focus:border-zinc-50"
        placeholder={"Type your message here"}
      />
    </div>
  );
};

const CTA = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-violet-800 text-zinc-50  flex items-center py-4 gap-2 w-full  px-4 justify-center focus:outline-none focus:shadow-outline">
      {children}
    </button>
  );
};

const ContactFormUI = () => {
  return (
    <div className=" flex-1 flex sm:mt-8 mt-20 flex-col items-start w-full sm:w-10/12 h-full">
      <InputWithLabel
        label={"WHAT'S YOUR NAME?"}
        description={"Type your full name"}
      />
      <InputWithLabel label={"EMAIL"} description={"your email here"} />
      <TextAreaWithLabel label={"MESSAGE"} />
      <div className="mt-auto hidden sm:block w-full">
        <CTA>
          <Globe size={32} className="text-zinc-50" />
          <div className="  font-sans font-regular text-xl">WORK WITH US </div>
        </CTA>
      </div>
    </div>
  );
};

// const ContactForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");
//
//   const onSubmit = async (data: FormData) => {
//     setIsSubmitting(true);
//     setResponseMessage("");
//
//     try {
//       const response = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//
//       if (response.ok) {
//         setResponseMessage("Message sent successfully!");
//       } else {
//         setResponseMessage("Error sending message.");
//       }
//     } catch (error) {
//       setResponseMessage("Error sending message.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//
//   return (
//     <div className="flex flex-col justify-center items-center py-10 bg-zinc-900">
//       <h1 className="text-3xl text-white font-bold mb-6">Contact Us</h1>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//       >
//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Name
//           </label>
//           <input
//             id="name"
//             {...register("name", { required: true })}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//               errors.name ? "border-red-500" : ""
//             }`}
//           />
//           {errors.name && (
//             <p className="text-red-500 text-xs italic">Name is required</p>
//           )}
//         </div>
//
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             {...register("email", {
//               required: true,
//               pattern: /^\S+@\S+$/i,
//             })}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//               errors.email ? "border-red-500" : ""
//             }`}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-xs italic">Email is invalid</p>
//           )}
//         </div>
//
//         <div className="mb-6">
//           <label
//             htmlFor="message"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Message
//           </label>
//           <textarea
//             id="message"
//             {...register("message", { required: true })}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//               errors.message ? "border-red-500" : ""
//             }`}
//           />
//           {errors.message && (
//             <p className="text-red-500 text-xs italic">Message is required</p>
//           )}
//         </div>
//
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
//               isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             {isSubmitting ? "Sending..." : "Send Message"}
//           </button>
//         </div>
//       </form>
//       {responseMessage && <p className="text-white mt-4">{responseMessage}</p>}
//     </div>
//   );
// };

export default ContactFormUI;
