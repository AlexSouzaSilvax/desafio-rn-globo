import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  width: 90%;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 6px;
  margin: 5px;
  background-color: ${(props) => (props.background ? props.background : null)};
`;

export const TituloBtn = styled.Text`
  color: ${(props) => (props.color ? props.color : null)};
  font-size: 18px;
  font-weight: 500;
`;
