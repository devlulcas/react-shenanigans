import { Outlet } from "react-router-dom";
import Title from "../../components/Title";
import "../layout.css";

function AnimeLayout() {
  return (
    <>
      <section className="content">
        <Title> FRASES DE ANIME </Title>
        <Outlet />
      </section>
    </>
  );
}

export default AnimeLayout;
