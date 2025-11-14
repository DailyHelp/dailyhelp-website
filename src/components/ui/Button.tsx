import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    solid: " text-white hover:bg-gray-800 focus:ring-gray-700",
    outline:
      "border border-gray-300 text-gray-800  hover:bg-gray-100 focus:outline-none focus:ring-0",
  };

  const sizeStyles = {
    sm: "px-2 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
