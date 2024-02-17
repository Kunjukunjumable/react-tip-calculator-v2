import './ResultComponent.css';
import React, { useContext,use } from 'react';
import { TipAmountComponent } from './TipAmountComponent';
import { ResetButton } from '../UI/ResetButton';
import {BillContext} from '../../store/BillContext'
import { useBillContext } from '../../store/BillContext';
import { useSelector } from 'react-redux';

export const ResultComponent =()=>{

    const billContext = useBillContext()
    //const billAmount = billContext.billAmount;
    const billAmount = useSelector(state=>state.BillAmount)
    
    console.log("inside result")

    return(
        <div id='container-result'>
            <div>
           <TipAmountComponent type="tip" label1="Tip Amount" billAmount={billAmount}></TipAmountComponent>
           <TipAmountComponent type="total" label1="Total" billAmount={billAmount}></TipAmountComponent>
            </div>
           
           
            <div>
                <ResetButton></ResetButton>
            </div>
        </div>
    )
}