/**
 * @description Today date
 */
export default function addedDateFunction() {
  // Define dates elements for input with date
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // Set 0 before day if length of this element is 1
  if (day.toString().length === 1) {
    day = "0" + day;
  }

  // Set 0 before month if length of this element is 1
  if (month.toString().length === 1) {
    month = "0" + month;
  }

  // Define date for today
  let todayDate =
    year.toString() + "-" + month.toString() + "-" + day.toString();

  return todayDate;
}
