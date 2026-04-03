import styles from "./Input.module.scss";

type InputProps = {
  type?: "text" | "email" | "password" | "number" | "tel";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  label?: string;
  error?: string;
};

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  disabled = false,
  required = false,
  name = "",
  label = "",
  error = "",
}: InputProps) => {
  return (
    <div className={styles.inputGroup}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        name={name}
        className={`${styles.input} ${error ? styles.error : ""}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;