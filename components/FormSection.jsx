const FormSection = ({ title, description, children, showBorder = true }) => {
  return (
    <div className={showBorder ? "border-b border-border pb-12" : ""}>
      <h2 className="text-base/7 font-semibold text-copy">{title}</h2>
      <p className="mt-1 text-sm/6 text-copy-light">{description}</p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
