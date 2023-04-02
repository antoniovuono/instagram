import React from "react";

import { Container, Title } from "./styles";

interface IButton {
    title: string;
    onPressed?: () => void;
}

const PrimaryButton: React.FC<IButton> = ({ title, onPressed, ...rest }) => {
    return (
        <Container
            onPress={onPressed}
            activeOpacity={0.7}
            testID="primary-button"
        >
            <Title>{title}</Title>
        </Container>
    );
};

export default PrimaryButton;
