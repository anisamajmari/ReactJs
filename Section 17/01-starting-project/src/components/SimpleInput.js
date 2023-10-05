import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [eneteredNameIsValid, setEneteredNameIsValid] = useState(false);
  const [enteredNameTouchd, setEnteredNameTouchd] = useState(false);

  useEffect(() => {
    if (eneteredNameIsValid) {
      console.log("name is valid");
    }
  }, [eneteredNameIsValid]);

  const nameinputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouchd(true);

    if (enteredName.trim() === "") {
      setEneteredNameIsValid(false);
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouchd(true);

    if (enteredName.trim() === "") {
      setEneteredNameIsValid(false);
      return;
    }
    setEneteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = "";   => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
  };

  const inputIsInvalid = !eneteredNameIsValid && enteredNameTouchd;

  const nameInputClasses = inputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameinputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {inputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
