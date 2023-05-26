import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Card from "./Card/Card";

const Trending = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://toy-marketplace-server-xi-seven.vercel.app/trending?trending=true`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="mt-20">
        <h1 className=" my-2 md:text-3xl text-2xl lg:text-4xl font-bold text-center">Trending Product</h1>
        <p className="mb-10 text-center max-w-xl mx-auto">Aliquid. Dolore exercitationem sequi dicta veritatis aut nesciunt, tempora eligendi, quidem, inventore incidunt sunt numquam.</p>
        <div className='grid gap-5 max-w-7xl mx-auto px-10 md:grid-cols-2 xl:grid-cols-3'>
        {
            toys.map(doll =><Card
                toys={toys}
                  key={doll._id}
                  dolls={doll}
                ></Card>)
        }
        </div>
    </div>
  );
};

export default Trending;
