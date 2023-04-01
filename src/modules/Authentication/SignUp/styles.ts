import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    padding: 12px;
    justify-content: center;
`;

export const BodyContent = styled.View`
    align-items: center;
`;

export const SignUpFormContent = styled.View`
    width: 100%;
    margin-top: 39px;
    justify-content: space-between;
`;

export const TextLabel = styled.Text`
    text-align: right;

    ${({ theme }) => css`
        color: ${theme.colors.buttonColor};
        font-family: ${theme.fonts.primaryMedium};
    `}
`;

export const ButtonAuthenticateContent = styled.View`
    width: 100%;
    margin-top: 26px;
`;

export const SignUpTextContent = styled.View`
    justify-content: flex-end;
    align-items: center;
    margin-top: 65px;
`;

export const SignUpTextLabel = styled.Text<{
    isBlack?: boolean;
    isBlue?: boolean;
}>`
    ${({ theme, isBlack, isBlue }) => css`
        font-family: ${isBlack
            ? theme.fonts.primaryBlack
            : theme.fonts.primaryMedium};

        color: ${isBlue
            ? theme.colors.buttonColor
            : theme.colors.primaryBorder};
    `}
    font-size: ${RFValue(14)}px;
`;
