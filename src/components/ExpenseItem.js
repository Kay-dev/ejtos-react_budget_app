import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { FcPlus } from "react-icons/fc";
import { FaMinusCircle } from "react-icons/fa";


const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>
                {currency}
                {props.cost}
            </td>
            <td>
                <FcPlus size="2em" onClick={(event) => increaseAllocation(props.name)} />
            </td>
            <td>
                <FaMinusCircle size="1.7em" onClick={(event) => decreaseAllocation(props.name)} />
            </td>
            <td>
                <TiDelete
                    size="2.5em"
                    color="red"
                    onClick={handleDeleteExpense}
                ></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
