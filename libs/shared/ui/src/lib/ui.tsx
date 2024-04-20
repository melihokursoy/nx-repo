import styled from 'styled-components';
import {AccountCircle, Lock} from '@styled-icons/material'

/* eslint-disable-next-line */
export interface UiProps {
  title:string
}

const StyledUi = styled.div`
  color: red;
`;

export function Ui(props: UiProps) {
  const {title} = props
  return (
    <StyledUi>
      <h1>Welcome to {title}</h1>
      <Lock color='green' size='64'/>
      <AccountCircle color='green' size='64'/>
    </StyledUi>
  );
}

export default Ui;
