
import { Route,Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Productlist from './components/productlist';
import ProductDetail from './components/productDetail';

function App() {
  return (
    <div>
      <Header/>
   <Routes>
   <Route path='/' element={<Productlist/>} />
   <Route path='/product/:productId' element={<ProductDetail/>} />
   <Route>404 Not Found</Route>
   </Routes>
    </div>
  );
}

export default App;
