import React, { useState } from "react";

// Components
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeleteBook = () => {

  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then(() => {
      setLoading(false);
      //alert("Book deleted successfully");
      navigate('/');
    }).catch((error) => {
      alert(error.message);
      console.error(error);
    })
  };


  return (
    <div>
      <BackButton />
      {loading && <Spinner />}
      <h1 className='text-3xl my-4'>Delete Book</h1>
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You want to delete this book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
