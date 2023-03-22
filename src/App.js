import ExpenseItem from "./components/ExpenseItem";
import Sample from './components/Sample'


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
      <h3>lets get started</h3>
     <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
     <Sample />
    </div>
  );
}

export default App;
