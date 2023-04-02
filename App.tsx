import {
    useFonts,
    Poppins_900Black,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import SignIn from "@modules/Authentication/SignIn";
import SignUp from "@modules/Authentication/SignUp";
import Welcome from "@modules/Authentication/Welcome";
import Dashboard from "@modules/Dashboard";
import * as SplashScreen from "expo-splash-screen";
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

    setTimeout(SplashScreen.hideAsync, 5000);

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle="light-content"
            />
            <Dashboard />
        </ThemeProvider>
    );
};

export default App;
