import { useState } from "react";
import styles from "../styles/Signup.module.scss";
import authService from "../services/authService";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
    setError("");
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password || !form.phone) {
      setError("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await authService.signup({
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone,
      });

      setSuccess("Signup successful! Redirecting to login...");
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      });
      console.log("User created:", response);
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>Sign Up</h2>
          <p>Create your account to get started</p>
        </div>

        {error && (
          <div style={{ color: "#e74c3c", marginBottom: "1rem", fontSize: "0.9rem", padding: "0.7rem", backgroundColor: "#ffe0e0", borderRadius: "6px" }}>
            {error}
          </div>
        )}

        {success && (
          <div style={{ color: "#27ae60", marginBottom: "1rem", fontSize: "0.9rem", padding: "0.7rem", backgroundColor: "#e0ffe0", borderRadius: "6px" }}>
            {success}
          </div>
        )}

        <div className={styles.formGroup}>
          <div className={styles.inputWrapper}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              disabled={loading}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              disabled={loading}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              disabled={loading}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={(e) =>
                handleChange("confirmPassword", e.target.value)
              }
              disabled={loading}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              disabled={loading}
            />
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <button 
            className={styles.signupBtn} 
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </div>

        <div className={styles.footer}>
          <p>Already have an account? <a href="/login">Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;