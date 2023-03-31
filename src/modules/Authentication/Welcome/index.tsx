import LogotipoIcon from "@assets/icons/logotipo.svg";
import React from "react";

import { Container, WelcomeContent } from "./styles";

const Welcome: React.FC = () => {
    return (
        <Container>
            <WelcomeContent>
                <LogotipoIcon />
            </WelcomeContent>
        </Container>
    );
};

export default Welcome;
