import React from "react";

interface ButtonProps {
  title: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  extraClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  extraClassName,
  onClick,
  title,
  type,
}) => {
  return (
    <button
      className={`text-customWhite rounded-[2rem] bg-primary px-8 py-2 ${extraClassName}`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
