import Status from "./Status";
export default function Card({ course }){
    return (
        <div className="card card-side bg-base-300 shadow-xl">
            <div className="card-body flex flex-col">
                <div className="flex items-center justify-center">
                    <div className="flex-1 font-bold text-2xl m-0">{course.code}.{course.section}</div>
                    <Status startTime = {course.startTime} endTime = {course.endTime}/>
                </div>
                <div>{course.course}</div>
                <div className="flex content-between gap-3">    
                    <div>{course.faculty}</div>
                    <div> | </div>
                    {
                        course.room.startsWith("SAC") ? 
                        <div className="font-bold p-3 badge text-accent"> {course.room}</div> : 
                        course.room.startsWith("NAC") ?
                        <div className="font-bold p-3 badge text-secondary"> {course.room}</div> : 
                        <div className="font-bold p-3 badge text-primary"> {course.room}</div> 

                    }
                    
                </div>
                <div className="flex content-between gap-3 font-mono text-lg">
                    <div className="text-lg">{course.time} {course.classDay}</div>
                </div>
            </div>
        </div>
    );
}