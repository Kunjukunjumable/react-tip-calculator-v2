import './UserInputBox.css'
import { useBillContext } from '../../store/BillContext';

export const PersonInputBox=({img,cuurValue, onText,personZero})=>{
   const billContext = useBillContext()
   let isPersonSet = billContext.isNoOfPeople
   const noOfPeople = Number(billContext.noOfPeople)

   if(noOfPeople==0){
      isPersonSet=false
   }

   return(
   <div className={`${isPersonSet?'container-box-focus-person':'container-box-person'}`}>
      <img src={img} alt="Logo" />
      <input maxlength="10" className='container-child' required value={cuurValue} onChange={onText} type="number"></input>

   </div>
   )
}
