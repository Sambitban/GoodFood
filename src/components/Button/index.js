import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder13: "rounded-radius13025",
  RoundedBorder10: "rounded-radius10",
};
const variants = { FillLightgreen800: "bg-light_green_800 text-white_A700" };
const sizes = {
  sm: "p-[4px]",
  md: "md:p-[17px] p-[22px] sm:px-[15px] sm:py-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CircleBorder13", "RoundedBorder10"]),
  variant: PropTypes.oneOf(["FillLightgreen800"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder13",
  variant: "FillLightgreen800",
  size: "sm",
};

export { Button };
