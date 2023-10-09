import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout () {
const navigate = useNavigate();
return(
<div>
    <div className="w-80 h-64 top-32 left-[32px] relative bg-white rounded-2xl shadow bg-gray-100">
        <div className="h-28 left-[-1px] top-[18px] absolute rounded-2xl flex-col justify-start items-start inline-flex">
            <button
                className="w-72 h-14 px-16 py-2.5 bg-blue-50 border-r-2 border-blue-600 justify-start items-center gap-2.5 inline-flex">
                <div className="text-blue-600 text-lg font-bold leading-7">Materi</div>
            </button>
            <button className="w-80 h-14 px-16 py-2.5 justify-start items-center gap-2.5 inline-flex">
                <div className="text-neutral-900 text-lg font-semibold leading-7">Fasilitas</div>
            </button>
        </div>
        <div className="left-[45px] top-[146px] absolute flex-col justify-start items-start gap-1 inline-flex">
            <div className="flex-col justify-center items-center flex">
                <div className="text-zinc-500 text-base font-medium line-through">Rp. 125.000</div>

            </div>
        </div>
        <div className="left-[168px] top-[143px] absolute text-orange-500 text-xl font-extrabold leading-7">Rp. 99.000
        </div>
        <div
            className="w-64 h-12 px-6 py-2.5 left-[28px] top-[189px] absolute bg-amber-400 rounded-3xl flex-col justify-center items-center gap-2.5 inline-flex">
            <button className="justify-start items-center gap-2 inline-flex" onClick={()=> navigate('/Checkout')}>
                <h2 className="text-black text-sm font-bold leading-tight">Daftar Kelas</h2>
            </button>
        </div>
        <div className="w-72 h-px left-[7px] top-[128px] absolute border border-neutral-200"></div>
    </div>
</div>
)
}

export default Checkout;
