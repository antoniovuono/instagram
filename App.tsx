import Welcome from "@modules/Authentication/Welcome";
import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/themes/theme";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Welcome />
        </ThemeProvider>
    );
};

export default App;
