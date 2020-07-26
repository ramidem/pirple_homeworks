// Switch Statements
// HOMEWORK #5

const labelsSingular = ["second", "minute", "hour", "day"];
const labelsPlural = ["seconds", "minutes", "hours", "days"];
let labels = labelsSingular.concat(...labelsPlural);

// get units
// -- singular
let second = labelsSingular[0];
let minute = labelsSingular[1];
let hour = labelsSingular[2];
let day = labelsSingular[3];

// -- plural
let seconds = labelsPlural[0];
let minutes = labelsPlural[1];
let hours = labelsPlural[2];
let days = labelsPlural[3];

let timeAdder = (v1, l1, v2, l2) => {
  // make sure v1 and v2 are numbers
  if (!isNaN(v1) && !isNaN(v2)) {
    // number should be greater than or equal to zero
    if (Number(v1) >= 0 && Number(v2) >= 0) {
      if (
        // labels should be lowercase and included in labels array
        labels.indexOf(l1.toLowerCase()) >= 0 &&
        labels.indexOf(l2.toLowerCase()) >= 0
      ) {
        // if `v1` or `v2` are either > 1 or zero, match with plural label
        // else, match with singular
        if (checkLabels(v1, l1) && checkLabels(v2, l2)) {
          // initiate outputs
          let v3 = Number(v1);
          let l3 = "";

          // make sure `v2` is a number
          let val2 = Number(v2);

          switch (l1) {
            case second:
            case seconds:
              if (l2 === second || l2 === seconds) {
                v3 += val2;
                l3 = label(v3, seconds, second);
              } else if (l2 === minute || l2 === minutes) {
                v3 = minsToSec(val2, v3); // (minutes, seconds)
                l3 = label(v3, seconds, second);
              } else if (l2 === hour || l2 === hours) {
                v3 = hrToSec(val2, v3); // (hours, seconds)
                l3 = label(v3, seconds, second);
              } else if (l2 === day || l2 === days) {
                v3 = dayToSec(val2, v3);
                l3 = label(v3, seconds, second);
              }
              break;
            case minute:
            case minutes:
              if (l2 === second || l2 === seconds) {
                v3 = minsToSec(v3, val2);
                l3 = label(v3, seconds, second);
              } else if (l2 === minute || l2 === minutes) {
                v3 += val2;
                l3 = label(v3, minutes, minute);
              } else if (l2 === hour || l2 === hours) {
                v3 = hrToMin(val2, v3);
                l3 = label(v3, minutes, minute);
              } else if (l2 === day || l2 === days) {
                v3 = dayToMin(val2, v3);
                l3 = label(v3, minutes, minute);
              }
              break;
            case hour:
            case hours:
              if (l2 === second || l2 === seconds) {
                v3 = hrToSec(v3, val2);
                l3 = label(v3, seconds, second);
              } else if (l2 === minute || l2 === minutes) {
                v3 = hrToMin(v3, val2);
                l3 = label(v3, minutes, minute);
              } else if (l2 === hour || l2 === hours) {
                v3 += val2;
                l3 = label(v3, hours, hour);
              } else if (l2 === day || l2 === days) {
                v3 = dayToHr(val2, v3);
                l3 = label(v3, hours, hour);
              }
              break;
            case day:
            case days:
              if (l2 === second || l2 === seconds) {
                v3 = dayToSec(v3, val2);
                l3 = label(v3, seconds, second);
              } else if (l2 === minute || l2 === minutes) {
                v3 = dayToMin(v3, val2);
                l3 = label(v3, minutes, minute);
              } else if (l2 === hour || l2 === hours) {
                v3 = dayToHr(v3, val2);
                l3 = label(v3, hours, hour);
              } else if (l2 === day || l2 === days) {
                v3 += val2;
                l3 = label(v3, days, day);
              }
              break;
          }

          return [Math.round(v3), l3];
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// minutes to seconds
let minsToSec = (min, sec) => (sec += min / 0.016667);

// hours to seconds
let hrToSec = (hr, sec) => (sec += hr / 0.00027778);

// hours to minutes
let hrToMin = (hr, min) => (min += hr * 60.0);

// days to seconds
let dayToSec = (day, sec) => (sec += day / 0.000011574);

// days to minutes
let dayToMin = (day, min) => (min += day * 1440);

// days to hours
let dayToHr = (day, hr) => (hr += day * 24);

let label = (time, unitA, unitB) => {
  // unitA is plural form
  // unitB is singular form
  time > 1 || time == 0 ? (unitOutput = unitA) : (unitOutput = unitB);
  return unitOutput;
};

let checkLabels = (value, label) => {
  if (value == 1 && labelsSingular.indexOf(label) >= 0) {
    return true;
  } else if (value > 1 && labelsPlural.indexOf(label) >= 0) {
    return true;
  } else if (value == 0 && labelsPlural.indexOf(label) >= 0) {
    return true;
  } else {
    return false;
  }
};

// seconds - seconds
console.log(timeAdder(31, "seconds", 10, "seconds"));

// seconds - minutes
console.log(timeAdder(31, "seconds", 10, "minutes"));

// seconds - hours
console.log(timeAdder(31, "seconds", 1, "hour"));

// seconds - days
console.log(timeAdder(31, "seconds", 0, "days"));

// minutes - seconds
console.log(timeAdder(1, "minute", 0, "seconds"));

// minutes - minutes
console.log(timeAdder(1, "minute", 10, "minutes"));

// minutes - hours
console.log(timeAdder(1, "minute", 10, "hours"));

// minutes - days
console.log(timeAdder(1, "minute", 10, "days"));

// hours - seconds
console.log(timeAdder(1, "hour", 10, "seconds"));

// hours - minutes
console.log(timeAdder(1, "hour", 10, "minutes"));

// hours - hours
console.log(timeAdder("1", "hour", 10, "hours"));

// hours - days
console.log(timeAdder("1", "hour", 10, "hours"));

// days - seconds
console.log(timeAdder(1, "day", 10, "seconds"));

// days - minutes
console.log(timeAdder(1, "day", 10, "minutes"));

// days - hours
console.log(timeAdder("1", "day", 10, "hours"));

// days - days
console.log(timeAdder("1", "day", 10, "hours"));
