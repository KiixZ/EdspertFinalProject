import React from 'react';
import Tombol from '../../assets/Vector.png';
import { DataMateri } from './Data';

function Materi() {
 
  return (
    <div className='App'>
      <div className=" w-[825px] h-full bg-white ml-10 mt-12 relative top-[70px] rounded-3xl font-sans bg-gray-100">
        <div className="container px-10 py-7">
          <h1 className="text-sky-950 font-sans text-3xl font-bold mb-4">Materi</h1>
            <div className='conatiner'>
            {DataMateri.map((DataMateri) => (
              <ol>
                <div className="flex">
                  <img src={Tombol} alt="tombol" className="w-5 h-5 mt-4 mr-4" />
                  <p key={DataMateri.id} className="font-sans font-bold text-xl my-3">
                    {DataMateri.materi}
                  </p>
                </div>
                <div className="ml-10 font-sans  text-sm text-grey">
                  <p className='font-semibold'>{DataMateri.deskripsi}</p>
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