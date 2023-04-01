import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding: 34px
    justify-content: center;
    align-items: center;

    border-top: 1px;
    border-top-width: 0.2px;

    ${({ theme }) => css`
        background-color: ${theme.colors.backgroundColor};
        border-top-color: ${theme.colors.primaryBorder};
    `}
`;

export const DescriptionTitle = styled.Text<{
    isBold?: boolean;
    isBlue?: boolean;
}>`
    ${({ theme, isBold, isBlue }) => css`
        color: ${isBlue
            ? theme.colors.buttonColor
            : theme.colors.primaryTitleColor};
        font-family: ${isBold
            ? theme.fonts.primaryBlack
            : theme.fonts.primaryRegular};
    `}
`;
