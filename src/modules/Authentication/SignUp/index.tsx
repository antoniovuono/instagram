import LogotipoIcon from "@assets/icons/logotipo.svg";
import PasswordInput from "@components/PasswordInput";
import PrimaryButton from "@components/PrimaryButton";
import TextInput from "@components/TextInput";
import React, { useState } from "react";

import {
    BodyContent,
    ButtonAuthenticateContent,
    Container,
    SignUpFormContent,
    SignUpTextContent,
    SignUpTextLabel,
    TextLabel,
} from "./styles";
import BottomContent from "../components/BottomContent";

const SignUp: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Container>
                <BodyContent>
                    <LogotipoIcon />

                    <SignUpFormContent>
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

                        <PasswordInput
                            placeholder=" confirm password"
                            value={password}
                            onChangeText={setPassword}
                        />
                    </SignUpFormContent>

                    <ButtonAuthenticateContent>
                        <PrimaryButton title="Sign Up" />
                    </ButtonAuthenticateContent>
                </BodyContent>

                <SignUpTextContent>
                    <SignUpTextLabel isBlack>OR</SignUpTextLabel>

                    <SignUpTextLabel style={{ marginTop: 50 }}>
                        Already have an account?{" "}
                        <SignUpTextLabel isBlue>Sign in.</SignUpTextLabel>
                    </SignUpTextLabel>
                </SignUpTextContent>
            </Container>
            <BottomContent signUp />
        </>
    );
};

export default SignUp;
