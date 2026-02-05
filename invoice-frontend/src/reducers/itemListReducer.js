const itemListReducer=(itemlist,action)=>
{
    switch(action.type){
        case "INCREMENT_QTY":
            return itemlist.map(item=>
                item.id==action.id ? {...item,qty:item.qty+1}:item
            );
        case "DECREMENT_QTY":
            return itemlist.map(item=>
                item.id==action.id ? {...item,qty:item.qty-1} :item
            );
        default:
        return itemlist;       
    }
};


export default itemListReducer;