import React, { Component } from "react";
import { connect } from "react-redux";
import Course from "../Course";

class index extends Component {
  renderCourses = () =>
    this.props.courses.map((course) => <Course {...course} />);

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <div className="courses-container">{this.renderCourses()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses.courses,
});

export default connect(mapStateToProps)(index);
