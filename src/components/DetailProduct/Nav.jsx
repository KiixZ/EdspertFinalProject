import { useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import Hero from './Herro'

const NavBar = () => {
  const [isProgramDropdownHovered, setIsProgramDropdownHovered] = useState(false);
  const [isBidangIlmuDropdownHovered, setIsBidangIlmuDropdownHovered] = useState(false);

  const program = [
    {
      judul: 'Program',
      id: 1,
    },
    {
        judul: 'Bootcamp',
      id: 2,
    },
    {
        judul: 'Mini bootcamp',
      id: 3,
    },
    {
        judul: 'Online course',
      id: 4,
    },
  ];

  const BidangIlmu = [
    {
        judul: 'Bidang ilmu',
      id: 1,
    },
    {
        judul: 'Digital Marketing',
      id: 2,
    },
    {
        judul: 'Product Management',
      id: 3,
    },
    {
        judul: 'Data Analysis',
      id: 4,
    },
    {
        judul: 'Front End Development',
      id: 5,
    },
    {
        judul: 'Back End Development',
      id: 6,
    },
  ];
  return (
  <>
    <div className="w-screen h-screen opacity-90 bg-tugas-bg">
        <nav className="lg:flex items-center justify-between p-4 bg-tugas-bg font-sans" >
          <div className="flex items-center">
            <a href="/" target="#" rel="noopener noreferrer">
              <h1 className="text-white font-bold text-3xl uppercase ml-24 font-sans">LOGO</h1>
              </a>
          </div>
            <div className="lg:flex space-x-4 text-md mx-36">
              <div className="self-end">
                <ul className="flex space-x-4 text-md">
                  <li className='py-8 px-4 flex items-center font-semibold list-none font-be-vietnam-pro'
                      onMouseEnter={() => setIsProgramDropdownHovered(true)}
                      onMouseLeave={() => setIsProgramDropdownHovered(false)}>
                      <a href='#about' className="text-white hover:text-gray-200 font-semibold flex items-center">
                        Program 
                        {isProgramDropdownHovered ? <FaAngleUp className='icon'/> : <FaAngleDown className='icon'/>}
                      </a>
                      {isProgramDropdownHovered && (
                        <ul className='fixed bg-blue-900 text-white mt-5 border-t-2 border-blue-500'>
                        {program.map((item) => (
                          <li key={item.id}>
                            <a href='#'>{item.judul}</a>
                          </li>
                        ))}
                      </ul>
                      )}
                    </li>
                    <li className='py-8 px-4 flex items-center font-semibold list-none font-be-vietnam-pro'
                        onMouseEnter={() => setIsBidangIlmuDropdownHovered(true)}
                        onMouseLeave={() => setIsBidangIlmuDropdownHovered(false)}>
                      <a href='#about' className="text-white hover:text-gray-200 font-semibold flex items-center">
                      Bidang Ilmu 
                        {isBidangIlmuDropdownHovered ? <FaAngleUp className='icon'/> : <FaAngleDown className='icon'/>}
                      </a>
                      {isBidangIlmuDropdownHovered && (
                        <ul className='fixed bg-blue-900 text-white mt-5 border-t-2 border-blue-500'>
                        {BidangIlmu.map((item) => (
                          <li key={item.id}>
                            <a href='#'>{item.judul}</a>
                          </li>
                        ))}
                      </ul>
                      )}
                    </li>
                    <li className='relative flex items-center'>
                      <a href='#testimoni' className="text-white hover:text-gray-200 font-semibold font-be-vietnam-pro">Tentang edspert</a>
                    </li>
                    <li className='relative flex items-center'>
                      <a href="">
                        <button className='bg-tugas-btn hover:bg-red-600 text-white cursor-pointer h-12 px-6 rounded-full flex items-center space-x-2 text-base font-medium'>
                          Masuk / Daftar
                        </button>
                      </a>
                    </li>
                  </ul>
              </div>
            </div>
          </nav>
        <Hero/>       
      </div>
    </>
  );
};

export default NavBar;
