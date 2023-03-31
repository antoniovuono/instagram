import React from "react";

import { Container, Title } from "./styles";

interface IButton {
    title: string;
}

const PrimaryButton: React.FC<IButton> = ({ title, ...rest }) => {
    return (
        <Container {...rest} activeOpacity={0.7}>
            <Title>{title}</Title>
        </Container>
    );
};

export default PrimaryButton;
