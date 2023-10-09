import { useNavigate } from "react-router-dom"
import Image from '../../assets/cardh.png'


function ProductList() {
   const navigate = useNavigate();
    return(
        <div>
        <div className="w-[352px] h-[293px]  ml-20 mt-10">
        <div className="w-80 h-32 bg-sky-950 rounded-t-lg">
            <div className="flex">
            <img src={Image} alt="Menu" className="mt-4 ml-7 " />
                <div className="ml-6 my-3 self-center">
                <h3 className="text-amber-400 text-base font-extrabold leading-tight mb-3">Intensive Bootcamp</h3>
                <h1 className="text-white text-sm font-extrabold leading-tight">Programming React JS </h1>
                <p className="text-white text-xs font-normal leading-tight">(Getting Started with React JS )</p>
                </div>
            </div>
        </div>
        <button className="h-[164px] w-[320px] rounded-b-3xl bg-slate-100" onClick={() => navigate('/Detail')}>
          <div>
            <div className="ml-7 text-left">
              <h1 className="font-bold text-base">Programming React JS </h1>
              <h1 className="font-semibold text-base mb-2">Getting Started with React JS</h1>
              <div className="flex font-600">
                <div className="mr-2 text-black text-opacity-50">
                  <p>Batch</p>
                  <p>Mentor</p>
                </div>
                <div className=" text-black font-semibold leading-tigh">
                  <p>September 2022</p>
                  <p>Ardi W Saputra, Ade Armyatna</p>
                </div>
              </div>
              <div className="flex justify-end mt-3 font-sans">
                <p className="mr-6 text-sm text-black font-400 line-through">Rp. 2060.000</p>
                <p className="text-xl text-emerald-500 font-extrabold leading-tight mr-8">Rp. 560.000</p>
              </div>
            </div>
          </div>
        </button>
        </div>
    </div>
    )
    
}

export default ProductList;