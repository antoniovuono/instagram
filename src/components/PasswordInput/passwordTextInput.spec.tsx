import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { InputContent } from "./styles";
import theme from "../../themes/theme";

interface IThemeProvider {
    children: React.ReactNode;
}

const Providers: React.FC<IThemeProvider> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Text input Component", () => {
    it("Should be able to render a default text input", () => {
        const { getByTestId } = render(
            <InputContent
                testID="text-input"
                value="default-value"
                placeholderTextColor={theme.colors.primaryTitleColor}
                style={{ fontFamily: theme.fonts.primaryBlack }}
            />,
            {
                wrapper: Providers,
            }
        );

        expect(getByTestId("text-input")).toBeTruthy();
    });

    it("Should be able to render a security text for passwords", () => {
        const { getByTestId } = render(
            <InputContent
                testID="text-input"
                value="default-value"
                placeholderTextColor={theme.colors.primaryTitleColor}
                style={{ fontFamily: theme.fonts.primaryBlack }}
                secureTextEntry={true}
            />,
            {
                wrapper: Providers,
            }
        );

        expect(getByTestId("text-input").props.secureTextEntry).toBeTruthy();
    });

    it("Should be able to receive a value", () => {
        const inputValue = "default-value";

        const { getByTestId } = render(
            <InputContent
                testID="text-input"
                value={inputValue}
                placeholderTextColor={theme.colors.primaryTitleColor}
                style={{ fontFamily: theme.fonts.primaryBlack }}
            />,
            {
                wrapper: Providers,
            }
        );

        expect(getByTestId("text-input").props.value).toBe(inputValue);
    });

    it("Should be able to render a placeholder", () => {
        const placeholderValue = "default-value";

        const { getByTestId } = render(
            <InputContent
                testID="text-input"
                placeholderTextColor={theme.colors.primaryTitleColor}
                style={{ fontFamily: theme.fonts.primaryBlack }}
                placeholder={placeholderValue}
            />,
            {
                wrapper: Providers,
            }
        );

        expect(getByTestId("text-input").props.placeholder).toBe(
            placeholderValue
        );
    });

    it("Should be able to receive a correctly colors styles", () => {
        const placeholderValue = "default-value";

        const { getByTestId } = render(
            <InputContent
                testID="text-input"
                placeholderTextColor={theme.colors.primaryTitleColor}
                style={{ fontFamily: theme.fonts.primaryBlack }}
                placeholder={placeholderValue}
            />,
            {
                wrapper: Providers,
            }
        );

        const response = getByTestId("text-input").props.style[0];

        expect(response.backgroundColor).toBe(
            theme.colors.secondbackgroundColor
        );
        expect(response.color).toBe(theme.colors.primaryTitleColor);
        expect(response.borderColor).toBe(theme.colors.primaryBorder);
    });

    it("Should be able to receive a correctly border radius", () => {
        const placeholderValue = "default-value";

        const { getByTestId } = render(
            <InputContent
                testID="text-input"
                placeholderTextColor={theme.colors.primaryTitleColor}
                style={{ fontFamily: theme.fonts.primaryBlack }}
                placeholder={placeholderValue}
            />,
            {
                wrapper: Providers,
            }
        );

        const response = getByTestId("text-input").props.style[0];

        expect(response.borderRadius).toBe(5);
    });
});
