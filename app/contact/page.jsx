"use client";
import React, { useState } from "react";
import Link from "next/link";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) => {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let errors = { email: "", message: "" };

        if (!email) {
            errors.email = "Email is required";
            valid = false;
        } else if (!validateEmail(email)) {
            errors.email = "Invalid email address";
            valid = false;
        }

        if (!message) {
            errors.message = "Message is required";
            valid = false;
        }

        setErrors(errors);

        if (valid) {
            setSubmitted(true);
        }
    };

    return (
        <div className='bg-[#1b1b1d] text-white min-h-screen flex flex-col items-center justify-center'>
            <h1 className='text-4xl mb-4'>Contact Us</h1>
            <div className='w-full max-w-md'>
                {submitted ? (
                    <div className='text-center'>
                        <p>
                            Thank you for your message! We will get back to you
                            soon.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        name='contact'
                        method='POST'
                        data-netlify='true'
                        netlify-honeypot='bot-field'
                        className='bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                        <input type='hidden' name='form-name' value='contact' />
                        <p className='hidden'>
                            <label>
                                Don’t fill this out if you're human:{" "}
                                <input name='bot-field' />
                            </label>
                        </p>
                        <div className='mb-4'>
                            <label
                                className='block text-gray-400 text-sm font-bold mb-2'
                                htmlFor='email'>
                                Email
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black ${
                                    errors.email ? "border-red-500" : ""
                                }`}
                                id='email'
                                type='email'
                                name='email'
                                placeholder='Your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <p className='text-red-500 text-xs italic mt-2'>
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <label
                                className='block text-gray-400 text-sm font-bold mb-2'
                                htmlFor='message'>
                                Message
                            </label>
                            <textarea
                                className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black ${
                                    errors.message ? "border-red-500" : ""
                                }`}
                                id='message'
                                name='message'
                                rows='4'
                                placeholder='Your message'
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }></textarea>
                            {errors.message && (
                                <p className='text-red-500 text-xs italic mt-2'>
                                    {errors.message}
                                </p>
                            )}
                        </div>
                        <div className='flex items-center justify-between mt-4'>
                            <button
                                className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                type='submit'>
                                Send
                            </button>
                            <Link href='/' legacyBehavior>
                                <a className='inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800'>
                                    Retour à l'accueil
                                </a>
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;
