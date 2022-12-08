import React from "react";
const variantClasses = {
  h1: "font-semibold sm:text-[28px] md:text-[30px] text-[32px]",
  h2: "font-semibold sm:text-[20px] md:text-[22px] text-[24px]",
  h3: "text-[20px]",
  h4: "text-[16px]",
  h5: "font-semibold text-[14px]",
  h6: "font-normal text-[13px]",
  body1: "font-normal text-[11px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
