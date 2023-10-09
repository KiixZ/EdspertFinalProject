// import React from "react"
import Image from '../../assets/Orang.png'

function Heros (){
    return(
        <>
        <div className="container mx-auto ml-15 mr-64">
            <h1 className="w-auto left-[100px] top-[150px] relative text-white text-4xl font-semibold leading-10">Jadi expert bersama edspert.id</h1>
            <h1 className="mt-2 w-auto text-white left-[100px] top-[150px]  relative  ">Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</h1>
            <div className="absolute">
              <img src={Image} alt="Gambar" className="w-[900] relative left-full h-[525px]" />
            </div>
        </div>
        </>
    )
}

export default Heros