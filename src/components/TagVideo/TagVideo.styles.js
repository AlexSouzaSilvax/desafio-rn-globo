import styled from "styled-components";
import colors from "../../styles/colors";

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 3px;
  background-color: ${colors.cinzaEscuro2};  
  border-radius: 8px;
  margin-start: 3px;
`;

export const Name = styled.Text`
  color: ${colors.cinzaClaro2};
  align-self: center;
  padding-start: 2px;
`;
