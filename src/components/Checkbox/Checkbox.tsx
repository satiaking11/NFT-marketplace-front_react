/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

function Checkbox() {
  return (
    <div className="checkbox flex items-center">
      <input className="form-check-input h-6 w-6 mr-2" type="checkbox" value="" id="flexCheckChecked" />
      <label className="form-check-label inline-block text-gray-800 dark:text-white" htmlFor="flexCheckChecked">
        By checking this box, I agree to OpenSwap
        <Link className="text-[#018AE3] dark:text-[#27A3F5]" to="/"> Terms of Use</Link>
      </label>
    </div>
  );
}

export default Checkbox;
