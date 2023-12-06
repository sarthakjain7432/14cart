import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from './context';
const Navbar = () => {
  const {state} = useGlobalContext();
  const totalAmount = state.cart.reduce((acc, item) => acc + item.amount, 0);
  return (
    <div style={{height:"70px",backgroundColor:"#3a86ff",display:"flex",alignItems:"center",justifyContent:"center",justifyContent:"space-evenly"}}>
      <p style={{color:"white",fontSize:"30px"}}>UseReducer</p>
      <div style={{position:"relative"}}>
      <FaCartPlus style={{fontSize:"30px",color:"white"}}/>     
      <p style={{color:"white",backgroundColor:"#8d99ae",borderRadius:"50%",padding:"5px 10px",position:"absolute",left:"20px",top:"-30px"}}>
        {totalAmount}
      </p>     
      </div>
    </div>
  )
}

export default Navbar