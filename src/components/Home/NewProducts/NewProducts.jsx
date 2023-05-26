import React, { useContext, useEffect, useState } from 'react';
import Tabs from './Tabs';
import Card from '../Card/Card';
import { AuthContext } from '../../../Provider/AuthProvider';


const NewProducts = () => {
    const {products} = useContext(AuthContext)

    const bDolls = products.filter(dall => dall.category == 'Baby Dolls');
    const fDolls = products.filter(dall => dall.category == 'Fashion Dolls');
    const iDolls = products.filter(dall => dall.category == 'Interactive Dolls');
  
    const tabs = [
        {
          id: 1,
          label: 'Baby Dolls',
          content:<div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
            {
              bDolls.map(doll =><Card
                key={doll._id}
                dolls={doll}
              ></Card>)
            }
          </div>
        },
        {
          id: 2,
          label: 'Fashion Dolls',
          content: <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {
            fDolls.map(doll =><Card 
              key={doll._id}
              dolls={doll}
            ></Card>)
          }
        </div>,
        },
        {
          id: 3,
          label: 'Interactive Dolls',
          content:<div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {
            iDolls.map(doll =><Card 
              key={doll._id}
              dolls={doll}
            ></Card>)
          }
        </div>,
        },
      ];
    return (
        <div className='mt-20'>
            <h1 className='my-2 md:text-3xl text-2xl lg:text-4xl font-bold text-center'>Shop By Category</h1>
            <p className='md:w-1/2 w-[300px] lg:w-[600px] mt-2 mx-auto text-center'>Lorem ipsum volupfficia facilis Lorem ipsum dolor sit amet. eum incidunt provident at?</p>
            <div>
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
};

export default NewProducts;