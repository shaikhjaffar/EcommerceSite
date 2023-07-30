import {React,useEffect,useState} from 'react'
import ProductComponent from './productComponent'
import { ProductService } from './Api'
import { connect } from 'react-redux';
import { useDispatch,useSelector } from 'react-redux';
import { fetch_data_success } from './redux/action';


function Productlist() {
   const dispatch = useDispatch()
   const getdata = useSelector((state)=> state.dataReducer.data);
    const [allproduct, setallproduct] = useState({});
  const [isloading, setloading] = useState(false);
  const [sorting,setsorting] = useState(false)
   const [sortedData,setSortedData] = useState([])
  const [error, seteroor] = useState({});
   function sortingbyPrice(array){
     array.sort(function (a,b){
      return a.price-b.price
     })
   }
    

     useEffect(()=>{
      ProductService.getAllProduct()
      .then((res) => {
        setallproduct(res.data);
        dispatch(fetch_data_success(res.data));
        setloading(true);
      })
      .then((err) => {
        seteroor(err);
      });
  
     },[])
  
   
  return (
    <div className="product_list_wrap">
       <button id='sort_btn' className='sort_btn' onClick={()=>{
         if(document.getElementById('sort_btn').classList.contains('cross')){
          document.getElementById('sort_btn').classList.remove('cross')
          allproduct.sort(function (a,b){
            return a.id -b.id
          })
           setSortedData(getdata)
           setsorting(false)
         }
         else {
          document.getElementById('sort_btn').classList.add('cross')
          sortingbyPrice(getdata)
          setSortedData(getdata)
         }
      
       }}>Sort by price</button>
       {
          isloading  ?  getdata.map((product) => (
            <ProductComponent key={product.id} product={product}  />
              )) : <div></div>
       }
         {
          isloading && sorting ?  sortedData.map((product) => (
            <ProductComponent key={product.id} product={product} />
              )) : <div></div>
       }


   
        {/* <Cart/> */}
    </div>
  )
}
const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});
export default connect(mapStateToProps, {})(Productlist);
