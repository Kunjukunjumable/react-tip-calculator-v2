import './ResetButton.css'
import { useSelector,useDispatch } from 'react-redux';
import { useBillContext } from '../../store/BillContext';
import {ResetValues} from '../../utils/TotalCalculation'



export const ResetButton =()=>{
    const billContext = useBillContext() 
    const dispatch  = useDispatch()


    const billAmount = billContext.billAmount
    const TipPercent = useSelector(state=>state.TipPercent)
    const NoOfPeople = useSelector(state=>state.IsNoOfPeople)

    let buttonStatus = (billAmount>0)||(TipPercent>0) || (NoOfPeople>0)? true:false
    
    const resethandler =()=>{
        billContext.setBillAmount("")
        billContext.setIsBillAmount(false)
        billContext.setNumOfPeople("");
        billContext.setIsNumOfPeople(false)
        dispatch({type:'reset'});
       
    }


    let classes = 'button'
    return (
        <button onClick={resethandler}  className={`${buttonStatus?'button':'button-disable'}`} >RESET</button>
    )
}