import React, { useState } from 'react';

function CaraPembayaran() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('atm');

  const paymentMethods = {
    atm: [
      'Masukkan kartu ke mesin ATM Mandiri.',
      'Pilih Bahasa.',
      'Masukkan PIN ATM.',
      'Pilih menu transaksi lainnya.',
      'Pilih menu "Transfer", lalu pilih ke rekening Mandiri.',
      'Masukkan nomor rekening yang dituju.',
      'Masukkan jumlah uang yang akan ditransfer.',
      'Layar ATM akan menampilkan data transaksi Anda, jika data sudah benar pilih "YA".',
      'Selesai, struk akan keluar dari mesin ATM.',
    ],
    ibank: [
      'Pergi ke Internet Banking.',
      'Pilih Bahasa.',
      'Pilih menu transaksi lainnya.',
      'Pilih menu "Transfer", lalu pilih ke rekening Mandiri.',
      'Masukkan nomor rekening yang dituju.',
      'Masukkan jumlah uang yang akan ditransfer.',
      'Layar Anda akan menampilkan data transaksi Anda, jika data sudah benar pilih "YA".',
      'Selesai, invoice akan muncul di layar Anda.',
    ],
    mbank: [
      'Buka ke Mobile Banking.',
      'Pilih Bahasa.',
      'Masukkan PIN ATM.',
      'Pilih menu transaksi lainnya.',
      'Pilih menu "Transfer", lalu pilih ke rekening Mandiri.',
      'Masukkan nomor rekening yang dituju.',
      'Masukkan jumlah uang yang akan ditransfer.',
      'Layar ATM akan menampilkan data transaksi Anda, jika data sudah benar pilih "YA".',
      'Selesai, invoice akan muncul di layar Anda.',
    ],
  };

  const steps = paymentMethods[selectedPaymentMethod];

  return (
    <div>
      <div className="pt-12 pl-56 pb-7 bg-gray-100">
        <h1 className="font-bold text-xl mb-6">Instruksi Pembayaran</h1>
        <div className="flex font-semibold text-xl border-b-2 mb-4">
          <p
            className={`mr-8 mb-2 cursor-pointer ${
              selectedPaymentMethod === 'atm' ? 'text-bold' : ''
            }`}
            onClick={() => setSelectedPaymentMethod('atm')}
          >
            ATM
          </p>
          <p
            className={`mr-8 cursor-pointer ${
              selectedPaymentMethod === 'ibank' ? 'text-bold' : ''
            }`}
            onClick={() => setSelectedPaymentMethod('ibank')}
          >
            Internet Banking
          </p>
          <p
            className={`cursor-pointer ${
              selectedPaymentMethod === 'mbank' ? 'text-bold' : ''
            }`}
            onClick={() => setSelectedPaymentMethod('mbank')}
          >
            M-Banking
          </p>
        </div>
        <div>
          <ol className="list-decimal pl-6 font-semibold text-base w-[395px] h-[264px]">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default CaraPembayaran;
