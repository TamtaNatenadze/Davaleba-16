function timeFormat() {
  let time12Hour = prompt("შეიყვანეთ დრო (სთ:წთ):");
  let format = prompt("შეიყვანეთ PM ან AM:");
  let timeParts = time12Hour.split(':');
  if (timeParts.length !== 2 || isNaN(timeParts[0]) || isNaN(timeParts[1])) {
      alert("შეიყვანეთ დრო ფორმატით - HH:MM.");
      return;
  }
  let hours = Number(timeParts[0]);
  let minutes = Number(timeParts[1]);
  if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
      alert("შეიყვანეთ საათის მაჩვენებელი 1-დან 12-ის ჩათვლით და წუთების - 0-დან 60-მდე");
      return;
  }
  if (format === "AM") {
      if (hours === 12) {
          hours = 0; 
      }
  } else if (format === "PM") {
      if (hours !== 12) {
          hours += 12; 
      }
  } else {
      alert("შეიყვანეთ PM ან AM.");
      return;
  }
  let formattedHours = hours.toString().padStart(2, '0');
  let formattedMinutes = minutes.toString().padStart(2, '0');
  alert(`${formattedHours}:${formattedMinutes}`);
}
timeFormat();
