import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandle = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandle}>Change title</button>
    </Card>
  );
}

// function ExpenseItem({ title, date, amount }) {
//   return (
//     <div className="expense-item">
//       <div>{date.toISOString()}</div>
//       <div className="expense-item__description">
//         {/* <h2>Car Insurance</h2> */}
//         <h2>{title}</h2>

//         <div className="expense-item__price">${amount}</div>
//       </div>
//     </div>
//   );
// }

export default ExpenseItem;
