import React from "react";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler} className={classes.input}>
      <label htmlFor="name">Username</label>
      <input type="text" id="name" />

      <label htmlFor="age">Age</label>
      <input type="number" id="age" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
