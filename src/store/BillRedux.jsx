import { createStore } from "redux";
const billReducer = ( state = {BillAmount:0,TipPercent : 0, IsCustomTip:false, customTip:0,IsNoOfPeople:false},action)=>{
     
    if(action.type==='set-tip-percenttage'){
        return{
            TipPercent:action.amount,
            BillAmount:state.BillAmount,
            IsCustomTip:false,
            customTip:'',
            IsNoOfPeople:false,

        }
     }

     if(action.type==='set-bill-amount'){
        return{
            TipPercent:state.TipPercent,
            BillAmount:action.billamount,
            IsCustomTip:state.IsCustomTip,
            customTip:state.customTip,
            IsNoOfPeople:false,

        }
     }

     if(action.type==='set-no-people'){
        return{
            TipPercent:state.TipPercent,
            BillAmount:state.BillAmount,
            IsCustomTip:state.IsCustomTip,
            customTip:state.customTip,
            IsNoOfPeople:action.status,

        }
    }

     if(action.type==='set-custom-tip'){
        return{
            TipPercent:action.percentamount,
            BillAmount:state.BillAmount,
            IsCustomTip:true,
            customTip:action.percentamount,
            IsNoOfPeople:false,

        }
       
     }

     if(action.type==='reset'){
        return{
            BillAmount:0,
            TipPercent : 0, 
            IsCustomTip:false, 
            customTip:0,
            IsNoOfPeople:false

        }
       
     }


      return state
}

export const store = createStore(billReducer);
