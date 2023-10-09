import { useNavigate } from 'react-router-dom';
import { BiArrowBack, BiCaretRight } from "react-icons/bi";
import CaraPembayaran from './CaraPembayaran';
import MetodePembayaran from './MetodePembayaran';
import Pengingat from './Pengingat';

function Main() {
    const navigate = useNavigate()
return (
<div>

    <div className="flex ml-[72px] mt-10 ">
        <BiArrowBack className="mr-4" />
        <button className="text-sky-500 text-xs font-bold leading-snug" onClick={()=> navigate('/Checkout')}>Checkout</button>
        <BiCaretRight alt="Kanan" className="mx-4" />
        <p className="text-zinc-500 text-xs font-medium leading-snug">Instruksi Bayar</p>
    </div>
    <div className="text-neutral-900 flex ml-[72px] mt-10 text-3xl font-bold leading-loose">Intruksi Pembayaran</div>
    
    <div className="w-[1269px] h-[635px] bg-white mx-auto mt-10 rounded-2xl flex">
    <MetodePembayaran/>
    <CaraPembayaran/>
    </div>
    <div className="mb-20">
       <Pengingat/>
    </div>
</div>
);
}

export default Main;
