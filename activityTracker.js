
// Behzad Ghabaei
// CS81 - java script
// Assignment 5B - activityTracker.js
// Instructor Seno
// 1/20/2026

/**
 * activityTracker.js
 * An array of objects representing daily activities for a full week.
 */

const myWeek = [
  { 
    day: "Monday", 
    activity: "Gym Workout", 
    category: "physical", 
    hoursSpent: 1.5, 
    enjoyment: 7, 
    timeOfDay: "morning" 
  },
  { 
    day: "Tuesday", 
    activity: "Oil Painting", 
    category: "creative", 
    hoursSpent: 2, 
    enjoyment: 9, 
    timeOfDay: "afternoon" 
  },
  { 
    day: "Wednesday", 
    activity: "Coffee with Friends", 
    category: "social", 
    hoursSpent: 1, 
    enjoyment: 8, 
    timeOfDay: "evening" 
  },
  { 
    day: "Thursday", 
    activity: "Hiking", 
    category: "physical", 
    hoursSpent: 3, 
    enjoyment: 10, 
    timeOfDay: "morning" 
  },
  { 
    day: "Friday", 
    activity: "Digital Illustration", 
    category: "creative", 
    hoursSpent: 2.5, 
    enjoyment: 9, 
    timeOfDay: "afternoon" 
  },
  { 
    day: "Saturday", 
    activity: "Board Game Night", 
    category: "social", 
    hoursSpent: 4, 
    enjoyment: 9, 
    timeOfDay: "evening" 
  },
  { 
    day: "Sunday", 
    activity: "Yoga", 
    category: "physical", 
    hoursSpent: 1, 
    enjoyment: 8, 
    timeOfDay: "morning" 
  }
];

/* 
  DATA ANALYSIS COMMENTS:

  1. HIGHEST ENJOYMENT: 
     The "Hiking" activity on Thursday has the highest enjoyment rating (10/10). 
     Being outdoors and physically active seems to yield the maximum satisfaction.

  2. DOMINANT CATEGORY: 
     The "physical" category dominates the week in terms of frequency (3 out of 7 days). 
     However, if looking at total volume of time, "social" activities are significant 
     competitors due to the long duration of Saturday's board game night.

  3. TIME OF DAY PATTERNS: 
     There is a clear structure to the day:
     - Mornings are dedicated to "physical" health (Gym, Hiking, Yoga).
     - Afternoons are reserved for "creative" work (Painting, Illustration).
     - Evenings are strictly "social" (Coffee, Board Games), suggesting a 
       pattern of winding down the day with community and interaction.
*/

console.log("Activity log for the week of Jan 20, 2026, successfully loaded.");
