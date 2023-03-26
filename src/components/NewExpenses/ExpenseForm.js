import React, { useState } from "react";
import './ExpenseForm.css'
function ExpenseForm(){
    
   const [enteredTitle,setEnterdTitle]=useState("")
   const [enteredAmount,setEnterdAmount]=useState("")
   const [enteredDate,setEnterdDate]=useState("")
// const [userInput,setUserInput]= useState({
//     enteredTitle:"",
//     enteredAmount:"",
//     enteredDate:""
// })
   const titleChangeHandler=(e)=> {
          setEnterdTitle(e.target.value)
        // setUserInput({
        //     ...userInput,enteredTitle:e.target.value
        // })
        // setUserInput((prevState) => {
//     return {...prevState,enteredTitle:e.target.value}
// })
    }

    const amountChangeHandler = (e)=>{
setEnterdAmount(e.target.value)

// setUserInput({
//     ...userInput,enteredAmount:e.target.value
// })

    }
    const dateChangeHandler=(e)=>{
setEnterdDate(e.target.value)
// setUserInput({
//     ...userInput,enteredDate:e.target.value
// })
    }
    const submitHandler = (e)=>{
        e.preventDefault()
    }
return(
   <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-01-15" onChange={dateChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
         <button type="submit">Add Expense</button>
    </div>
   </form>
)
}
export default ExpenseForm;