import LogotipoIcon from "@assets/icons/logotipo.svg";
import PasswordInput from "@components/PasswordInput";
import PrimaryButton from "@components/PrimaryButton";
import TextInput from "@components/TextInput";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useTheme } from "styled-components";

import {
    BodyContent,
    ButtonAuthenticateContent,
    Container,
    GoBackButton,
    HeaderWithGoBack,
    SignInFormContent,
    SignUpTextContent,
    SignUpTextLabel,
    TextLabel,
} from "./styles";
import BottomContent from "../components/BottomContent";

const SignIn: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const theme = useTheme();

    return (
        <>
            <Container>
                <HeaderWithGoBack>
                    <GoBackButton>
                        <Ionicons
                            name="arrow-back-outline"
                            size={24}
                            color={theme.colors.primaryTitleColor}
                        />
                    </GoBackButton>
                </HeaderWithGoBack>

                <BodyContent>
                    <LogotipoIcon />

                    <SignInFormContent>
                        <TextInput
                            placeholder="username"
                            value={username}
                            onChangeText={setUsername}
                        />

                        <PasswordInput
                            placeholder="password"
                            value={password}
                            onChangeText={setPassword}
                        />

                        <TextLabel
                            onPress={() =>
                                console.log("Forgot password pressed")
                            }
                        >
                            Forgot password ?
                        </TextLabel>
                    </SignInFormContent>

                    <ButtonAuthenticateContent>
                        <PrimaryButton title="Log In" />
                    </ButtonAuthenticateContent>
                </BodyContent>

                <SignUpTextContent>
                    <SignUpTextLabel isBlack>OR</SignUpTextLabel>

                    <SignUpTextLabel style={{ marginTop: 50 }}>
                        Don’t have an account?{" "}
                        <SignUpTextLabel isBlue>Sign up.</SignUpTextLabel>
                    </SignUpTextLabel>
                </SignUpTextContent>
            </Container>
            <BottomContent signUp />
        </>
    );
};

export default SignIn;
