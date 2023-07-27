import "./button.css";

export const Button = props => {
  return (
    <div>
      <button className="btn--white" type={props.type} onClick={props?.onClick}>
        {props.name}
      </button>
    </div>
  );
};
