import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: ${getStatusBarHeight() + 60}px;
    background-color: ${({ theme }) => theme.colors.secondbackgroundColor};
`;
