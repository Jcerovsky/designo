"use client";

import React from "react";
import Location from "@/app/components/Location";
import { useObjectState } from "@/app/hooks/useObjectState";
import FormInput from "@/app/components/FormInput";
import FormSuccess from "@/app/components/FormSuccess";

interface IFormProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  formSubmitted: boolean;
  formValid: boolean;
}

function Page() {
  const [formData, setFormData] = useObjectState<IFormProps>({
    name: "",
    email: "",
    phone: "",
    message: "",
    formSubmitted: false,
    formValid: false,
  });

  const validateForm = (formData: IFormProps) => {
    const pattern = new RegExp(
      "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$",
    );
    const emailMatch = pattern.test(formData.email);
    if (formData.name && emailMatch && formData.phone && formData.message) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ formSubmitted: true });
    if (validateForm(formData)) setFormData({ formValid: true });
  };

  if (formData.formValid) {
    return <FormSuccess />;
  }

  return (
    <div className="sm:mx-5  text-white ">
      <div
        className="bg-peach py-[3.125rem] px-[2.85rem] text-center  sm:rounded-xl mb-[7rem] sm:text-left desktop:flex
       desktop:gap-4 items-center"
        style={{
          backgroundImage:
            'url("assets/home/desktop/bg-pattern-hero-home.svg")',
          backgroundSize: "cover",
        }}
      >
        <div className="desktop:flex desktop:flex-col desktop:justify-center">
          <h1 className="text-4xl mb-8">Contact us</h1>
          <p className="mx-[2.5rem] mb-10 sm:ml-0 max-w-[27.8125rem]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <form
          className="flex flex-col gap-5 basis-1/2	"
          onSubmit={(e) => handleSubmit(e)}
        >
          <FormInput
            type={"text"}
            setFormData={setFormData}
            value={formData.name}
            name={"name"}
            placeholder={"Name"}
            formSubmitted={formData.formSubmitted}
          />

          <FormInput
            type={"text"}
            setFormData={setFormData}
            value={formData.email}
            name={"email"}
            placeholder={"Email"}
            formSubmitted={formData.formSubmitted}
          />
          <FormInput
            type={"text"}
            setFormData={setFormData}
            value={formData.phone}
            name={"phone"}
            placeholder={"Phone"}
            formSubmitted={formData.formSubmitted}
          />
          <FormInput
            type={"text"}
            setFormData={setFormData}
            value={formData.message}
            name={"message"}
            placeholder={"Your Message"}
            textArea={true}
            formSubmitted={formData.formSubmitted}
          />

          <button className="bg-white rounded-xl px-6 py-4 ml-auto mr-auto text-black sm:mr-0">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-8 mb-[5rem] desktop:flex-row desktop:justify-center desktop:gap-[8rem]">
        <Location imgSource={"canada"} country={"CANADA"} />
        <Location imgSource={"australia"} country={"AUSTRALIA"} />
        <Location imgSource={"united-kingdom"} country={"UNITED KINGDOM"} />
      </div>
    </div>
  );
}

export default Page;
