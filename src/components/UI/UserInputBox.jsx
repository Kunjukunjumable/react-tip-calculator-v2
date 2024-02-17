import './UserInputBox.css'
import logo from '../../assets/icon-dollar.svg'
import { useBillContext } from '../../store/BillContext';

export const UserInputBox=({img,cuurValue, onText})=>{
   const billContext = useBillContext()
   let isBillSet = billContext.isBillAmount
   const billAmount = Number(billContext.billAmount)


   if(billAmount==0){
      isBillSet=false
   }

   return(
   <div className={`${isBillSet?'container-box-focus':'container-box'}`}>
      <img src={img} alt="Logo" />
      <input  maxlength={5} type="text" className='container-child' id='input_img' required value={cuurValue} onChange={onText} type="number" placeholder='0'></input>

   </div>
   );

}