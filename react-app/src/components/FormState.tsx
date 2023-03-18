import React, { FormEvent, useRef, useState } from "react";

const FormState = () => {
  const [person, setPerson] = useState({ name: "", age: 0 });

  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={person.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          name="age"
          value={person.age}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormState;
