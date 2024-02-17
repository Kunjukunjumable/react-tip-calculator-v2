import { createContext, useState,useContext } from "react";

 export const BillContext = createContext();
 
 export const useBillContext = ()=> useContext(BillContext);


 export function ContextProvider({children}){
    const [billAmount,setBillAmount] = useState();
    const [customPercentage,setCustomPercentage] = useState();
    const [isBillAmount,setIsBillAmount] = useState(false);
    const [isCusPercent,setIsCustPercent] = useState(false);
    const [noOfPeople,setNumOfPeople] = useState('');
    const [isNoOfPeople,setIsNumOfPeople] = useState(false);

    return(
        <BillContext.Provider 
        value={{billAmount,setBillAmount,
               customPercentage,setCustomPercentage,
               isBillAmount,setIsBillAmount,
               isCusPercent,setIsCustPercent,
               noOfPeople,setNumOfPeople,
               isNoOfPeople,setIsNumOfPeople                            
               }}>
            {children}
        </BillContext.Provider>
    )
 }
