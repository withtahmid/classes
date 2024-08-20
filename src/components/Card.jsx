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
                    <div>|</div>
                    <div className="font-bold"> {course.room}</div>
                </div>
                <div className="flex content-between gap-3 font-mono text-lg">
                    <div className="text-lg">{course.time} {course.classDay}</div>
                </div>
            </div>
        </div>
    );
}