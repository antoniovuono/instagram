import React from "react";

import { Container, DescriptionTitle } from "./styles";

const BottomContent: React.FC = () => {
    return (
        <Container>
            <DescriptionTitle onPress={() => console.log("signupPressed")}>
                Don’t have an account?{" "}
                <DescriptionTitle isBold>Sign up.</DescriptionTitle>
            </DescriptionTitle>
        </Container>
    );
};

export default BottomContent;
