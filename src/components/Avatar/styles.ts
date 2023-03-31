import styled from "styled-components/native";

export const Container = styled.Image`
    height: 85px;
    width: 85px;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.primaryTitleColor};
`;
