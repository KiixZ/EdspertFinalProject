import React from "react"
import Image from '../../assets/Orang.png'

function Herro () {

return (
<div>
    <div className="w-full h-[500px]  relative bg-tugas-bg font-bevietnam flex">
        <div className=" inline-block mt-[100px] mx-28">
            <h1 className="font-bevietnam text-6xl text-white">Programming React JS</h1>
            <h1 className="font-bevietnam text-[42px] text-white">Getting Started with React JS</h1>
            <p className="font-bevietnam text-xl text-white mt-6">Mentor</p>
            <div className="flex">
                <div className="mr-12">
                    <h2 className="font-bevietnam text-white text-[25px] mt-2">Ardi W Saputra</h2>
                    <p className="font-bevietnam text-xl text-white">Developer at Widya Edu</p>
                </div>
                <div>
                    <h2 className="font-bevietnam text-white text-[25px] mt-2">Ade Armyatna </h2>
                    <p className="font-bevietnam text-xl text-white">Developer at Widya Edu</p>
                </div>
            </div>
        </div>
        <div className="self-end ml-20">
            <img src={Image} alt="gambar" className="w-[900] left-full h-[525px]" />
        </div>
    </div>
</div>
)
}

export default Herro
