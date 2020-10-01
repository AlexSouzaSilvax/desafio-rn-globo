import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Wrapper = styled.View`
  background-color: ${colors.preto};
  flex: 1;
`;

export const ViewBoasVindas = styled.View`
  margin-left: 13px;
  margin-top: 35%;
  align-self: flex-start;
  width: 310px;
  height: 150px;
`;

export const TextBoasVindas = styled.Text`
  color: ${colors.branco2};
  font-size: 45px;
`;

export const TextBoasVindas2 = styled.Text`
  color: ${colors.branco};
  font-size: 55px;
  font-weight: 500;
  margin-left: 15px;
`;

export const ViewInput = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin-top: 25px;
  margin-left: 15px;
`;

export const BtnProblemaLogin = styled.TouchableOpacity`
  margin-top: 4px;
  margin-left: 37px;
`;

export const TextProblemaLogin = styled.Text`
  color: ${colors.branco2};
  font-size: 18px;
`;

export const ViewBtn = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;
