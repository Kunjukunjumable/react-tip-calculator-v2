import { useBillContext } from '../store/BillContext';
import { useSelector,useDispatch } from 'react-redux';


export const TotalCalculation = ()=>{
        
        const billContext = useBillContext()      
        const tipPercentage = useSelector(state=>state.TipPercent)
        let tipPerPerson = 0;
       
        if(tipPercentage>0){
        const tipPerce = tipPercentage/100;
      
        let billAmount = billContext.billAmount
        let noOfPeople = billContext.noOfPeople;

        tipPerPerson = (billAmount*tipPerce)/noOfPeople


        return tipPerPerson;

        }


}

export const TotalBillPerson =()=>{

    const billContext = useBillContext()    
    let billAmount = billContext.billAmount
    let noOfPeople = billContext.noOfPeople;


    return billAmount/noOfPeople

} 

export const CalculatorState =()=>{
    const billContext = useBillContext()    
    let billAmount = billContext.billAmount
    let noOfPeople = billContext.noOfPeople;

}


export const ResetValues =()=>{
    const billContext = useBillContext() 
    const dispatch  = useDispatch()

    billContext.setBillAmount("")
    billContext.setIsBillAmount(false)
    billContext.setNumOfPeople("");
    billContext.setIsNumOfPeople(false)
    dispatch({type:'reset'});

    //billContext.setBillAmount(event.target.value);
    //billContext.setIsBillAmount(true)
    // billContext.setNumOfPeople(event.target.value);
//         setIsPersonZero(zeroCheck)
//         billContext.setIsNumOfPeople(true)

//         //set-no-people
//         dispatch({type:'set-no-people',status:true});
// }

// dispatch({type:'set-tip-percenttage',amount:percent});
//         billContext.setCustomPercentage(0)
return true;
}