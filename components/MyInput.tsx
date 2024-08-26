import { MyInputType } from "@/types";
import React from "react";

const MyInput = ({ type, onChange, label, text, defaultValue, name }: MyInputType) => {
  if (type === "textarea") {
    return (
      <>
        {label && <label>{text}</label>}
        <textarea
          className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          rows={5}
          placeholder="description"
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </>
    );
  }

  return (
    <>
      {label && <label>{text}</label>}
      <input
        className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name={name}
        type="text"
        placeholder="title"
        onChange={onChange}
        required={true}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default MyInput;
