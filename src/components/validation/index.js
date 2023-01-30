const validation = (values) => {
  let error = {};
  if (!values.firstname) {
    error.firstname = "first name is required";
    error.firstError = "first-error";
  } else if (/\d/.test(values.firstname)) {
    error.firstname = "first name is invalid";
    error.firstError = "first-error";
  }

  if (!values.lastname) {
    error.lastname = "last name is required";
    error.lastError = "first-error";
  } else if (/\d/.test(values.lastname)) {
    error.lastname = "last name is invalid";
    error.lastError = "first-error";
  }
  if (!values.date) {
    error.date = "date is required";
    error.dateError = "first-error";
  }
  if (!values.month) {
    error.month = "month is required";
    error.monthError = "first-error";
  }
  if (!values.year) {
    error.year = "year is required";
    error.yearError = "first-error";
  }
  if (!values.gender) {
    error.gender = "gender is required";
  }

  if (!values.instrument) {
    error.instrument = "instrument is required";
    error.instrumentError = "first-error";
  }

  if (!values.day) {
    error.day = "pick of any date";
  }

  if (!values.dateAndYear) {
    error.dateAndYear = "classes date not empty";
    error.dateAndYearError = "first-error";
  }
  if (!values.timing) {
    error.timing = "timing should be selected";
    error.timingError = "first-error";
  }

  return error;
};

export default validation;
