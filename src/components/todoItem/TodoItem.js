import "./todoItem.css";

export const TodoItem = props => {
  // function to rearrange the date structure
  function rearrangeDate(date) {
    const dateParts = date.split("-"); // ['yyyy', 'mm', 'dd']
    const rearrangedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; // 'dd/mm/yyyy'
    return rearrangedDate;
  }
  return (
    <div className="todo-item">
      {props.todos.map((todo, index) => (
        <div className="card" key={index}>
          <div className="card__side card__side--front">
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--1">
                {rearrangeDate(todo.date)} {todo.time}
              </span>
            </h4>
            <div className="card__details">{todo.task}</div>
          </div>
          <div className="card__side card__side--back card__side--back-1">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">edit</p>
                <p className="card__price-value">delete</p>
              </div>
              {/* <a href="#" class="btn btn--white">
              Book now!
            </a> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
