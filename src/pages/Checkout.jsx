import React, { useState } from "react";
import Nav from "../components/NavBar";
import Main from "../components/CheckoutProduct/Main";
import Metode from "../components/CheckoutProduct/Metode";
import DetailPembelian from "../components/CheckoutProduct/DetailPembelian";
import Footer from '../components/Footer'

function Cart() {
  // State untuk mengelola metode pembayaran yang dipilih
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  // Fungsi untuk mengupdate metode pembayaran yang dipilih
  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  }

  return (
    <div>
      <Nav />
      <Main />
      <div className="flex">
        {/* Meneruskan prop dan fungsi ke komponen Metode */}
        <Metode onPaymentMethodSelect={handlePaymentMethodSelect} />
        {/* Meneruskan prop selectedPaymentMethod ke komponen DetailPembelian */}
        <DetailPembelian selectedPaymentMethod={selectedPaymentMethod} />
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
