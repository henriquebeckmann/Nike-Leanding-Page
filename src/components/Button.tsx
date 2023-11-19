import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth, }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center 
    gap-2 px-7 py-4 
    border rounded-full
    font-montserrat text-lg leading-none 
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } 
    ${fullWidth} && "w-full"
    `}
    >
      {label}

      {iconURL && (
        <Image
          src={iconURL}
          alt="arrow right icon"
          width={20}
          height={20}
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
