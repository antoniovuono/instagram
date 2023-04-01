import React from "react";

import { Container, DescriptionTitle } from "./styles";

interface IBottomContent {
    signIn?: boolean;
    signUp?: boolean;
}

const BottomContent: React.FC<IBottomContent> = ({ signIn, signUp }) => {
    return (
        <Container>
            {signIn && (
                <DescriptionTitle onPress={() => console.log("signupPressed")}>
                    Don’t have an account?{" "}
                    <DescriptionTitle isBold isBlue>
                        Sign up.
                    </DescriptionTitle>
                </DescriptionTitle>
            )}

            {signUp && (
                <DescriptionTitle>Instagram from Facebook</DescriptionTitle>
            )}
        </Container>
    );
};

export default BottomContent;
