import React, { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  const updateValue = (e) => {
    // check if its a number and convert since it comes in as a string
    let { value } = e.target;
    if (e.target.value.type === 'number') {
      value = parseInt(value);
    }

    setValues({
      // copy the existing values into it

      ...values,
      // update the new value that change
      // we take the name attribute of the input and set it to the value that the user type - to make it dynamic
      [e.target.name]: e.target.value,
    });
  };
  return { values, updateValue };
}
