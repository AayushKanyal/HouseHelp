import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button = ({
  children,
  variant = "primary",
  disabled = false,
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${
        disabled ? styles.disabled : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;