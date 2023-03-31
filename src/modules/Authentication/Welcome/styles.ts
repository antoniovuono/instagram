import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    justify-content: center;
`;

export const WelcomeContent = styled.View`
    padding: 20px 34px;
    justify-content: center;
    align-items: center;
`;

export const ProfileContent = styled.View`
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    padding: 10px;
    height: 140px;
`;

export const UserNickname = styled.Text<{ isBlue?: boolean }>`
    margin-top: 13px;
    ${({ theme, isBlue }) => css`
        color: ${isBlue
            ? theme.colors.buttonColor
            : theme.colors.primaryTitleColor};
        font-family: ${theme.fonts.primaryBlack};
    `}
`;
