import { useState } from "react";
import { Input } from "../Input";

export const AddPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    props.addPost({ title, body });
  };

  return (
    <div className="card p-3 m-2 bg-grey" style={{ height: "95vh" }}>
      <h1>todo-app</h1>

      <Input value={title} setValue={setTitle} label="name" />
      <Input value={body} setValue={setBody} label="age" />

      <button onClick={handleSubmit} className="btn btn-success ">
        Add 
      </button>
    </div>
  );
};
