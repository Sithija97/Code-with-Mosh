import { useState } from "react";
import FormHook from "./components/FormHook";
import FormRef from "./components/FormRef";
import FormState from "./components/FormState";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import categories from "./expense-tracker/categories";

function App() {
  const data = [
    { id: 1, description: "asa", amount: 12, category: "Entertainment" },
    { id: 2, description: "asa", amount: 12, category: "Utilities" },
    { id: 3, description: "asa", amount: 12, category: "Entertainment" },
    { id: 4, description: "asa", amount: 12, category: "Groceries" },
  ];
  const [expenses, setExpenses] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
