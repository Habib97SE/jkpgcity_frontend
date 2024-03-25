import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import {MdDelete, MdEdit} from "react-icons/md";
import Table from "../../components/Table/Table";

function Users() {
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
            <div className="row d-flex ">
                <h1>Users</h1>
                <a href={"/admin/users/new"} className={"btn btn-primary"}>Add User</a>
            </div>
            <p>View and manage users</p>
            <Table data={[["1", "John Doe", <img src={"https://i.pravatar.cc/40"}  style={{ borderRadius: "50%"}} />, "john.doe@gmail.com", "Admin", "Active",
                <span>
                    <button className={"btn btn-warning text-white mx-2"}><MdEdit/></button>
                    <button className={"btn btn-danger"}><MdDelete/></button>
                </span>]]} columns={["#", "Name", "Profile pic", "Email", "Role", "Status", "Action"]}/>
            <Pagination totalPages={10}/>
        </div>
    );
}
export default Users;