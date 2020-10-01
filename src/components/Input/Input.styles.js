import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Wrapper = styled.View`
  margin: 15px;
  width: 85%;
  height: 40px;
  border-radius: 8px;
  background-color: ${colors.cinzaClaro};
  border: 0.5px solid ${colors.verdeClaro};
`;

export const Label = styled.Text`
  color: ${colors.branco2};
  font-size: 16px;
  margin-left: 5px;
  margin-top: -20px;
`;

export const TextInput = styled.TextInput`
  font-size: 17px;
  color: ${colors.branco2};
  margin-left: 10px;
  margin-top: 15px;
`;
