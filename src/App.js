
import { Route,Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Productlist from './components/productlist';
import Cart from './components/cart';


function App() {
  return (
    <div>
      <Header/>
   <Routes>
   <Route path='/' element={<Productlist/>} />
   <Route path='/cart' element={<Cart/>} />
   <Route>404 Not Found</Route>
   </Routes>
    </div>
  );
}

export default App;
