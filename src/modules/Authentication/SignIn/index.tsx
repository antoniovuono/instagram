import LogotipoIcon from "@assets/icons/logotipo.svg";
import TextInput from "@components/TextInput";
import React, { useState } from "react";

import { BodyContent, Container, SignInFormContent } from "./styles";

const SignIn: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <BodyContent>
                <LogotipoIcon />

                <SignInFormContent>
                    <TextInput
                        placeholder="username"
                        value={username}
                        onChangeText={setUsername}
                    />
                </SignInFormContent>
            </BodyContent>
        </Container>
    );
};

export default SignIn;
