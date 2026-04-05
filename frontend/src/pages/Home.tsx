import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Welcome to HouseHelp</h1>
      <p>Your one-stop solution for home services</p>

      <div className={styles.actions}>
        <Button onClick={() => navigate("/login")}>
          Login
        </Button>

        <Button
          variant="secondary"
          onClick={() => navigate("/signup")}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Home;