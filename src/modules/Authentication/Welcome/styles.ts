import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    justify-content: center;
`;

export const WelcomeContent = styled.View`
    justify-content: center;
    align-items: center;
`;
