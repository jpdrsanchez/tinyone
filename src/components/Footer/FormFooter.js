import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;

  @media (max-width: 575px) {
    flex-direction: column;
  }

  input {
    flex: 1;
    margin-right: 1.25rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    appearance: none;
    border: none;
    background: var(--white);
    padding: 0.8125rem 2.25rem 0.75rem;
    width: 100%;
    max-width: 36.25rem;

    @media (max-width: 575px) {
      max-width: 100%;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--grey);
    }
  }

  button {
    width: max-content;
    padding: 0.8125rem 2.25rem 0.75rem;
    background: var(--yellow);
    line-height: 1.5;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 0.5rem;

    @media (max-width: 575px) {
      flex: 1;
      width: 100%;
      margin-top: 1.25rem;
    }
  }
`;

const FormFooter = () => {
  const [value, setValue] = useState('');
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email to update"
        aria-label="Enter your email to update"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <button>Submit</button>
    </Form>
  );
};

export default FormFooter;
