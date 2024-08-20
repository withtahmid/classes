import { useState } from "react";

export default function Status({ startTime, endTime }){
    const now = new Date();
    let badge = "";
    let text = "";
    const dayGap = startTime.getDate() - now.getDate();
    if(startTime > endTime){
        return (
            <div className = "badge badge-error">
                Running
            </div>
        )
    }else if(dayGap == 0){
        return (
            <div className = "badge badge-success">
                Today
            </div>
        )
    }else if(dayGap == 1){
        return (
            <div className = "badge badge-warning">
                Tomorrow
            </div>
        )
    }else{
        return (
            <div className = "badge badge-primary">
                In {dayGap} days
            </div>
        )
   
    }
       
}