let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 18;

if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly === true) {
  console.log("RaceNumber: " + raceNumber + " You will race at 9:30 am");
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log("RaceNumber: " + raceNumber + " You will race at 11:00 am");
} else if (runnerAge < 18) {
  console.log("RaceNumber: " + raceNumber + " You will race at 12:30 pm")
} else {
  console.log("Please go see the registration desk")
};
