import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactStars from 'react-stars';

const Detail = () => {

  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description:""
  })
  const [loading, setLoading] = useState(false)
  return (
    <div className='p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center'>
      <img className='h-96 block md:sticky top-24' src="https://th.bing.com/th/id/OIP.njF3-Ib42pnaq0-81Z_iwQHaFj?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>

      <div className='md:ml-4 ml-0 w-full md:w-1/2'>
        <h1 className='text-3xl font-bold text-gray-400'>
          <span className='text-xl'> (2008) </span>
        </h1>
        <ReactStars size={20} half={true} value={4.5} edit={false} />

        <p className='mt-2'>
          Dhol is a 2007 Indian Hindi-language comedy thriller film directed by
          Priyadarshan and produced under the Percept Picture Company. A remake
          of the 1990 Malayalam film In Harihar Nagar written by Siddi… Dhol is
          a 2007 Indian Hindi-language comedy thriller film directed by
          Priyadarshan and produced under the Percept Picture Company. A remake
          of the 1990 Malayalam film In Harihar Nagar written by Siddi…
        </p>
      </div>
    </div>
  );
}

export default Detail
