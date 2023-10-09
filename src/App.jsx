import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Main';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Detail' element={<Detail/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/Payment' element={<Payment/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
