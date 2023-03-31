import LogotipoIcon from "@assets/icons/logotipo.svg";
import Avatar from "@components/Avatar";
import React from "react";

import { Container, ProfileContent, WelcomeContent } from "./styles";

const Welcome: React.FC = () => {
    return (
        <Container>
            <WelcomeContent>
                <LogotipoIcon />

                <ProfileContent>
                    <Avatar url="https://avatars.githubusercontent.com/u/7297243?s=96&v=4" />
                </ProfileContent>
            </WelcomeContent>
        </Container>
    );
};

export default Welcome;
