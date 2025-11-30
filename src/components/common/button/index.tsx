import clsx from "clsx";

export type ButtonSize = keyof typeof buttonSize;

export interface ButtonType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "disabled";
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const buttonSize = {
  xs: "h-9.5 px-4 rounded-md",
  sm: "h-12 px-4 rounded-md",
  md: "h-12 px-8 rounded-md",
  lg: "h-10.5 px-14 md:h-12 md:px-11.5 rounded-lg",
  xl: "h-14 px-5 rounded-md md:px-10",
};

const buttonVariant = {
  solid: "bg-nomad-black text-white",
  outline: "bg-white border-1 border-nomad-black text-nomad-black",
  disabled: "bg-gray600 text-white",
};

export default function Button({
  children,
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
  variant = "solid",
  ...props
}: ButtonType) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center whitespace-nowrap",
        buttonSize[size],
        disabled ? buttonVariant.disabled : buttonVariant[variant],
        fullWidth ? "w-full" : "",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
