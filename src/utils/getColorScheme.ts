import { Appearance } from "react-native";

const getColorScheme = () => {
    const colorScheme = Appearance.getColorScheme();

    return colorScheme;
};

export { getColorScheme };
