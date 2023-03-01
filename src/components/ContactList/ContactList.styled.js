import styled from '@emotion/styled';

export const StyledContactList = styled.ul`
padding: 0;

  li {
	display: flex;
justify-content: space-between;
gap: 16px;

    margin-bottom: 8px;

    span {
      font-size: 18px;
    }

    button {
      margin-left: 16px;
      background-color: transparent;

      border: none;
      color: #000;
      transition: color 0.25s ease-in-out;

      :hover,
      :focus {
        color: red;
      }
    }
  }
`;
