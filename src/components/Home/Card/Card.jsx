import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";



Aos.init()

const Card = ({ dolls , mytoys , toys , setToys }) => {
  
  const {_id,category,doll_name,picture,seller_name,seller_email,price,rating,available_quantity,description,} = dolls;
  const handleDelete =(id)=>{

   Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://toy-marketplace-server-xi-seven.vercel.app/products/${id}`,{
          method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.deletedCount > 0){
            Swal.fire(
                    'Deleted!',
                    'Your Toy has been deleted.',
                    'success'
                  )
                const remain = toys.filter(toy => toy._id !== id);
                setToys(remain)
          }
          
        })
        
      }
    })
  }

  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl border" data-aos="zoom-in-up">
        <div className="flex justify-center items-center mx-auto w-48 h-52">
          <img className="pt-3" src={picture} alt={doll_name} />
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {doll_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="line-clamp-1">{description}</p>
          <p className="font-semibold text-lg">Price: <span className="text-red-500 font-bold">${price}</span> </p>
          <div className={`card-actions flex ${mytoys ? 'lg:flex-row-reverse md:flex-col-reverse':'flex-row'} items-center  justify-between`}>
          <div>
              {rating &&
                <div className="flex items-center">
                   <span className="text-lg">{rating}/</span>
                   <Rating value={rating} readOnly style={{ maxWidth: 150 }} />
                </div>
              }
              {mytoys &&
              <div className="cursor-pointer flex items-center justify-center gap-3">
                <Link to={`/update/${_id}`}>
                  <div className="badge badge-outline">update</div>
                </Link>
                <div onClick={()=>handleDelete(_id)} className="p-2 bg-red-500 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />

                </svg>

              </div>
              </div>
              
              }
              
            </div>
            <div className="space-x-2">
                <div className="badge badge-outline">Buy Now</div>

             <Link  to={ mytoys ? `/mytoysinfo/${_id}`:`/dollinfo/${_id}`}>
                <div className="badge badge-outline">View Details</div>
              </Link>

            </div>

          </div>
        </div>
      </div>
      <div>
         
      </div>
    </div>
  );
};

export default Card;
