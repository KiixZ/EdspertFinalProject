import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import BankMandiri from '../../assets/mandiri.png'
import BankBCA from '../../assets/bcamobile.png'

function Metode() {
    const [isOpenBankTransfer, setIsOpenBankTransfer] = useState(false);
    const [isOpenVirtualAccount, setIsOpenVirtualAccount] = useState(false);
  
    function handleToggleBankTransfer() {
      setIsOpenBankTransfer(!isOpenBankTransfer);
    }
  
    function handleToggleVirtualAccount() {
      setIsOpenVirtualAccount(!isOpenVirtualAccount);
    }

return (
<>
<div className="w-[587px] h-[847px] bg-white relative ml-[30px] mt-10 rounded-2xl bg-gray-100">
        <div className="container px-12 py-5">
          <div>
            <h1 className="text-neutral-900 mb-4 text-xl font-bold leading-7">Pilih Metode Pembayaran</h1>

            <button className="text-left" onClick={handleToggleBankTransfer}>
              <h4 className="font-bold text-sm mb-2">Bank Transfer (Verifikasi Manual)</h4>
              <div className="border-b-2 flex">
                <p className="font-bold text-subdued text-xs mb-3">
                  Pembayaran melalui Bank transfer Mandiri atau BCA. Metode bayar ini memerlukan verifikasi pembayaran manual melalui whatsapp.
                </p>
                <p> {isOpenBankTransfer ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
              </div>
            </button>

            {isOpenBankTransfer && (
              <button>
                <div className="w-80 h-5 mt-2 relative">
                  <h2 className="left-[87px] top-[1px] absolute text-neutral-900 text-sm font-semibold leading-tight">
                    Bank Transfer ke Rek Bank Mandiri
                  </h2>
                  <img className="w-16 h-5 left-0 top-0 absolute" src={BankMandiri} />
                </div>
                <div className="w-80 h-5 top-[20px] relative">
                  <h2 className="left-[87px] top-[1px] absolute text-neutral-900 text-sm font-semibold leading-tight">
                    Bank Transfer ke Rek Bank BCA
                  </h2>
                  <img className="w-16 h-5 left-0 top-0 absolute" src={BankBCA} />
                </div>
              </button>
            )}

            <div>
              <button className="text-left mt-10" onClick={handleToggleVirtualAccount}>
                <h4 className="font-bold text-sm mb-2">Virtual Account (Verifikasi Otomatis)</h4>
                <div className="border-b-2 flex">
                  <p className="font-bold text-subdued text-xs mb-3">
                    Pembayaran melalui Virtual Account. Metode bayar ini akan diverifikasi secara otomatis.
                  </p>
                  <p> {isOpenVirtualAccount ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
                </div>
              </button>

              {isOpenVirtualAccount && (
                <div className="w-96 h-14 rounded border-neutral-300">
                  <div className="w-80 h-5 mt-2 relative">
                    <h2 className="left-[87px] top-[1px] absolute text-neutral-900 text-sm font-semibold leading-tight">
                      Virtual Account Mandiri
                    </h2>
                    <img className="w-16 h-5 left-0 top-0 absolute" src={BankMandiri} />
                  </div>
                  <div className="w-80 h-5 top-[20px] relative">
                    <h2 className="left-[87px] top-[1px] absolute text-neutral-900 text-sm font-semibold leading-tight">
                      Virtual Account BCA
                    </h2>
                    <img className="w-16 h-5 left-0 top-0 absolute" src={BankBCA} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
</>
);
}

export default Metode;
