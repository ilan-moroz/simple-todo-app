import { Input } from "../../components/input/Input";
import { Button } from "../button/Button";
import "./userForm.css";

export const UserForm = () => {
  return (
    <div className="form-box">
      <form action="#" className="form">
        <Input
          type="text"
          placeholder="Enter task and choose finish date/time: "
          id="name"
        />
        <Input type="date" placeholder=" " id="date" />
        <Input type="time" placeholder=" " id="time" />
        <div className="form_buttons">
          <Button type="submit" name="submit" />
          <Button type="reset" name="reset" />
        </div>
      </form>
    </div>
  );
};
