import { useState } from "react";

export default function Status({ startTime, endTime }){
    const now = new Date();
    let badge = "";
    let text = "";
    const dayGap = startTime.getDate() - now.getDate();
    if(startTime > endTime){
        badge = "error";
        text = "Running";
    }else if(dayGap == 0){
        badge = "success",
        text = "Today";
    }else if(dayGap == 1){
        badge = "warning",
        text = "Tomorrow";
    }else{
        badge = "primary";
        text = `In ${dayGap} days`;
    }
    return (
        <div className={`badge badge-${badge}`}>
            {text}
        </div>
    )
    
       
}