import LogotipoIcon from "@assets/icons/logotipo.svg";
import Avatar from "@components/Avatar";
import PrimaryButton from "@components/PrimaryButton";
import React from "react";

import {
    Container,
    ProfileContent,
    UserNickname,
    WelcomeContent,
} from "./styles";
import BottomContent from "../components/BottomContent";

const Welcome: React.FC = () => {
    return (
        <>
            <Container>
                <WelcomeContent>
                    <LogotipoIcon />

                    <ProfileContent>
                        <Avatar url="https://avatars.githubusercontent.com/u/7297243?s=96&v=4" />
                        <UserNickname>antoniosvuono</UserNickname>
                    </ProfileContent>

                    <PrimaryButton title="Log in" />

                    <UserNickname
                        style={{ marginTop: 30 }}
                        onPress={() => console.log("pressed")}
                        isBlue
                    >
                        Switch account
                    </UserNickname>
                </WelcomeContent>
            </Container>
            <BottomContent />
        </>
    );
};

export default Welcome;
