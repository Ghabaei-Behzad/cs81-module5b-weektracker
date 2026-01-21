
// Behzad Ghabaei
// CS81 - java script
// Assignment 5B - activityTracker.js
// Instructor Seno
// 1/20/2026

/**
 * activityTracker.js
 * An array of objects representing daily activities for a full week.
 * PREDICTIONS (Comments)
 * HIGHEST ENJOYMENT: 
 * The "Hiking" activity on Thursday has the highest enjoyment rating (10/10). 
 * Being outdoors and physically active seems to yield the maximum satisfaction.
 * DOMINANT CATEGORY: 
 * The "physical" category dominates the week in terms of frequency (3 out of 7 days). 
 * However, if looking at total volume of time, "social" activities are significant 
 * competitors due to the long duration of Saturday's board game night.
 * TIME OF DAY PATTERNS: 
 * There is a clear structure to the day:
 * Mornings are dedicated to "physical" health (Gym, Hiking, Yoga).
 * Afternoons are reserved for "creative" work (Painting, Digital Illustration).
 * Evenings are strictly "social" (Coffee, Board Games), suggesting a 
 * pattern of winding down the day with community and interaction.
 */
const myWeek = [
  { day: "Monday", activity: "Gym Workout", category: "physical", hoursSpent: 1.5, enjoyment: 7, timeOfDay: "morning"  },
  { day: "Tuesday", activity: "Oil Painting", category: "creative",  hoursSpent: 2, enjoyment: 9,  timeOfDay: "afternoon"  },
  { day: "Wednesday", activity: "Coffee with Friends", category: "social",hoursSpent: 1,  enjoyment: 8,  timeOfDay: "evening"  },
  { day: "Thursday", activity: "Hiking", category: "physical", hoursSpent: 3, enjoyment: 10,  timeOfDay: "morning"  },
  { day: "Friday", activity: "Digital Illustration", category: "creative", hoursSpent: 2.5, enjoyment: 9,  timeOfDay: "afternoon" },
  { day: "Saturday", activity: "Board Game Night", category: "social", hoursSpent: 4, enjoyment: 9, timeOfDay: "evening" },
  { day: "Sunday", activity: "Yoga", category: "physical",  hoursSpent: 1, enjoyment: 8,  timeOfDay: "morning"  }
];
/**
 * Calculates the total hours spent on a specific category of activity ( physical ).
 * Uses .filter() to select relevant entries and .reduce() to sum their hours.
 */
function totalHoursForCategory(log, categoryName) {
  return log
    // Filter down to only the relevant category
    .filter(entry => entry.category === categoryName)
    // Sum up the hoursSpent for all filtered entries
    .reduce((sum, entry) => sum + entry.hoursSpent, 0);
}

/**
 * Finds activities that have an enjoyment rating of 8 or higher but lasted less than 2 hours.
 * Uses .filter() with multiple conditions to identify efficient sources of joy.
 */
function lowHoursHighEnjoymentDays(log, minEnjoyment = 8, maxHours = 2) {
  return log
    .filter(entry => entry.enjoyment >= minEnjoyment && entry.hoursSpent < maxHours)
    .map(entry => entry.day); // Extracts only the 'day' property
}
const efficientDays = lowHoursHighEnjoymentDays(myWeek);

/**
 * Calculates the average enjoyment score for activities that occurred during a specific time of day.
 * Uses .filter() to isolate entries, .map() to extract enjoyment scores, and .reduce() to average them.
 */
function averageEnjoymentByTime(log, time) {
  const matchingEntries = log.filter(entry => entry.timeOfDay === time);
  const totalEnjoyment = matchingEntries.reduce((sum, entry) => sum + entry.enjoyment, 0);
  // Return the average (total divided by count), handling potential division by zero
  return matchingEntries.length > 0 ? totalEnjoyment / matchingEntries.length : 0;
}
/**
 * A higher-order function that accepts a "callback" function as an input.
 * This allows us to pass in any custom logic (condition) at the moment we call it.
 * parameter {Function} testFn - A function that returns true or false for each activity.
 * returns {Array} - The filtered array of activities.
 */ 
function filterByCondition(testFn) {
  // We use the built-in .filter() method and pass it the logic provided via testFn
  return myWeek.filter(testFn);
}
const shortAndSweet = filterByCondition(act => act.hoursSpent <= 1 && act.enjoyment >= 8);

//printing statements
console.log("Analyzing My Weekly Activities...");
console.log("-------------------------------------------------------");

// 1. Total hours (using our previous totalHoursForCategory function)
console.log(`Total hours spent on physical activity: ${totalHoursForCategory(myWeek, 'physical')}`);

// 2. Average enjoyment (using our previous averageEnjoymentByTime function)
console.log(`Average enjoyment for morning activities: ${averageEnjoymentByTime(myWeek, 'morning').toFixed(2)} / 10`);

//3. Tell the days with Low Hours and HighEnjoyment
console.log("Low Hours High Enjoyment (Display Days only):", efficientDays);

// 4. Low-effort (short time), high-enjoyment
console.log("Low-effort, high-enjoyment activities:");
shortAndSweet.forEach(act => console.log(`- ${act.activity} (${act.hoursSpent} hours, Enjoyment: ${act.enjoyment})`));

console.log("\nReflection:");
console.log("Even though I thought I'd enjoy social events most, solo activities like \nHiking and Painting were consistently higher-rated. Writing a reusable \nfilterByCondition function helped me isolate patterns I didn’t expect.");







