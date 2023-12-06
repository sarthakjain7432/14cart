import React from 'react'
import { useGlobalContext } from './context';
import Cartitem from './Cartitem';

const Cartcontainer = () => {
  const {state,zeroAmount} = useGlobalContext();
  const itemsWithTotalPrice = state.cart.map(item => ({
  ...item,
  totalPrice: item.price * item.amount,       
  }));
  const overallTotalPrice = itemsWithTotalPrice.reduce((acc, item) => acc + item.totalPrice, 0);
  const roundedOverallTotalPrice = overallTotalPrice.toFixed(2);
  return (
    <div style={{marginTop:"-30px"}}>
      <p style={{fontSize:"40px",textAlign:"center"}}>YOUR BAG</p>
      {overallTotalPrice === 0 ? <div style={{textAlign:"center"}}>is currently empty</div>:<Cartitem/>}
      {overallTotalPrice === 0 ? "":
      <div style={{display:"flex",alignItems:"center",marginLeft:"22%"}}>
        <p style={{fontSize:"23px",fontWeight:"bold"}}>Total</p>
        <p style={{marginLeft:"56%",fontWeight:"bold",fontSize:"20px"}}>
          ${roundedOverallTotalPrice}
        </p>
      </div>      
      }
      {overallTotalPrice === 0 ? "":
      <button style={{marginLeft:"46%",color:"red",backgroundColor:"white",borderColor:"#8d99ae",borderRadius:"5px",width:"130px",height:"33px",fontSize:"15px",fontWeight:"bold"}}
      onClick={()=>zeroAmount()}
      >
        CLEAR CART
      </button>     
      }
    </div>
  )
}

export default Cartcontainer