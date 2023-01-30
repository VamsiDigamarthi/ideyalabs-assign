import { useEffect, useState } from "react";
import validation from "../validation";
import "./index.css";

const SignUp = ({ signUpSuc }) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    date: "",
    month: "",
    year: "",
    gender: "",
    instrument: "",
    day: "",
    dateAndYear: "",
    timing: "",
  });

  const [error, setError] = useState({});
  const [allDataCorrect, setAllDataCorrect] = useState(false);

  const handelAllValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && allDataCorrect) {
      signUpSuc();
    }
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setError(validation(values));
    localStorage.setItem("date", values);
    setAllDataCorrect(true);
  };

  const v = error.firstError ? "first-error" : "";

  const last = error.lastError ? "first-error" : "";

  const date = error.dateError ? "first-error" : "";

  const month = error.monthError ? "first-error" : "";

  const year = error.yearError ? "first-error" : "";

  const instru = error.instrumentError ? "first-error" : "";

  const dateAnd = error.dateAndYearError ? "first-error" : "";

  const time = error.timingError ? "first-error" : "";

  return (
    <form onSubmit={handelSubmit} className="sign-main">
      <div className="name-field">
        <p className="names-para">
          Name <span>*</span>
        </p>
        <div className="name-inner">
          <div className="inner-name">
            <label>firstname</label>
            <input
              type="text"
              onChange={handelAllValues}
              placeholder="firstname"
              name="firstname"
              className={v}
            />
            <p className="warning">{error.firstname}</p>
          </div>
          <div className="inner-name">
            <label>lastname</label>
            <input
              type="text"
              onChange={handelAllValues}
              placeholder="lastname"
              name="lastname"
              className={last}
            />
            <p className="warning">{error.lastname}</p>
          </div>
        </div>
      </div>
      <div className="name-field">
        <p className="names-para">
          Birth Date <span>*</span>
        </p>
        <div className="name-inner">
          <div className="inner-name">
            <label>date</label>
            <select onChange={handelAllValues} name="date" className={date}>
              <option disabled selected hidden></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <p className="warning">{error.date}</p>
          </div>
          <div className="inner-name">
            <label>month</label>
            <select onChange={handelAllValues} name="month" className={month}>
              <option disabled selected hidden></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
            <p className="warning">{error.month}</p>
          </div>
          <div className="inner-name">
            <label>year</label>
            <select onChange={handelAllValues} name="year" className={year}>
              <option disabled selected hidden></option>
              <option>1999</option>
              <option>2000</option>
              <option>2001</option>
              <option>2002</option>
              <option>2003</option>
              <option>2004</option>
              <option>2005</option>
            </select>
            <p className="warning">{error.year}</p>
          </div>
        </div>
      </div>
      <div className="name-field3" name="gen">
        <p className="names-para">
          Gender <span>*</span>
        </p>
        <div className="male-female">
          <div className="male">
            <input
              onChange={handelAllValues}
              type="radio"
              name="gender"
              value="male"
            />
            <label className="days">Male</label>
          </div>
          <div className="male">
            <input
              type="radio"
              onChange={handelAllValues}
              name="gender"
              value="femlae"
            />
            <label className="days">female</label>
          </div>
        </div>
      </div>
      <p className="gender warning">{error.gender}</p>
      <div className="name-field3">
        <p className="names-para">
          Choice of instrument <span>*</span>
        </p>
        <div className="inner-name">
          <select
            onChange={handelAllValues}
            name="instrument"
            className={instru}
          >
            <option>AI</option>
            <option>Machine Learning</option>
            <option>Python Developer</option>
            <option>Java Developer</option>
            <option>Full Stack Developer</option>
            <option>Front End Developer</option>
            <option>Back End Developer</option>
          </select>
          <p className="warning">{error.instrument}</p>
        </div>
      </div>
      <div className="name-field2">
        <p className="names-para">
          Pick Days of Classes <span>*</span>
          <br />
          <p className="warning gender mar">{error.day}</p>
        </p>
        <div className="check-bb">
          <div className="check-inner">
            <input
              type="checkbox"
              name="day"
              value="MonDay"
              onChange={handelAllValues}
            />
            <label className="days">MonDay</label>
          </div>
          <div className="check-inner">
            <input
              type="checkbox"
              name="day"
              value="TuesDay"
              onChange={handelAllValues}
            />
            <label className="days">Tuesday</label>
          </div>
          <div className="check-inner">
            <input
              type="checkbox"
              name="day"
              value="WednesDay"
              onChange={handelAllValues}
            />
            <label className="days">Wednesday</label>
          </div>
          <div className="check-inner">
            <input
              type="checkbox"
              name="day"
              value="ThurDay"
              onChange={handelAllValues}
            />
            <label className="days">Thurday</label>
          </div>
          <div className="check-inner">
            <input
              type="checkbox"
              name="day"
              value="FriDay"
              onChange={handelAllValues}
            />
            <label className="days">Friday</label>
          </div>
          <div className="check-inner">
            <input
              type="checkbox"
              name="day"
              value="SaturDay"
              onChange={handelAllValues}
            />
            <label className="days">Saturday</label>
          </div>
        </div>
      </div>
      {/* <p className="warning gender">{error.day}</p> */}
      <div className="name-field">
        <p className="names-para">
          Class Starting Date <span>*</span>
        </p>
        <input
          className={`date-year ${dateAnd} `}
          type="date"
          name="dateAndYear"
          onChange={handelAllValues}
        />
        <div className="inner-name2">
          <select onChange={handelAllValues} name="timing" className={time}>
            <option disabled selected hidden>
              Select Class timing
            </option>
            <option>10:00 - 11:00</option>
            <option>11.30 - 12.30</option>
            <option>2:00 - 3:00</option>
            <option>4:30 - 5:30</option>
            <option>6:00 - 7:10</option>
            <option>7:35 - 8:30</option>
            <option>8:40 - 10</option>
          </select>
          <p className="warning">{error.timing}</p>
        </div>
      </div>
      <p className="warning gender">{error.dateAndYear}</p>
      <div className="text-area">
        <p>Comments</p>
        <textarea className="text-aa" cols="80%" rows="7"></textarea>
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
