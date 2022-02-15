import "./styles.css";
import ok from "../../assets/ok.svg";

export default function Spinner() {
  return (
    <div className="spinner">
      <img src={ok} alt="loading" />
    </div>
  );
}
