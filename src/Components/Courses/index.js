import React, { Component } from "react";
import { connect } from "react-redux";
import { setCourses, getCourses } from "../../store/action-creators/courses";
import Course from "../Course";

class index extends Component {
  renderCourses = () =>
    this.props.courses.map((course) => <Course {...course} />);

  componentDidMount() {
    this.props.getCourses();
  }

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

const mapDispatchToProps = {
  setCourses,
  getCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
