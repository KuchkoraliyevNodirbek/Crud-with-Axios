import React from "react";
import { request } from "../config/request";
import { useLoading } from "../hooks/useLoading";

export const Card = ({ title, description, id, refetch }) => {
  const { isloading, endload, onload } = useLoading();

  const deleteItem = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onload();
      request
        .delete(`/todos/${id}`)
        .then((res) => {
          alert("Item deleted successfully!");
          refetch();
        })
        .finally(() => {
          endload();
        });
    }
  };

  const editCards = () => {
    const newTitle = prompt("Enter new title", title);
    const newDescription = prompt("Enter new description", description);
    if (newTitle !== null && newDescription !== null) {
      request
        .put(`/todos/${id}`, { title: newTitle, description: newDescription })
        .then((res) => {
          alert("Item updated successfully!");
          refetch();
        });
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 mt-[30px] mb-6 max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300">
      {isloading && <h1 className="text-blue-500 mb-2">Loading...</h1>}
      <h1 className="text-lg font-semibold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={deleteItem}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-200"
        >
          Delete
        </button>
        <button
          onClick={editCards}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
