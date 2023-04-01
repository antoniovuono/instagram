import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    padding: 16px;
`;

export const BodyContent = styled.View`
    align-items: center;
`;

export const SignInFormContent = styled.View`
    width: 100%;
    margin-top: 39px;
`;
