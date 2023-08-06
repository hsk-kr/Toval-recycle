import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../../components/Button';

import { IoLocationSharp } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import { ImPhone } from 'react-icons/im';
import ParagraphHeader from '../../components/ParagraphHeader';
import { useFormik } from 'formik';

const SERVICE_ID = '';
const contactInfo = [
  {
    icon: <IoLocationSharp className="text-2xl text-main" />,
    title: '674 rehovot',
  },
  { icon: <ImPhone className="text-2xl text-main" />, title: '054-565-6666' },
  {
    icon: <IoMdMail className="text-2xl text-main" />,
    title: 'gmail@gmail.com',
  },
];

function ContactUs() {
  const form: any = useRef();

  const submitFunction = async () => {
    try {
      emailjs.sendForm(
        SERVICE_ID,
        'template_b777vi7',
        form.current,
        'dRii3LyW1kBLp__Ny'
      );
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    resetForm,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },

    onSubmit: () => {
      submitFunction();
    },
  });
  return (
    <div>
      <div className="mb-10">
        <ParagraphHeader>Want to talk to us?</ParagraphHeader>
      </div>
      <div className="flex justify-between shadow-md p-10 rounded-2xl">
        <div className="w-1/2">
          <div className="flex flex-col gap-4 mb-10">
            <h1 className="text-main font-semibold text-4xl">Get In Touch</h1>
            <p>We are here for you! How can we help?</p>
          </div>
          <form
            className="flex flex-col space-y-5"
            onSubmit={handleSubmit}
            ref={form}
          >
            <input
              className="contactInput "
              type="text"
              placeholder="Enter your name"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              required
            />
            <input
              className="contactInput"
              type="email"
              name="email"
              placeholder="Enter your email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              required
            />
            <input
              className="contactInput"
              type="text"
              name="phone"
              placeholder="Phone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              required
            />
            <textarea
              className="contactInput h-44"
              placeholder="Go ahead, we are listening..."
              name="message"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.message}
              required
            />
            <div className="flex w-full justify-end">
              <Button
                className="w-full flex justify-center rounded-md bg-main"
                type="submit"
                disabled={isSubmitting}
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-10">
          <img src="/contact-us-image.svg" />
          <div className="flex flex-col gap-4">
            {contactInfo.map(({ icon, title }) => (
              <div className="flex gap-5 items-center">
                <div className="border-[1px] rounded-full p-3 text-2xl text-main">
                  {icon}
                </div>
                <h1>{title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
