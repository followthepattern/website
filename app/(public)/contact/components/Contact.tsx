'use client'

import React from "react";

import { useForm, Resolver } from "react-hook-form";

import { EmailApiFactory } from "@/lib/emailApi";
import { Email } from "@/lib/models/email";
import Info from "@/icons/Info";
import { getGeneratedCode } from "@/lib/getGeneratedCode";
import Spin from "@/icons/Spin";

interface ContactProperties {
  defaultMessage?: any;
  classNames?: string;
}

type FormData = {
  name: string;
  email: string;
  message: string;
};

const SuccessAlert = () => {
  return (
    <div
      className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg"
      role="alert"
    >
      <Info className="flex-shrink-0 inline w-5 h-5 mr-3" />
      <span className="sr-only">Info</span>
      <div>
        Message successfully sent! I will contact you at the provided email address.
      </div>
    </div>
  );
};

const ErrorAlert = () => {
  return (
    <div
      className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
      role="alert"
    >
      <Info className="flex-shrink-0 inline w-5 h-5 mr-3" />
      <span className="sr-only">Error</span>
      <div>
        An error occurred while sending the message. Please try again.
      </div>
    </div>
  );
};

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values.name && values.email ? values : {},
    errors:
      !values.name || !values.email
        ? {
          név: {
            type: "required",
            message: "Kötelező mező",
          },
          email: {
            type: "required",
            message: "Kötelező mező",
          },
        }
        : {},
  };
};

const ContactForm = (props: ContactProperties) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const handleSubmitForm = (data: FormData) => {
    data.message += `\n${getGeneratedCode()}`;
    const emailBody: Email = data;
    const emailApi = EmailApiFactory();

    setSendingMessage(true);

    emailApi
      .apiV1EmailSendGuestMessagePost(emailBody)
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setError(true);
        console.error(errors);
      })
      .finally(() => {
        setSendingMessage(false);
      });
  };

  const onSubmit = handleSubmit(handleSubmitForm);

  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [sendingMessage, setSendingMessage] = React.useState(false);

  const inputClassnames = "block w-full rounded-lg border-0 px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300";
  const labelClassnames = "block text-sm font-semibold leading-6 text-gray-900"

  return (
    <form action="#" method="" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={onSubmit}>
      {success && <SuccessAlert />}
      {error && <ErrorAlert />}
      <div className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="name" className={labelClassnames}>
            Name
          </label>
          <div className="mt-2">
            <input
              {...register("name")}
              type="text"
              className={inputClassnames}
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="email" className={labelClassnames}>
            Email
          </label>
          <div className="mt-2">
            <input
              {...register("email")}
              type="email"
              id="email"
              className={inputClassnames}
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="message" className={labelClassnames}>
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              className={inputClassnames}
              defaultValue={props.defaultMessage}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="flex w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center justify-center font-semibold text-white shadow-sm hover:bg-blue-700"
          disabled={sendingMessage}
        >
          {!sendingMessage && "Send message"}
          {sendingMessage && <Spin className="w-6 h-6 text-gray-200 animate-spin fill-white" />}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
