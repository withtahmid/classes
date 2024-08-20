import courses, { classDays } from "./data";

function getTime(currentDate, day, hour, minute, period){
    
    const time = new Date(currentDate);
    time.setHours(period === "PM" && hour !== "12" ? +hour + 12 : +hour, +minute, 0, 0);
    const dayDiff = ((day - currentDate.getDay()) + 7) % 7;
    time.setDate(currentDate.getDate() + dayDiff);
    if (time < currentDate) {
        time.setDate(time.getDate() + 7);
    }
    return time;
}

export function getSortedClasses(){
    const currentDate = new Date();  
    const courseList = courses;
    courseList.forEach(course => {
        const [ timeStart, timeEnd ] = course.time.split(" - ");
        const [ startHour, startMinute ] = timeStart.split(/[: ]/);
        const [ endHour, endMinute ] = timeEnd.split(/[: ]/);
        const startPeriod = timeStart.slice( -2 );
        const endPeriod = timeEnd.slice( -2 );
        
        let closestTimeGap = Infinity;
        let closestStartTime;
        let closestEndTime;
        
        course.running = false;

        classDays[course.classDay].forEach( day => {
            const startTime = getTime(currentDate, day, startHour, startMinute, startPeriod);
            const endTime = getTime(currentDate, day, endHour,endMinute, endPeriod);
            const startTimeGap = startTime - currentDate;
            const endTimeGap = endTime - currentDate;
            if(endTimeGap < closestTimeGap){
                closestTimeGap = endTimeGap;
                closestStartTime = startTime;
                closestEndTime = endTime;
            }
        });

        course.startTime = closestStartTime;
        course.endTime = closestEndTime;
    });
    courseList.sort((a, b) => a.endTime - b.endTime);
    return courseList;
} 