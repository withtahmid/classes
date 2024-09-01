import { useState } from "react";

export default function Status({ startTime, endTime }){
    const now = new Date();
    now.setHours(0, 0, 0, 0)
    let badge = "";
    let text = "";
    const dayGap = Math.floor((startTime - now) / (1000 * 60 * 60 * 24 ));
    const dayName = startTime.toLocaleDateString('en-US', { weekday: 'long' });
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
                {dayName}
            </div>
        )
    }
}