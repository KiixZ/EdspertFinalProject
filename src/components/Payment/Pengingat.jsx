import React from "react";
import { useNavigate } from "react-router-dom";

const Pengingat = () => {
   const  navigate = useNavigate();
return(
<>
    <div className="w-screen h-96 relative bg-slate-700 flex flex-col justify-center items-center">
      <p className="text-white text-3xl text-center font-semibold leading-10">
        Sudah Transfer? Lakukan verifikasi pembayaran segera!
      </p>
      <div className="w-64 h-14 px-6 py-2.5 bg-amber-400 mt-4 rounded-3xl flex flex-col justify-center items-center">
        <button className="text-black text-sm font-bold leading-tight" onClick={() => navigate('/')}>
          Verifikasi Pembayaran
        </button>
      </div>
    </div>

</>
)
}

export default Pengingat;
