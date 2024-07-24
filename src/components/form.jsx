import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../config/request";

export const Form = ({ refetch }) => {
  const { handleSubmit, register, formState, reset } = useForm();

  const submit = (data) => {
    request.post("/todos", data).then((res) => {
      alert("Task added successfully!");
      reset();
      refetch();
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title
        </label>
        <input
          {...register("title")}
          type="text"
          id="title"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Send
      </button>
    </form>
  );
};
