"use client";
import Link from "next/link";
import InputField from "../forms/input-field";
import InputLabel from "../forms/input-label";
import CustomButton from "../utils/CustomButton";
import { FormEvent, useRef, useState, useEffect } from "react";
import { sendMail } from "@/core/utils/mail";
import { ModalWrapper } from "../utils";

const modalDisplayTime = 10_000;
interface FormSubmissionInfo {
  title: string;
  body: string;
  success: boolean;
}

export default function HomeContact() {
  const form = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState<FormSubmissionInfo>();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (sendMail(form.current)) {
      setContent({
        title: "Form Successfully Sent",
        body: "Our Team will reach out to you soon. We can't wait to work with you.",
        success: true,
      });
      form.current?.reset();
    } else {
      setContent({
        title: "Form Submission failed",
        body: "Please try again later. We really look forward to hearing from you",
        success: false,
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (showModal) {
      timeout = setTimeout(() => {
        setShowModal(false);
      }, modalDisplayTime);
    }
    return () => clearTimeout(timeout);
  }, [showModal]);

  return (
    <section className="home-contact container mx-auto padding-x max-[700px]:p-0 bg-white py-14">
      <div className="bg-pixel-black container mx-auto flex-center max-[1016px]:flex-col">
        <div className="home-contact-text flex-1 self-stretch py-16 px-14 max-[1016px]:px-8">
          <h2 className="text-white max-[1016px]:leading-none max-[1016px]:text-[45px]">
            Innovative Software Engineering Solutions To Businesses All Over The
            World.
          </h2>
          <p className="font-medium text-white">
            Revolutionising business through cutting-edge software engineering
            solutions worldwide.
          </p>
        </div>
        <div className="home-contact-form flex-1 py-16 px-14 max-[600px]:px-8">
          <h5 className="text-white">Send inquiry</h5>
          <p className="text-white py-3">
            Contact us now for an obligation free chat! Email us via{" "}
            <span className="underline">
              <a href="mailto:info@turntabl.io">info@turntabl.io</a>
            </span>
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="text-white text-center"
          >
            <div className="form-group">
              <InputLabel scheme="dark" label="Name: " />
              <InputField
                scheme="dark"
                placeholder="Your name"
                name="name"
                required={true}
              />
            </div>
            <div className="form-group">
              <InputLabel scheme="dark" label="Email: " />
              <InputField
                scheme="dark"
                placeholder="user@example.com"
                name="email"
                type="email"
                required={true}
              />
            </div>
            <div className="form-group">
              <InputLabel scheme="dark" label="Message: " />
              <InputField
                scheme="dark"
                placeholder="Message"
                name="message"
                required={true}
              />
            </div>
            <CustomButton
              title="Contact Us"
              buttonType="submit"
              containerStyles="bg-insightful rounded-full text-pixel-black hover:bg-inspiration w-full"
            ></CustomButton>
            <Link
              href={"/contact"}
              className="text-white text-center mt-3 inline-block"
            >
              Get in touch with us &#10230;
            </Link>
            <ModalWrapper isOpen={showModal} closeModal={closeModal}>
              <div className="w-full mt-2 text-center">
                <h1
                  className={`text-3xl ${
                    content?.success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {content?.title}
                </h1>
                <div className="w-full mt-4 border-[0.5px] border-software-grey" />
                <div className="mt-5 " />
                <p>{content?.body}</p>
                <div className="mt-4" />
              </div>
            </ModalWrapper>
          </form>
        </div>
      </div>
    </section>
  );
}
