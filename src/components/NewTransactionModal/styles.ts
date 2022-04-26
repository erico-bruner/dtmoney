import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 0;
    background: var(--green);
    color: #FFF;
    font-weight: 600;
    font-size: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  } 
`;

export const TransactionsTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    span {
      font-size: 1rem;
      color: var(--text-title);
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`