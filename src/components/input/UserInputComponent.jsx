import './UserInputComponent.css';
import { SelectTipComponent } from './SelectTipComponent';
import { UserInputBox } from '../UI/UserInputBox';
import dollar from '../../assets/icon-dollar.svg'
import person from '../../assets/icon-person.svg'
import { useState } from 'react';
import { useBillContext } from '../../store/BillContext';
import { useContext } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { PersonInputBox } from '../UI/PersonInputBox.jsx';



export const UserInputComponent =()=>{
    //using context api
    const billContext = useBillContext()
    const dispatch  = useDispatch()
    const [isPersonZero, setIsPersonZero] = useState(false)
  
    const setBillAmount =(event)=>{ 

     if(event.target.value.length<=10){
       billContext.setBillAmount(event.target.value);

     }
       billContext.setIsBillAmount(true)
      
    }

    const setNumOfPerson = (event) =>{
        if(event.target.value.length<=10){

        billContext.setNumOfPeople(event.target.value);
        }

        let zeroCheck = event.target.value==0 ? true : false
        setIsPersonZero(zeroCheck)
        billContext.setIsNumOfPeople(true)

        //set-no-people
        dispatch({type:'set-no-people',status:true});

    }

   
   
    return(    
          
       <div id='container-input'>        
        <div>
            <label className='container-input-label'>Bill</label><br></br>
            <UserInputBox img={dollar} cuurValue={billContext.billAmount} onText={(event)=>setBillAmount(event)} ></UserInputBox>
        </div>
        <div>
        
        <label className='container-input-label' id='label-section'>Select Tip</label>
        <SelectTipComponent></SelectTipComponent>
        </div>  
        
        <div>
        <div className='person-label-div'>
        <label className='container-input-label'>No of People</label> {isPersonZero&& <label id='person-label-div'>&nbsp;&nbsp;couldn't be zero</label>} <br></br>
        </div >
        <PersonInputBox personZero={isPersonZero} img={person} cuurValue={billContext.noOfPeople} onText={(event)=>setNumOfPerson(event)}></PersonInputBox>
        </div>
       
        </div>         
 
    )
}