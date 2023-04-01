import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { InputContent } from "./styles";

interface ITextInput extends TextInputProps {
    value: string;
}

const TextInput: React.FC<ITextInput> = ({ value, ...rest }) => {
    const theme = useTheme();

    return (
        <InputContent
            {...rest}
            placeholderTextColor={theme.colors.primaryTitleColor}
            maxLength={37}
            autoCapitalize="none"
            keyboardAppearance="dark"
            keyboardType="default"
            value={value}
            style={{
                fontFamily: value
                    ? theme.fonts.primaryBlack
                    : theme.fonts.primaryRegular,
            }}
        />
    );
};

export default TextInput;
