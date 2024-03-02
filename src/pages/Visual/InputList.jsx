import React from 'react';

const InputList = ({ inputs }) => {
  return (
    <div>
      <ul>
        {inputs.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputList;