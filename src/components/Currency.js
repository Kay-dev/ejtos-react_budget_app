import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Currency() {

    const {dispatch } = useContext(AppContext);

    const [currencyText, setCurrency] = useState("£ Pound");
    
    const handleCurrency = (event)=>{
        const selectedText = event.target.options[event.target.selectedIndex].textContent;
        setCurrency(selectedText);
        dispatch({
            type: "CHG_CURRENCY",
            payload: event.target.value
        })
    }

    return (
    <div>
        <select 
        name="Currency" 
        class="form-select alert alert-secondary" 
        value={currencyText}
        onChange={handleCurrency}
        >
            <option selected>Currency:({currencyText})</option>
            <option value="£">£ Pound</option>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    </div>
  )
}
