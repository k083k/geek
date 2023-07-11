"use client";
import InputField from "@/components/forms/input-field";
import InputLabel from "@/components/forms/input-label";
import TextArea from "@/components/forms/text-area";
import CustomButton from "@/components/utils/CustomButton";
import { FormEvent, useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/public/assets/json/coffee-machine.json";
import { sendMail } from "@/core/utils/mail";
import ModalWrapper from "@/components/utils/ModalWrapper";

const modalDisplayTime = 10_000;
interface FormSubmissionInfo {
  title: string;
  body: string;
  success: boolean;
}

export default function FormSection() {
  const form = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState<FormSubmissionInfo>();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (sendMail(form.current)) {
      setContent({
        title: "Form Successfully Sent",
        body: "Our Team will reach out to you soon. Something amazing is brewing",
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

  const styles = {
    ttContactFormRowItem:
      "flex flex-col flex-grow flex-shrink basis-[350px] self-stretch m-1 p-1 xl:p-3 xl:m-2",
    ttContactPageRowItem:
      "flex flex-col flex-grow flex-shrink self-stretch m-3 p-1",
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className={`rounded-3xl`}>
        <div className="flex flex-col items-center justify-between p-3">
          <div className="flex flex-row flex-wrap items-center justify-center">
            <div className={styles.ttContactFormRowItem}>
              <InputLabel label="Name: " />
              <InputField
                placeholder="Enter your Name"
                name="name"
                required={true}
              />
            </div>
            <div className={styles.ttContactFormRowItem}>
              <InputLabel label="Email: " />
              <InputField
                placeholder="Enter your Email"
                type="email"
                name="email"
                required={true}
              />
            </div>

            <div className={styles.ttContactFormRowItem}>
              <InputLabel label="Company: " />
              <InputField
                placeholder="Enter your Company Name"
                name="company"
              />
            </div>
            <div className={styles.ttContactFormRowItem}>
              <InputLabel label="Role Within Company: " />
              <InputField placeholder="Enter your role" name="role" />
            </div>
            <div
              className={`${styles.ttContactFormRowItem} ${"basis-[500px]"}`}
            >
              <InputLabel label="Tell us More: " />
              <TextArea
                placeholder="Tell us a little about you, your organisation or your project"
                name="message"
                required={true}
              />
            </div>
          </div>
          <CustomButton
            title="Let's Chat"
            buttonType="submit"
            containerStyles="bg-insightful rounded-md hover:bg-inspiration"
          />
        </div>
      </div>
      <ModalWrapper isOpen={showModal} closeModal={closeModal}>
        <div className="w-full mt-2 text-center">
          <h1
            className={`text-3xl ${content?.success ? "text-green-400" : "text-red-400"
              }`}
          >
            {content?.title}
          </h1>
          <div className="w-full mt-4 border-[0.5px] border-software-grey" />
          <div className="mt-5 " />
          <p>{content?.body}</p>
          <div className="flex justify-center w-full">
            {content?.success === true && (
              <Lottie animationData={animationData} className="w-1/2" />
            )}
          </div>
          <div className="mt-4" />
        </div>
      </ModalWrapper>
    </form>
  );
}
