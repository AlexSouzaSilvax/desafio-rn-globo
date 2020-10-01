import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Wrapper = styled.View`
  justify-content: center;
  background-color: ${colors.cinzaClaro4};
  width: 95%;
  margin: 10px;
  border-radius: 6px;
`;

export const Top = styled.View`
  margin: 5px 0px 5px 0px;
  align-self: center;
  flex-direction: row;
  width: 100%;
  height: 30px;
`;

export const Tags = styled.View`
  justify-content: flex-start;
  align-self: center;
  width: 85%;
  flex-direction: row;
`;

export const Favoritar = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 15%;
`;

export const Middle = styled.View`
  width: 100%;
`;

export const Thumb = styled.Image`
  width: 100%;
  height: 150px;
`;

export const Bottom = styled.View`
  padding: 15px 10px 15px 10px;
`;

export const Titulo = styled.Text`
  color: ${colors.branco2};
  font-weight: 500;
`;

export const Descricao = styled.Text`
  color: ${colors.cinzaClaro2};
  font-size: 12px;
  margin-top: 5px;
  padding-start: 4px;
`;
