import React from "react";

const FormInput = ({
  label,
  id,
  type = "text",
  placeholder,
  registerProps,
  error,
  className = "",
  ...props
}) => {
  const baseClasses = `block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-none
    border border-[1.5] border-border placeholder:text-gray-400 focus:border-primary-light focus:outline-none`;

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm/6 font-medium text-copy">
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...registerProps}
          className={`${baseClasses} ${className}`}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-error">{error.message}</p>}
      </div>
    </div>
  );
};

export default FormInput;
