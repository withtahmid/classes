const days = Object.freeze({
    S: 0,
    M: 1,
    T: 2,
    W: 3,
    R: 4,
    F: 5,
    A: 6, 
});

export const classDays  = Object.freeze({
    ST: [ days.S, days.T ],
    MW: [ days.M, days.W ],
    RA: [ days.R, days.A ],
    S:  [ days.S ],
    M:  [ days.M ],
    T:  [ days.T ],
    W:  [ days.W ],
    R:  [ days.R ],
    F:  [ days.F ],
    A:  [ days.A ],
}) 


const courses =  [
    {
        course: "Biology I Lab",
        code: "BIO103L", 
        section: 3,
        faculty: "KMRh",
        room: "SAC415",
        time: "09:25 AM - 12:05 PM",
        classDay: "W"
    },
    {
        course: "General Chemistry Lab",
        code: "CHE101L",
        section: 27,
        faculty: "KNH",
        room: "SAC409",
        time: "12:15 PM - 02:55 PM",
        classDay: "R"
    },
    // {
    //     course: "Intern/Co-Op",
    //     code: "CSE498R",
    //     section: 3,
    //     faculty: "TBA",
    //     room: null,
    //     time: null,
    //     classDay: null,
    // },
    {
        course: "Senior Design Project",
        code: "CSE499B",
        section: 7,
        faculty: "SfM1",
        room: "LIB608",
        time: "10:50 AM - 12:05 PM",
        classDay: "M"
    },
    {
      course: "Engineering Drawing",
      code: "EEE154",
      section: 4,
      faculty: "MSRH",
      room: "LIB608",
      time: "01:40 PM - 02:55 PM",
      classDay: "A"
    },
    {
      course: "Public Speaking",
      code: "ENG111",
      section: 18,
      faculty: "KHU",
      room: "NAC411",
      time: "03:05 PM - 04:20 PM",
      classDay: "RA"
    },
    {
      course: "Engineering Mathematics",
      code: "MAT350",
      section: 8,
      faculty: "PNg",
      room: "SAC209",
      time: "10:50 AM - 12:05 PM",
      classDay: "ST"
    },
    {
      course: "Physics I Lab",
      code: "PHY107L",
      section: 2,
      faculty: "RUH",
      room: "SAC510",
      time: "01:40 PM - 04:20 PM",
      classDay: "T"
    },
    {
      course: "General Physics II Lab",
      code: "PHY108L",
      section: 1,
      faculty: "ZUM",
      room: "SAC512",
      time: "01:40 PM - 04:20 PM",
      classDay: "S"
    }
] 

export default courses;


// Testing chatGPT

// const classes = [
//     { name: "Math", days: "MW", time: "09:00 - 10:30" },
//     { name: "History", days: "T", time: "11:00 - 12:30" },
//     { name: "Science", days: "ST", time: "13:00 - 14:30" },
//     // Add more classes as needed
//   ];
  
//   const now = new Date();
//   const currentDay = now.getDay(); // 0 for Sunday, 1 for Monday, etc.
//   const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes


// function timeStringToMinutes(timeString) {
//     const [start, end] = timeString.split(' - ');
//     const [startHour, startMinute] = start.split(':').map(Number);
//     return startHour * 60 + startMinute;
//   }
  
//   function getClassDetails(classInfo, currentDay, currentTime) {
//     const dayMap = { S: 0, M: 1, T: 2, W: 3, R: 4, A: 5, ST: 6 };
//     let days = classInfo.days.split('');
    
//     let classTimes = days.map(day => {
//       let dayIndex = dayMap[day];
//       return {
//         dayIndex,
//         startMinutes: timeStringToMinutes(classInfo.time),
//         endMinutes: timeStringToMinutes(classInfo.time.split(' - ')[1])
//       };
//     });
  
//     return classTimes;
//   }
  
//   function getSortedClasses(classes, currentDay, currentTime) {
//     return classes.map(classInfo => {
//       const classDetails = getClassDetails(classInfo, currentDay, currentTime);
      
//       // Calculate the next upcoming time based on current time
//       let nextClass = classDetails.find(detail => {
//         return detail.dayIndex >= currentDay && detail.startMinutes > currentTime;
//       });
  
//       if (!nextClass) {
//         // If no class today or this week, find the earliest next week
//         nextClass = classDetails.reduce((prev, curr) => {
//           if (curr.dayIndex < currentDay || (curr.dayIndex === currentDay && curr.startMinutes <= currentTime)) {
//             return curr;
//           }
//           return prev;
//         });
//       }
  
//       return {
//         classInfo,
//         timeUntilClass: (nextClass.dayIndex - currentDay) * 1440 + (nextClass.startMinutes - currentTime)
//       };
//     }).sort((a, b) => a.timeUntilClass - b.timeUntilClass);
//   }
  
//   const sortedClasses = getSortedClasses(classes, currentDay, currentTime);
//   console.log(sortedClasses);
  
// /*
// I am making a project in JavaScript to maintain my university class routines. the classes are arranges in different days of the week, some classes happen in two days (ST,  MW, RA) some classes happen in one day of the week (S, M, T, W, R, A). 
// classes do not have conflicting time.  class times are given like "12:15 - 02:55" format
// I want to sort the classes object array in order to have the nearest class in the beginning by day and time from current date and current time, 
// for example if today is ST(sunday) day and I have class at 9-10 and second class at 11-12
// If I  load the app at 8 it will show the class at 9 in first, then the class at 11 and so on for the rest of the week 
// If I load the app between the class time it will show the class is running and next classes are sorted
// If I load the app at 10:30 it will show next class at 11 and the class was at 9 will be considered on T(Tuesday) and will be sorted accorningly
// */ 