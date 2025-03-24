import styled from "@emotion/styled";

export const StyledToolbar = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 100px;
  min-height: 55px;
  padding: 2px;
  user-select: none;

  &.red {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border: none;
    border-radius: 24px;
    font-family:
      Google Sans,
      Roboto,
      sans-serif;
    margin: 6px 16px 8px 16px;
    min-height: 40px;
    padding: 0 8px;
    -webkit-font-smoothing: antialiased;
  }

  & > * {
    margin: 3px 2px 6px 1px;
    padding: 2px 0 2px 0;
    margin: 5px 1px;
    min-width: 28px;
    box-shadow: none;
    background-color: transparent;
    border-color: transparent;
    border-radius: 2px;
    border-width: 1px;
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;

    border-radius: 2px;
    -webkit-user-select: none;
    background: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 1px;
    outline: none;
    padding: 0;
    min-height: 24px;
    color: ${({ theme }) => theme.palette.text.primary};
    list-style: none;
    font-weight: 700;
    -webkit-text-decoration: none;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;

    user-select: none;
  }

  & > *:hover {
    background-color: rgb(0 0 0 / 15%);
  }
`;
