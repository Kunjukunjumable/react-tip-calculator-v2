
import { TipBox } from '../UI/TipBox'
import { UseSelector,useDispatch } from 'react-redux'
import './SelectTipComponent.css'
import { useBillContext } from '../../store/BillContext';
import { CustomTip } from '../UI/CustomTip';


export const SelectTipComponent =()=>{
    const dispatch  = useDispatch()
    const billContext = useBillContext()


    const percentDispatchHandler =(percentValue)=>{      
        const percent = Number(percentValue)
        

        dispatch({type:'set-tip-percenttage',amount:percent});
        billContext.setCustomPercentage(0)
        
    }
    return(
        <>
        <div id='container-select'>
            <TipBox currentTip={10} onSelect ={()=>percentDispatchHandler(10)}>10%</TipBox>
            <TipBox currentTip={20} onSelect ={()=>percentDispatchHandler(20)}>20%</TipBox>
            <TipBox currentTip={30} onSelect ={()=>percentDispatchHandler(30)}>30%</TipBox>
            <TipBox currentTip={40} onSelect ={()=>percentDispatchHandler(40)}>40%</TipBox>
            <TipBox currentTip={50} onSelect ={()=>percentDispatchHandler(50)}>50%</TipBox>
            <CustomTip ></CustomTip>
        </div>
        </>
    )
    }