import { Input } from "../../components/input/Input";
import { Button } from "../button/Button";
import "./userForm.css";
import React from "react";

const initialState = {
  task: "",
  date: "",
  time: "",
};

export const UserForm = () => {
  const [userInputs, setUserInputs] = React.useState(initialState);

  const handleChange = (key, value) => {
    setUserInputs(prevInputs => ({
      ...prevInputs,
      [key]: value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(userInputs);
  };

  return (
    <div className="form-box">
      <form onSubmit={onSubmit} className="form">
        <Input
          type="text"
          placeholder="Enter task and choose finish date/time: "
          id="task"
          value={userInputs.task}
          onChange={e => handleChange("task", e.target.value)}
        />
        <Input
          type="date"
          placeholder=" "
          id="date"
          value={userInputs.date}
          onChange={e => handleChange("date", e.target.value)}
        />
        <Input
          type="time"
          placeholder=" "
          id="time"
          value={userInputs.time}
          onChange={e => handleChange("time", e.target.value)}
        />
        <div className="form_buttons">
          <Button type="submit" name="submit" />
          <Button type="reset" name="reset" />
        </div>
      </form>
    </div>
  );
};
