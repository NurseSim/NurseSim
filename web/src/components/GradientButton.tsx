import React from "react";
import "../styles/homePage.css";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const GradientButton: React.FC<GradientButtonProps> = ({ children, ...rest }) => {
  return (
    <button className="gradient-button" {...rest}>
      {children}
    </button>
  );
};