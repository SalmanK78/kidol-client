import React, { useContext, useEffect, useState } from 'react';
import Header from '../shared/Header';
import Card from '../Home/Card/Card';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../hooks/useTitle';


const AllToys = () => {
  useTitle('My Toys')
  const [toys,setToys] = useState([])
  const {user} = useContext(AuthContext)
  const [filter,setFilter] = useState('')
  console.log(toys)
const url = `https://toy-marketplace-server-xi-seven.vercel.app/products?seller_email=${user.email}`

useEffect(()=>{
  fetch(url)
  .then(res => res.json())
  .then(data => setToys(data))
},[])

  console.log(filter)
  if(filter === 'price'){
    console.log('work')
    toys.sort((a,b)=>{
      if(a.price > b.price){
        return -1
      }else if(a.price < b.price){
        return 1
      }else{
        return 0
      }
    })
  }else if(filter === 'quantity'){
    toys.sort((a,b)=>{
      const a1 = a.available_quantity;
      const b1 = b.available_quantity
      if(a1 > b1){
        return -1
      }else if(a1 < b1){
        return 1
      }else{
        return 0
      }
    })
  }

    return (
        <div>
            <Header>My Toys</Header>
            <div>
            <div className='mt-5 px-10 max-w-7xl mx-auto'>
            <select defaultValue={filter} onChange={e=>setFilter(e.target.value)} id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Sort By</option>
              <option value="price">Sort By Price</option>
              <option value="quantity">Sort By Quantity</option>
            </select>
        </div>
            </div>
            <div className='grid gap-5 max-w-7xl mx-auto px-10 md:grid-cols-2 xl:grid-cols-3'>
            {
              toys.map(doll =><Card
              toys={toys}
              setToys={setToys}
                mytoys={true}
                key={doll._id}
                dolls={doll}
              ></Card>)
            }
          </div>
        </div>
    );
};

export default AllToys;