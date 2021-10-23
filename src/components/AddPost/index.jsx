import { useState } from "react";
import { Input } from "../Input";

export const AddPost = (props) => {
<<<<<<< HEAD
  const [title, setTitle] = useState("Please enter post title");
  const [body, setBody] = useState("Please enter post body");

  const handleSubmit = () => {
    console.log("Calling to backend service");
=======
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
>>>>>>> c53461532b6411ea9bbe32a7c9f2d703ead78a11
    props.addPost({ title, body });
  };

  return (
<<<<<<< HEAD
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Add Post</h1>

      <Input value={title} setValue={setTitle} label="Title" />
      <Input value={body} setValue={setBody} label="Body" />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add Post
=======
    <div className="card p-3 m-2 bg-grey" style={{ height: "95vh" }}>
      <h1>todo-app</h1>

      <Input value={title} setValue={setTitle} label="name" />
      <Input value={body} setValue={setBody} label="age" />

      <button onClick={handleSubmit} className="btn btn-success ">
        Add 
>>>>>>> c53461532b6411ea9bbe32a7c9f2d703ead78a11
      </button>
    </div>
  );
};
