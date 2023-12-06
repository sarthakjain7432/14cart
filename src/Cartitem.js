import React from 'react'
import { useGlobalContext } from './context';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Cartitem = () => {
  const {state,increaseItem,decreaseItem,removeItem} = useGlobalContext();
  return (
    <div>
    {
      state.cart.map((item)=>     
        <div style={{display:"flex",marginLeft:"20%"}}>
          <div><img src={item.img} alt="" style={{height:"100px",width:"100px"}}/></div>
          <div>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={()=>removeItem(item.id)}>remove</button>
          </div>
          <div style={{position:"absolute",left:"75%"}}>
            <IoIosArrowUp onClick={()=>increaseItem(item.id)}/>
            <p style={{textAlign:"center"}}>{item.amount}</p>
            <IoIosArrowDown onClick={()=>decreaseItem(item.id)}/>
          </div>
        </div>        
      )
    }
    </div>
  )
}

export default Cartitem 

