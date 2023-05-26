import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header";

const MyToysInfo = () => {
  const data = useLoaderData();
  const {
    _id,
    category,
    doll_name,
    picture,
    seller_name,
    seller_email,
    price,
    rating,
    available_quantity,
    description,
    seller_image
  } = data;
  return (
    <div>
        <Header>Doll Details</Header>
    <div className="my-[10vh]">
       <div className="relative border rounded-lg shadow-2xl max-w-3xl mx-auto w-full">
            <div className="shadow p-4 rounded-lg bg-white">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                  <div className=" flex justify-center items-center mx-auto w-48 h-52">
                    <img src={picture} alt="" />
                  </div>
                </div>
                <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                  Featured
                </span>
              </div>

              <div className="mt-4">
                <h2
                  className="font-bold  md:text-2xl text-gray-800 line-clamp-1"
                  title="New York"
                >
                  {doll_name}
                </h2>
                <p
                  className="mt-2 text-sm text-gray-800 line-clamp-2"
                  title="New York, NY 10004, United States"
                >{description}
                </p>
              </div>

              <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
                <div className="inline-flex flex-col   text-gray-800">
                  <h1 className="text-2xl font-bold">Items Information</h1>
                  <hr />
                  <span className="mt-2 ">
                    <h1 className="font-bold">Rating</h1>
                    <div className="flex items-center">
                    <span className="text-xl">{rating}/</span><Rating value={rating} readOnly style={{ maxWidth: 150 }} />
                    </div>
                  </span>
                </div>
                <div className="inline-flex flex-col   text-gray-800">
                <h1 className="text-2xl font-bold">Seller Information</h1>
                <hr />
                <span className="mt-2 flex items-center font-bold flex-row-reverse justify-end">
                <span>Seller Name</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                </span>
                  <span className=" font-semibold">{seller_name}</span>
                </div>
                <div className="inline-flex flex-col text-gray-800">
                    <span className="flex items-center font-bold flex-row-reverse justify-end">
                        <span>Items Available</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </span>
F
                  <span className="mt-2  font-bold">{available_quantity}</span>
                </div>
                <div className="inline-flex flex-col   text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>

                  <span className="mt-2  font-semibold">{seller_email}</span>
                </div>
              </div>
               <hr className="mb-2"/>
              <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200">
                        <img className="rounded-full" src={seller_image} alt="" />
                    </div>
                    <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                  </div>
                    
                  <div className="ml-2 text-gray-800 line-clamp-1">{seller_name}</div>
                </div>

                <div className="flex justify-end">
                  <div className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-lg">Price: $</span>
                    <span className="text-lg">{price}</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default MyToysInfo;
