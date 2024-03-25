import React from "react";
import {MdDelete, MdEdit} from "react-icons/md";
import Table from "../../components/Table/Table";

function Venues() {
    return (
        <div
            className={"col-md-12"}
            style={{
                backgroundColor: "#fff",
                display: "inline-block",
                padding: "20px",
                borderRadius: "10px"
            }}
        >
            <div className="row d-inline-block">
                {/* title in the left and button in the right side */}
                <h1>Venues</h1>
                <button className={"btn btn-primary"}>Add Venue</button>
            </div>
            <p>View and manage venues</p>
            <Table data={[["1", "John Doe", <img src={"https://i.pravatar.cc/40"}  style={{ borderRadius: "50%"}} />, "john.doe@gmail.com", "Admin", "Active", <span>
                <button className={"btn btn-warning text-white my-1 mx-2"}><MdEdit/></button>
                <button className={"btn btn-danger mx-2 my-1"}><MdDelete/></button>
            </span>]]} columns={["#", "Name", "Profile pic", "Email", "Role", "Status", "Action"]}/>
        </div>
    );
}

export default Venues;