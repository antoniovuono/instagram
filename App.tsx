import {
    useFonts,
    Poppins_900Black,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import Welcome from "@modules/Authentication/Welcome";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./src/themes/theme";

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Poppins_900Black,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle="light-content"
            />
            <Welcome />
        </ThemeProvider>
    );
};

export default App;
