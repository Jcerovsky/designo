import React from "react";

function FormSuccess() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-zinc-900 overflow-hidden absolute z-50">
      <div className="rounded-xl bg-white text-center p-6n max-w-[25rem] p-6">
        <h1 className="mb-4 text-2xl">Thank you!</h1>
        <p>Your form submission has been received.</p>
        <p className="mb-4">We will get back to you shortly.</p>
        <a
          href="/"
          className="cursor-pointer hover:scale-95 hover:underline font-bold"
        >
          ← Back to our site
        </a>
      </div>
    </div>
  );
}

export default FormSuccess;
