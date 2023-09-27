import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const clickHandle = () => {
    console.log("clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
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
