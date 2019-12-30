import React, { useState } from "react";

const FormGroup = props => <div className="form-group mx-2" {...props} />;
const Label = props => <label className="mx-2" {...props} />;

const Form = ({inputs, onChange, onSubmit}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="form-inline p-2 justify-content-center"
    >
      <FormGroup>
        <Label htmlFor="method">Make a </Label>
        <select
          className="form-control"
          name={"method"}
          onChange={onChange}
        >
          <option value="">choose...</option>
          <option value="GET">GET</option>
          <option value="PUT">PUT</option>
          <option value="POST">POST</option>
          <option value="DEL">DELETE</option>
        </select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="url">request to</Label>
        <input
          name="url"
          type="url"
          className="form-control"
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup>
        <button type="submit" className="btn-info btn btn-rounded">
          GO!
        </button>
      </FormGroup>
    </form>
  );
};
export default Form;
