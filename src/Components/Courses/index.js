import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setCourses } from "../../store/action-creators/courses";
import Course from "../Course";

class index extends Component {
  renderCourses = () =>
    this.props.courses.map((course) => <Course {...course} />);

  componentDidMount() {
    axios
      .get("http://localhost:3000/courses")
      .then((res) => this.props.setCourses(res.data));
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
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
