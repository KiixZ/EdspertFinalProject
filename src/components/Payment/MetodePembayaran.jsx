import React from 'react';
import { BiCopy } from "react-icons/bi";
import Gambar from '../../assets/cardh.png';
import BankMandiri from '../../assets/mandiri.png'
import BankBCA from '../../assets/bcamobile.png'
function MetodePembayaran() {

return (
<div>
    <div className="flex pt-12 pl-12 pb-7 bg-gray-100">
        <div className="w-[129px] h-[115px] bg-sky-950 rounded-lg mr-5">
            <div className="flex justify-center">
                <img src={Gambar} alt="gambar" />
            </div>
        </div>
        <div className="w-80 h-24 relative">
            <div className="w-80 left-0 top-0 absolute"><span
                    className="text-black text-xl font-extrabold leading-normal">Programming React JS<br /></span><span
                    className="text-black text-base font-extrabold leading-normal">Getting Started with React JS</span>
            </div>
            <div className="left-[49px] top-[59px] absolute text-black text-xs font-semibold leading-tight">September
                2023 </div>
            <div className="left-[49px] top-[79px] absolute text-black text-xs font-semibold leading-tight">Ardi W Saputra, Ade Armyatna</div>
            <div className="left-0 top-[59px] absolute text-black text-opacity-50 text-xs font-semibold leading-tight">
                Batch</div>
            <div className="left-0 top-[79px] absolute text-black text-opacity-50 text-xs font-semibold leading-tight">
                Mentor</div>
        </div>
    </div>
    <div className="pl-12 bg-gray-100">
        <h1 className="text-neutral-900 text-xl font-bold leading-7">Metode Pembayaran</h1>
        <p className="w-96 text-zinc-500 text-base font-normal leading-normal">Bank Transfer (Verifikasi Manual) - Mandiri
        </p>

        <div className="flex">
            <img src={BankMandiri} alt="Mandiri" className="w-[72px] h-[22px] self-center" />
            <div className="ml-8">
                <p className="font-semibold text-base">No Rek. 137000299089</p>
                <img src="" alt="" />
                <div>
                    <p className="font-semibold text-base text-subdued">a.n PT Widya Kreasi Bangsa</p>
                </div>

            </div>
            <button className="flex self-start">
                <BiCopy className=" w-5 h-5" />
                <p className="font-bold text-xs text-biru">Salin</p>
            </button>
        </div>
        <h1 className="w-72  mt-4  text-zinc-500 text-base font-normal leading-normal">Nominal yang harus dibayar
            senilai:</h1>
        <h1 className="w-72 mt-2 text-neutral-900 text-2xl font-semibold leading-7 ">Rp. 400.000</h1>
    </div>
</div>
);
}

export default MetodePembayaran;
