import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Shawarma",
    amount: 45,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e6",
    title: "Body spray",
    amount: 200,
    date: new Date(2022, 11, 12),
  },
  {
    id: "e7",
    title: "Laptop",
    amount: 800,
    date: new Date(2022, 1, 20),
  },
  {
    id: "e8",
    title: "House",
    amount: 1000,
    date: new Date(2022, 3, 14),
  },
  {
    id: "e9",
    title: "Beverages",
    amount: 450,
    date: new Date(2022, 8, 2),
  },
  {
    id: "e10",
    title: "Standing Fan",
    amount: 300,
    date: new Date(2022, 10, 18),
  },
  {
    id: "e11",
    title: "Books",
    amount: 450,
    date: new Date(2023, 2, 14),
  },
  {
    id: "e12",
    title: "New Desk (Wooden)",
    amount: 400,
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
