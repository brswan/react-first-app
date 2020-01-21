import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
// import SelectInput from "./common/SelectInput";

function CourseForm(props) {
  // const options = [
  //   {
  //     value: 0,
  //     name: ""
  //   },
  //   {
  //     value: 1,
  //     name: "Cory House"
  //   },
  //   {
  //     value: 2,
  //     name: "Scott Allen"
  //   }
  // ];

  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        onChange={props.onChange}
        value={props.course.title}
        error={props.errors.title}
      />

      {/* <SelectInput
        id="author"
        name="author"
        label="Author"
        onChange={props.onChange}
        value={props.course.authorId}
        options={options}
      /> */}

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <TextInput
        id="category"
        name="category"
        label="Category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default CourseForm;
