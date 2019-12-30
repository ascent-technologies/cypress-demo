import React, { useState } from "react";

const useForm = callback => {
  const [inputs, setInputs] = useState(false);

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleChange,
    inputs
  };
};

export default useForm;
