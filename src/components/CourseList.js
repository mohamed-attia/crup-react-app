import React, { Component } from "react";
class CourseList extends Component {

    state  = {
        isEdit:false
    }

    renderCourses = ()=>{
        return (
          <li>
            <span>{this.props.details.name}</span>
            <button onClick={()=> {this.props.deleteCourse(this.props.index)}}>Delete</button>
            <button onClick={()=> {this.toggleState(this.props.index)}}>Edit</button>
          </li>
        )
    }

    //toggel state
    toggleState = ()=>{
        let {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        })
    }

    updateCourseItem = (e)=>{
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value );
        this.toggleState()
    }

    // render form update
    renderUpdateForm = ()=>{
        return(
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v)=> {this.input = v}} defaultValue={this.props.details.name}/>
                <button>Update Course</button>
            </form>
        )
    }

  render() {
    let {isEdit} = this.state;
    return(
    <React.Fragment>
        {isEdit ? this.renderUpdateForm() : this.renderCourses()}
    </React.Fragment>)
  }
}

export default CourseList;
