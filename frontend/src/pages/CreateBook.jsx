import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//Components
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        alert("An error occurred. Please Check Your Inputs and Console");
        console.error(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="flex items-center justify-center">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl mt-8 w-[600px] p-4 mx-auto">
        <div className="flex items-center gap-x-2 m-2">
          <label className="text-xl mr-4 text-gray-400">Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-xl"
          ></input>
        </div>
        <div className="flex items-center gap-x-2 m-2">
          <label className="text-xl mr-4 text-gray-400">Author: </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-xl"
          ></input>
        </div>
        <div className="flex items-center gap-x-2  m-2">
          <label className="text-xl mr-4 text-gray-400">Publish Year: </label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-xl"
          ></input>
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  );
};

export default CreateBook;
