import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";   c

function Menus() {
    return (
        <div>
            <ListGroup>
                <ListGroupItem>
                    <NavLink to="/" >Home</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink to="/allCourses" >All Courses</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink to="/myForm" >My Form</NavLink>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default Menus;
