// Define max data for alert
let maxDate = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);

// Formatting date
let dd = maxDate.getDate();
let mm = maxDate.getMonth() + 1;
let y = maxDate.getFullYear();

export let maxDateFormatted = `${y}-${mm < 10 ? "0" + mm : mm}-${
  dd < 10 ? "0" + dd : dd
}`;
