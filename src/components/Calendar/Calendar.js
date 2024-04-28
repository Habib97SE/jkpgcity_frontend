import React, { useState, useEffect } from "react";
import Square from "./Square";
import CustomDate from "../../utils/CustomDate";
import { FaPlusCircle } from "react-icons/fa";
import Today from "./Today";




const weekDayTitlesStyle = {
    textAlign: "center",
    backgroundColor: "black",
    borderRadius: "10px",
    padding: "15px 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#fff"
}

function Calendar({ year, month }) {
    month = parseInt(month);
    const [days, setDays] = useState([]);

    const calculateOffset = (year, month) => {
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        // Adjusting since getDay() returns 0 for Sunday. We want 0 for Monday instead.
        const offset = (firstDayOfMonth + 6) % 7; // This makes Monday (1) become 0 and Sunday (0) become 6
        return offset;
    };

    useEffect(() => {
        const offset = calculateOffset(year, month);
        const daysWithOffset = Array(offset).fill(null); // Create an array of nulls for empty cells
        const monthDays = CustomDate.getDaysInMonth(month, year);

        setDays([...daysWithOffset, ...monthDays]);
    }, [year, month]);


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
            }}
        >
            <div className="container">
                <div className={"row p-3 d-flex justify-content-between"}>
                    <div className={"col-6"}>
                        <h1>{CustomDate.getMonthName(month)} {year}</h1>
                        <p>
                            To add a new todo, click on a day and then click the{" "}<FaPlusCircle color={"green"}
                                size={20} /> icon.
                        </p>
                    </div>
                    <div className="col-6">
                        <Today year={2024} month={4} day={1} />
                    </div>
                </div>
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "5px",
                padding: "5px"
            }}>
                <div style={weekDayTitlesStyle}>Monday</div>
                <div style={weekDayTitlesStyle}>Tuesday</div>
                <div style={weekDayTitlesStyle}>Wednesday</div>
                <div style={weekDayTitlesStyle}>Thursday</div>
                <div style={weekDayTitlesStyle}>Friday</div>
                <div style={weekDayTitlesStyle}>Saturday</div>
                <div style={weekDayTitlesStyle}>Sunday</div>

                {days.map((day, index) => (
                    day ? (
                        <Square key={index} year={year} month={month} day={day.getDate()} size={150} color={"lightgreen"}>
                            {day.getDate()}
                        </Square>
                    ) : (
                        // Render an empty cell or a placeholder
                        <div key={index} style={{ width: 150, height: 150 }}></div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Calendar;