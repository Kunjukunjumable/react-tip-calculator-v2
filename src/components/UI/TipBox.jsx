import './TipBox.css'
import { useSelector,connect } from 'react-redux';

export const TipBox =(props)=>{
    const handler = props.onSelect;
    const currentTip = props.currentTip
    const IsCustomTip = useSelector(state=>state.IsCustomTip)
    const TipPercent = useSelector(state=>state.TipPercent)

    let isTipCurrent = currentTip==TipPercent? true : false ;
    if(IsCustomTip){
        isTipCurrent = false
    }
     
    
    return(
        // <div onClick={handler} className='parent'>
        //     <div>{props.children}</div>
        // </div>
        <div onClick={handler} className={`${isTipCurrent?'parent-click':'parent'}`}>
           <div>{props.children}</div>         
            </div>
    )
}