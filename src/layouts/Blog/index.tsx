import { Outlet } from "react-router-dom";
import Title from "../../components/Title";

export default function BlogLayout() {
  return (
    <>
      <section className="blog">
        <Title>BLOG</Title>
        <Outlet />
      </section>
    </>
  );
}
