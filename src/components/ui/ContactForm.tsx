"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    window.location.href = `mailto:muhammadrazan04@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-transparent transition";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        required
        placeholder="Your name"
        name="name"
        value={form.name}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="email"
        required
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className={inputClass}
      />
      <textarea
        required
        placeholder="Your message"
        name="message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        className={inputClass + " resize-none"}
      />
      <button
        type="submit"
        className="mt-1 px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
