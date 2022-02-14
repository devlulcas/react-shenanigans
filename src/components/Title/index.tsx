import "./styles.css";

type titleProps = {
  children: string;
};

export default function Title(props: titleProps) {
  return <h2 className="title">{props.children}</h2>;
}
