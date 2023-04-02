import React from "react";

import { Container } from "./styles";

interface IAvatar {
    url: string;
}

const Avatar: React.FC<IAvatar> = ({ url }) => {
    return <Container testID="image" source={{ uri: url }} />;
};

export default Avatar;
