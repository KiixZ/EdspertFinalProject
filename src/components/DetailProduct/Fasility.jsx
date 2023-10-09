import React from "react";
import Tombol from '../../assets/Vector.png';
function Fasility () {
const Benefit = [
{
id: 1,
fasilitas: 'E-Sertifikat',
},
{
id: 2,
fasilitas: 'Portfolio',
},
{
id: 3,
fasilitas: 'Job Connector',
},
{
id: 4,
fasilitas: 'Career Development',
},
];
return (
<>
<div className="w-96 h-72 relative top-[70px] left-[80px] bg-white rounded-2xl p-4 bg-gray-100">
    <p className="text-slate-700 text-3xl font-bold leading-tight">Fasilitas</p>
    {Benefit.map((item) => (
        <div className="font-semibold text-xl font-sans flex" key={item.id}>
            <img src={Tombol} alt="tombol" className="w-5 h-5 mt-2 mr-4" />
            <p>{item.fasilitas}</p>
        </div>
    ))}
</div>

</>
)
}

export default Fasility;
