import React from "react";

import "./Button3D.scss";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button3D: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`button-3d ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};