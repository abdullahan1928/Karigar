import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel';

function RegisterPageInputs(props) {
  const { mail, setMail, password, setPassword, phone, setPhone, name, setName } = props;
  return (
    <>
      <InputWithLabel
        value={name}
        setValue={setName}
        label='Name'
        type='text'
        placeholder='Enter Your Name'
      />
      <InputWithLabel
        value={phone}
        setValue={setPhone}
        label='Phone'
        type='number'
        placeholder='Enter phone number'
        additionalStyles={
          {
            webKitAppearence: 'none',
          }
        }
      />

      <InputWithLabel
        value={mail}
        setValue={setMail}
        label='E-mail address'
        type='text'
        placeholder='Enter e-mail address'
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label='Password'
        type='password'
        placeholder='Enter password'
      />

    </>
  )
}

export default RegisterPageInputs;