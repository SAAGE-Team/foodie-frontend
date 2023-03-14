import "./button.css";

export default function Button(props) {
  return (
    <div className="button">
      <a href={props.href}>{props.value}</a>
    </div>
  );
}
