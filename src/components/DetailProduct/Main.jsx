import React from "react"
import Nav from "./Nav"
import Materi from "./Materi"
import Checkout from "./Checkout"
import Fasility from "./Fasility"
import Ajakan from "./Ajakan"
import Footer from "../Footer"



function DetailProduct () {
return (
<>
    <Nav />
    <div className="bg-white w-full h-full flex">
        <Checkout />
        <div className="container">
            <Materi />
            <Fasility />
        </div>
    </div>
    <Ajakan />
    <Footer />
</>
)
}
export default DetailProduct;
