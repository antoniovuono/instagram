import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";

export const InputContent = styled.TextInput`
    width: 100%;
    height: 44px;
    border-radius: 5px;
    padding: 0px 15px;
    font-size: ${RFValue(14)}px;
    margin-top: 12px;

    ${({ theme }) => css`
        color: ${theme.colors.primaryTitleColor};
        background-color: ${theme.colors.secondbackgroundColor};
        border: 1px solid  ${theme.colors.primaryBorder} opacity: 0.8;
    `};
`;
