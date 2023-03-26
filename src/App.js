import ExpenseItem from "./components/ExpenseItem";
import './components/expenses.css'
import Card from './components/Card'
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { useEffect, useState } from "react";
function App() {
  const expenses=[
    {
      title:"Toilet Paper",
      amount:295.67,
      date:new Date(1999, 5, 20)
    },
    {
      title:"car insurance",
      amount:94.67,
      date:new Date(1999, 12, 20)
    },
    {
      title:"New car",
      amount:294.6,
      date:new Date(1999, 3, 10)
    },
    {
      title:"new disk",
      amount:29.67,
      date:new Date(1999, 1, 2)
    }
  ]
  return (
    <div>
      <NewExpenses></NewExpenses>
      <Card className="expenses">
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
      </Card>
    </div>
  );
}

export default App;


// const [data,setData] = useState({
//   username:"",password:""
// })
// const {username,password}=data;
// const changeHandler= e => {
//   setData({...data,[e.target.name]:[e.target.value]})
// }
// const submitHandler = e =>
// {
//   e.preventDefault()
//   console.log(data)
// } 
// return (
//   <div>
//     <center>
//       <form onSubmit={submitHandler}>
//         <input type="text" name="username" value={username} onChange={changeHandler}/> <br/>
//         <input type="password" name="password" value={password} onChange={changeHandler}/> <br/>
//         <input type='submit' name='submit' />
//       </form>
//     </center>
//   </div>
//  )

// const [data,setData] = useState([])
// useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/todos').then(
//     response => response.json()
//   ).then(json => setData(json))
// },[])
//   return (
//     <div>
//       {data.map(item => <li key={item.id}>{item.title}</li>)}
//     </div>
//   )


