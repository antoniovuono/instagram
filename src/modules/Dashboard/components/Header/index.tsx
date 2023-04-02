import LogotipoIcon from "@assets/icons/logotipo.svg";
import React from "react";

import { Container, LogotipoContent } from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <LogotipoContent>
                <LogotipoIcon width={105} height={28} />
            </LogotipoContent>
        </Container>
    );
};

export default Header;
