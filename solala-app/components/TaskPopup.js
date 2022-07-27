import React from "react";
import AddCalendarPopup from "./CalendarPopup";

const TaskPopup = (props) => {
    return (
        <AddCalendarPopup
            isModalVisible={props.isModalVisible}
            type={"Task" }
            displayRepeat={true}
            displayPriority={true}
            displayCategory={true}
            displayComplexity={true}
            displayNotes={true}
        />
    );

}

export default TaskPopup;