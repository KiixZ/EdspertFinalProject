import React from "react";
import { useNavigate } from "react-router-dom";

function Ajakan (){
   const navigate = useNavigate();
return(
<>
    <div className="w-screen h-96 relative bg-slate-700">
        <p className="text-white text-5xl text-center relative top-[100px] font-semibold leading-10">
            Sudah siap bergabung?
        </p>
        <div className="w-screen h-96 flex flex-col justify-center items-center bg-slate-700">
            <button className="bg-amber-400 rounded-3xl px-6 py-2.5 mt-1" onClick={() => navigate('/Checkout')}>
                <p className="text-black text-md font-bold leading-tight">Daftar kelas</p>
            </button>
        </div>
    </div>
</>
)
}

export default Ajakan
