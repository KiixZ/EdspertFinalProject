import React from 'react';
import { BiCheckSquare } from "react-icons/bi";
import { DataMateri } from './Data';

function Materi({ onClose }) {
  return (
    <div className='App'>
      <div className=" w-[825px] h-full bg-white ml-10 mt-12 relative top-[70px] rounded-3xl font-sans bg-gray-100">
        <div className="container px-10 py-7">
          <h1 className="text-sky-950 font-sans text-3xl font-bold mb-4">Materi</h1>
          <button onClick={onClose}>Tutup Materi</button>
          <div className='container'>
            {DataMateri.map((item) => (
              <ol key={item.id}>
                <div className="flex">
                  <BiCheckSquare className="w-5 h-5 mt-4 mr-4 bg-tugas-yellow" />
                  <p className="font-sans font-bold text-xl my-3">
                    {item.materi}
                  </p>
                </div>
                <div className="ml-10 font-sans text-sm text-grey">
                  <p className='font-semibold'>{item.deskripsi}</p>
                </div>
              </ol>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Materi;
