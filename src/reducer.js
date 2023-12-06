export const reducer=(state, action)=>{
    if(action.type === "INCREASE"){
        return{
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        )    
        }
    }
    if(action.type === "DECREASE"){
        return{
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : item
        )  
        .filter((item) => item.amount > 0),  
        }
    }
    if(action.type === "REMOVE"){
        return{
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload)
        }
    }
    if(action.type === "ZERO"){
        return{
            ...state,
            cart: state.cart.map((item)=>({            
                ...item,
                amount: 0,
            })
            )
        }
    }
    throw new Error('no matching action type');
}