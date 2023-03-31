import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
    padding: 12px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.buttonColor};
    width: 100%;
    border-radius: 5px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.fonts.primaryBlack};
        color: ${theme.colors.primaryTitleColor};
    `}
`;
