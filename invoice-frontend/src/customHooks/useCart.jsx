import { useMemo } from "react";

const useCart=(itemlist)=>{
    const totalCartValue=useMemo(()=>{
        return itemlist.reduce((sum,item)=>
            sum+item.qty,0
    )},[itemlist]);

    const subTotal=useMemo(()=>{return itemlist.reduce(
        (sum,item)=>sum+item.cost*item.qty,0
    )},[itemlist] );

return {totalCartValue,subTotal};
}
 
 export default useCart;