import React from "react";

const CourseForm = (props) => {
  return (
      <form onSubmit={props.addCourse}>
          <input type="text" value={props.current} onChange={props.updatecourse}/>
          <button type="submit" >Add Course</button>
          <span>{props.emptycourse}</span>
      </form>
  );
};

export default CourseForm;
