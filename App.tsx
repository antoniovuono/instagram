import SignIn from "@modules/Authentication/SignIn";
import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/themes/theme";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <SignIn />
        </ThemeProvider>
    );
};

export default App;
