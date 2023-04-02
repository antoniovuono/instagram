import { fireEvent, render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import PrimaryButton from ".";
import theme from "../../themes/theme";

interface IThemeProvider {
    children: React.ReactNode;
}

const Providers: React.FC<IThemeProvider> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Primary Button Component", () => {
    it("Should be able to get a clickable button", () => {
        const handleClick = jest.fn();

        const { getByTestId } = render(
            <PrimaryButton onPressed={handleClick} title="Sign In" />,
            {
                wrapper: Providers,
            }
        );

        fireEvent.press(getByTestId("primary-button"));

        expect(handleClick).toHaveBeenCalled();
    });

    it("Should be able to be rendered", () => {
        const { getByTestId } = render(<PrimaryButton title="Sign In" />, {
            wrapper: Providers,
        });

        expect(getByTestId("primary-button")).toBeTruthy();
    });

    it("Should be able to return a title", () => {
        const { getByText } = render(<PrimaryButton title="Sign In" />, {
            wrapper: Providers,
        });

        expect(getByText("Sign In")).toBeTruthy();
    });

    it("Should be able to have the primary background button color", () => {
        const { getByTestId } = render(<PrimaryButton title="Sign In" />, {
            wrapper: Providers,
        });

        expect(
            getByTestId("primary-button").props.style.backgroundColor
        ).toEqual(theme.colors.buttonColor);
    });

    it("Should be able to have the right dimensions from figma", () => {
        const { getByTestId } = render(<PrimaryButton title="Sign In" />, {
            wrapper: Providers,
        });

        expect(getByTestId("primary-button").props.style.height).toBe(44);
        expect(getByTestId("primary-button").props.style.width).toBe("100%");
        expect(getByTestId("primary-button").props.style.borderRadius).toBe(5);
    });

    it("Should be able to render a centralized title", () => {
        const { getByTestId } = render(<PrimaryButton title="Sign In" />, {
            wrapper: Providers,
        });

        expect(getByTestId("primary-button").props.style.justifyContent).toBe(
            "center"
        );
        expect(getByTestId("primary-button").props.style.alignItems).toBe(
            "center"
        );
    });
});
