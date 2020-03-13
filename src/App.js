import React, { Component } from "react";
import CourseForm from './components/Courseform';
import CourseList from './components/CourseList';
class App extends Component {
  state = {
    courses:[
      {name:"HTML"},
      {name:"CSS"},
      {name:"JQuery"},
    ],
    current:'',
    emptycourse:''
  }

  updatecourse = (e)=>{
    this.setState({
      current: e.target.value
    })
  }

  deleteCourse = (index)=>{
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }

  editCourse = (index, value)=>{
    let {courses} = this.state;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

  addCourse = (e)=>{
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    debugger
    if(current) {
      courses.push({name:current});
      this.setState({
        courses,
        current:'',
        emptycourse: ''
      })
    }else {
      this.setState({
        emptycourse: 'Please Enter Course Name'
      })
    }
  }
  render() {
    const {courses} = this.state;
    const courseList = courses.map((course, index)=>{
      return <CourseList editCourse={this.editCourse} deleteCourse={this.deleteCourse} index={index} details = {course} key={index}/>
    })
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm emptycourse = {this.state.emptycourse} updatecourse = {this.updatecourse} current={this.state.current} addCourse = {this.addCourse} />
        <h3>{courses.length > 0 ? '': 'No Courses'}</h3>
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
