import './TipAmountComponent.css'

import {TotalCalculation,TotalBillPerson} from '../../utils/TotalCalculation.jsx'

export const TipAmountComponent =({type,billAmount, label1})=>{

    let tipAmount = TotalCalculation();
    if(isFinite(tipAmount)){

        tipAmount= tipAmount.toFixed(2)
  
    }else{tipAmount=0.00}
   

    let totalPerPerson = TotalBillPerson();

    if(isFinite(totalPerPerson)){

        totalPerPerson= totalPerPerson.toFixed(2)
  
    }else{totalPerPerson=0.00}
     let amountToDisplay = type=="tip"? tipAmount : totalPerPerson

    return(
        <div id='container-tiptotal'>
           <div id='div-a'>
            <label>{label1}</label><br/>
            <label id='label2'>/person</label>
           </div>
           <div id='div-b'>
            <label >${amountToDisplay}</label>
           </div>

        </div>
    )
}