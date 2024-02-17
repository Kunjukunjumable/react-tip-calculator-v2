import './UserInputBox.css'
import { useSelector,useDispatch } from 'react-redux'
import { useBillContext } from '../../store/BillContext';



export const CustomTip =()=>{
    const billContext = useBillContext()
    const dispatch  = useDispatch()
    let customPercentage= billContext.customPercentage;

    let isCusyomTip = useSelector(state=>state.IsCustomTip)

    console.log("isCusyomTip "+isCusyomTip)

    const customTipHandler =(event)=>{

        if(!isNaN(event.target.value)&& Number(event.target.value)<=100){
        const percent = event.target.value
        const percentC = Number(percent)
        billContext.setCustomPercentage(percent)
        billContext.setIsCustPercent(true)
        dispatch({type:'set-custom-tip',percentamount:percentC});

        }        

    }
    let numberToDisplay = isCusyomTip? billContext.customPercentage:""
    
    //className={`${isBillSet?'container-box-focus':'container-box'}`}


    return(
        <div className={`${isCusyomTip?'container-custom-focus':'container-custom'}`}>      
        <input placeholder='Custom'  className='container-child' onChange={customTipHandler} required value= {numberToDisplay} type="text"></input>
        </div>
    )
}