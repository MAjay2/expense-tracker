import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, updateExpense, deleteExpense } from './redux/actions/expense.jsx';

const App = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const [newExpense, setNewExpense] = useState({
    item: '',
    date: '',
    amount: 0,
    category: 'Food and Drink',
  });

  const handleAddExpense = () => {
    dispatch(addExpense(newExpense));
    setNewExpense({
      item: '',
      date: '',
      amount: 0,
      category: 'Food and Drink',
    });
  };

  const handleUpdateExpense = (id, updatedExpense) => {
    dispatch(updateExpense(id, updatedExpense));
  };

  const handleDeleteExpense = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <input
          type="text"
          value={newExpense.item}
          onChange={(e) =>
            setNewExpense({ ...newExpense, item: e.target.value })
          }
          placeholder="Item or service"
        />
        <input
          type="date"
          value={newExpense.date}
          onChange={(e) =>
            setNewExpense({ ...newExpense, date: e.target.value })
          }
          placeholder="Date purchased"
        />
        <input
          type="number"
          value={newExpense.amount}
          onChange={(e) =>
            setNewExpense({ ...newExpense, amount: e.target.value })
          }
          placeholder="Amount paid"
        />
        <select
          value={newExpense.category}
          onChange={(e) =>
            setNewExpense({ ...newExpense, category: e.target.value })
          }
        >
          <option value="Food and Drink">Food and Drink</option>
          <option value="Accommodation">Accommodation</option>
          <option value="Transportation">Transportation</option>
          <option value="Housing and Rent">Housing and Rent</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <div>Item or Service: {expense.item}</div>
            <div>Date Purchased: {expense.date}</div>
            <div>Amount Paid: {expense.amount}</div>
            <div>Category: {expense.category}</div>
            <button
              onClick={() =>
                handleUpdateExpense(expense.id, {
                  ...expense,
                  item: 'Updated Item',
                })
              }
            >
              Update
            </button>
            <button onClick={() => handleDeleteExpense(expense.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
