import React from "react";
import Nav from "../components/NavBar";
import Main from "../components/CheckoutProduct/Main";
import Metode from "../components/CheckoutProduct/Metode";
import DetailPembelian from "../components/CheckoutProduct/DetailPembelian";
import Footer from '../components/Footer'

function Cart () {
    return(
        <div>
        <Nav/>
        <Main/>
        <div className="flex">
        <Metode/>
        <DetailPembelian/>
        </div>
        <Footer/>

        </div>
    )
}

export default Cart;