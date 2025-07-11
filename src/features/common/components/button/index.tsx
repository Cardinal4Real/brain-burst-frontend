import type { ReactNode } from "react";

type ButtonProps = {
  icon?: ReactNode;
  label: string;
  className: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
};

const Button = ({ icon, label, className,onClick,disabled }: ButtonProps) => {
  return (
    <div className="relative inline-block ">
      <button
        className={`flex items-center gap-2 px-6 py-3 text-black font-semibold shadow-lg rounded-l-2xl rounded-r-2xl cursor-pointer  ${className}`}
        style={{
          clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0% 100%)",
        }}
        onClick={onClick}
        disabled={disabled}
      >
          {icon}
        {label}
      </button>
    </div>
  );
};

export default Button;
