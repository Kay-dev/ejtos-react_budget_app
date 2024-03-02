import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget,remaining,totalExpenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const budget = event.target.value;
        if(budget > remaining){
            alert("The value cannot exceed remaining funds  £" + remaining);
        }
        if(budget < totalExpenses){
            alert("You can not reduce the budget value lower than spending  £" + totalExpenses);
        }
        setNewBudget(budget);
    };
    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                max="20000"
                value={newBudget}
                onChange={handleBudgetChange}
            ></input>
        </div>
    );
};
export default Budget;
