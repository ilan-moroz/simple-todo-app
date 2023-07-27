import "./input.css";

export const Input = props => {
  return (
    <div class="form__group">
      <input
        type={props.type}
        className="form__input"
        placeholder={props.placeholder}
        id={props.id}
        required
      />
      <label htmlFor={props.id} class="form__label">
        {props.placeholder}
      </label>
    </div>
  );
};
