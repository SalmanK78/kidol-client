import React, { useContext, useEffect, useState } from 'react';
import Header from '../shared/Header';
import Card from '../Home/Card/Card';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
  useTitle('All Toys')
  const {products,setProducts} = useContext(AuthContext);
  const {total} = useLoaderData()
  const [page,setPage] = useState(0);
  console.log(total)

  const itemsPerPage = 20;
  const totalPages = Math.ceil(total / itemsPerPage);

  const pageNumber = [...Array(totalPages).keys()]

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(`https://toy-marketplace-server-xi-seven.vercel.app/products?page=${page}&limit=${itemsPerPage}`);

        const data = await response.json();
        setProducts(data);
    }
    fetchData();
}, [page, itemsPerPage]);

    return (
        <div>
            <Header>All Toys</Header>
            <div className='grid gap-5 max-w-7xl mx-auto px-10 md:grid-cols-2 xl:grid-cols-3'>
            {
              products.map(doll =><Card
                key={doll._id}
                dolls={doll}
              ></Card>)
            }
          </div>
          <div className='text-center mt-5'>
            {
              pageNumber.map(num => <button 
                onClick={()=>setPage(num)}
                className={`px-3 py-1 mx-1 rounded border ${page === num ? 'bg-indigo-600' : ''}`} key={num}>{num +1}</button>)
            }
          </div>
        </div>
    );
};

export default AllToys;