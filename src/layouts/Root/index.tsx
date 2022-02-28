import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./styles.css";
import "../layout.css";

export default function Root() {
  return (
    <>
      <NavBar />
      <div className="content">
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  );
}
