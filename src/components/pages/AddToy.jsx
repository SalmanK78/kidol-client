
import { useContext } from "react";
import Header from "../shared/Header";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  useTitle('AddToy')
  const {user} = useContext(AuthContext)

  const handleAddToy = event => {
    
    
    event.preventDefault();

    const form = event.target;


    const category = form.category.value;
    const doll_name = form.doll_name.value;
    const picture = form.picture.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const price = form.price.value;
    const available_quantity = form.available_quantity.value;
    const description = form.description.value;
    const seller_image = form.seller_image.value;
    const addInfo =  {category,doll_name,picture,seller_name,seller_email,seller_image,price,available_quantity,description,}

    fetch('https://toy-marketplace-server-xi-seven.vercel.app/products',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(addInfo)
    })
    .then(response => response.json())
    .then(data => console.log(data))

  };
  return (
    <div>
      <Header>Add Toy</Header>
      <div className="max-w-7xl mx-auto md:px-20 p-5">
        <form onSubmit = {handleAddToy}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="doll_name"
                placeholder="Doll Name"
                 required
              />
            </div>
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="category"
                placeholder="Category"
                 required
              />
            </div>
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="seller_name"
                placeholder="Your Name"
                 required
              />
            </div>
            <div>
              <input
                type="email"
                value={user?.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="seller_email"
                placeholder="Your Email"
                required
                disabled
              />
            </div>
            <div>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="price"
                placeholder="Product Price"
                 required
              />
            </div>
            <div>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="available_quantity"
                placeholder="Quantity"
                 required
              />
            </div>
          </div>
          <div className="mb-6">
            <input
              type="url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="picture"
              placeholder="Doll Image Url"
               required
            />
          </div>
          <div className="mb-6">
            <input
              type="url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="seller_image"
              placeholder="Your Image Url"
               required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="description"
              placeholder="Description"
               required
            />
          </div>
          <input
            type="submit"
            value="Add Product"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          </input>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
