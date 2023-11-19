import Image from "next/image";

interface ButtonProps {
  label: string;
  iconURL: string;
}

const Button = ({ label, iconURL }: ButtonProps) => {
  return (
    <button
      className="flex justify-center items-center 
    gap-2 px-7 py-4 
    border rounded-full
    font-montserrat text-lg leading-none 
    bg-coral-red text-white border-coral-red"
    >
      {label}

      <Image
        src={iconURL}
        alt="arrow right icon"
        width={20}
        height={20}
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
