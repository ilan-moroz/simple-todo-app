import "./input.css";

export const Input = props => {
  return (
    <div className="form__group">
      <input
        type={props.type}
        className="form__input"
        placeholder={props.placeholder}
        id={props.id}
        onChange={props.onChange}
        required
      />
      <label htmlFor={props.id} className="form__label">
        {props.placeholder}
      </label>
    </div>
  );
};
