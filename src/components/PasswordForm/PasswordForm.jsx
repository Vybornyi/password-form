import React, { useState } from 'react';
import { checkPasswordStrenght } from '../../utils/utils';
import './passwordForm.scss';

const INDICATORS_COLORS = {
  first: {
    empty: 'grey',
    uncompleted: 'red',
    strong: 'green',
    medium: 'yellow',
    easy: 'red',
  },
  second: {
    empty: 'grey',
    uncompleted: 'red',
    strong: 'green',
    medium: 'grey',
    easy: 'grey',
  },
  third: {
    empty: 'grey',
    uncompleted: 'red',
    strong: 'green',
    medium: 'grey',
    easy: 'grey',
  },
};

const PasswordForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [passwordStatus, setPasswordStatus] = useState('empty');
  return (
    <form className='password-form'>
      <label className='password-form__label' htmlFor='password'>
        Enter password:
      </label>
      <input
        type='password'
        className='password-form__input'
        id='password'
        autoComplete='on'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setPasswordStatus(checkPasswordStrenght(e.target.value));
        }}
      />
      <label className='strength-text' htmlFor='password'>
        Enter password:
      </label>
      <div className='strength-indication'>
        <div
          style={{
            backgroundColor: INDICATORS_COLORS.first[passwordStatus],
          }}
          className='strength-indication__indicator'
        ></div>
        <div
          style={{
            backgroundColor: INDICATORS_COLORS.second[passwordStatus],
          }}
          className='strength-indication__indicator'
        ></div>
        <div
          style={{
            backgroundColor: INDICATORS_COLORS.third[passwordStatus],
          }}
          className='strength-indication__indicator'
        ></div>
      </div>
    </form>
  );
};
export default PasswordForm;

