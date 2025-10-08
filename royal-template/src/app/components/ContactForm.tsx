"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const [values, setValues] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(nextValues: FormState): FormErrors {
    const nextErrors: FormErrors = {};
    if (!nextValues.name.trim()) nextErrors.name = "Please enter your name.";
    if (!nextValues.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (nextValues.message.trim().length < 10) nextErrors.message = "Message must be at least 10 characters.";
    return nextErrors;
  }

  function handleChange<K extends keyof FormState>(key: K) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValues = { ...values, [key]: e.target.value } as FormState;
      setValues(nextValues);
      if (Object.keys(errors).length) setErrors(validate(nextValues));
    };
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div role="status" className="mt-6 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900">
        Thank you! We will get back to you shortly.
      </div>
    );
  }

  return (
    <form noValidate className="mt-8 grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Name</label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={Boolean(errors.name) || undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange("email")}
          aria-invalid={Boolean(errors.email) || undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message) || undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>
      <button type="submit" className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-800 text-sm w-fit">Send</button>
    </form>
  );
}

