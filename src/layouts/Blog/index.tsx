import { Outlet } from "react-router-dom";
import Title from "../../components/Title";
import "../layout.css";

export default function BlogLayout() {
  return (
    <>
      <section className="content">
        <Title>BLOG</Title>
        <Outlet />
      </section>
    </>
  );
}
