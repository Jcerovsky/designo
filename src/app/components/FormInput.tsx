import React from "react";

interface IFormInputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  textArea?: boolean;
  formSubmitted: boolean;
  setFormData: (newState: Partial<IFormInputProps>) => void;
}

function FormInput({
  type,
  name,
  value,
  setFormData,
  textArea,
  placeholder,
  formSubmitted,
}: IFormInputProps) {
  const isEmpty = (value: string) => value.trim() === "";

  return (
    <div className="flex flex-col ">
      <div className="flex items-center border-b border-white ">
        {textArea ? (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setFormData({ [name]: e.target.value })}
            className="resize-none bg-transparent  px-4 pb-2 focus:outline-black placeholder-gray-300 w-full"
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setFormData({ [name]: e.target.value })}
            className="bg-transparent  px-4 pb-2 focus:outline-black placeholder-gray-300 w-full"
          />
        )}

        <img
          src="/assets/contact/desktop/icon-error.svg"
          alt="error-img"
          className={`ml-auto pb-2`}
        />
      </div>
      {formSubmitted && isEmpty(value) && (
        <p className={`ml-4 italic text-left`}>{"Can't be empty"}</p>
      )}
    </div>
  );
}

export default FormInput;
