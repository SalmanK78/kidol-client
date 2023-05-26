import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header";
import Swal from "sweetalert2";

const Update = () => {
  const loadedData = useLoaderData();

  const handleUpdate =event=>{
    event.preventDefault()

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedUser = {price,quantity,description}

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-xi-seven.vercel.app/products/${loadedData._id}`,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(updatedUser)
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.modifiedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your data has been updated',
              'success'
            )
          }
      })

      }
    })

    
  }
  return (
    <div>
      <Header>Update</Header>
      <div>
        <form onSubmit={handleUpdate} className="max-w-5xl mx-auto">
          <div className="mb-6">
            <input
              type="number"
              id=""
              placeholder="Price"
              defaultValue={loadedData.price}
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
          <input
              type="number"
              id=""
              placeholder="Available Quantity"
              defaultValue={loadedData.available_quantity}
              name="quantity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
          <input
              type="text"
              id=""
              placeholder="Description"
              defaultValue={loadedData.description}
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
