import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import Avatar from ".";
import theme from "../../themes/theme";

interface IThemeProvider {
    children: React.ReactNode;
}

const Providers: React.FC<IThemeProvider> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Avatar Component", () => {
    it("Should be able to be rendered", () => {
        const { getByTestId } = render(
            <Avatar url="https://avatars.githubusercontent.com/u/7297243?s=96&v=4" />,
            {
                wrapper: Providers,
            }
        );

        expect(getByTestId("image")).toBeTruthy();
    });

    it("Should be able to render a image type component", () => {
        const { getByTestId } = render(
            <Avatar url="https://avatars.githubusercontent.com/u/7297243?s=96&v=4" />,
            {
                wrapper: Providers,
            }
        );

        expect(getByTestId("image").type).toEqual("Image");
    });

    it("Should be able to receive a url", () => {
        const { getByTestId } = render(
            <Avatar url="https://avatars.githubusercontent.com/u/7297243?s=96&v=4" />,
            {
                wrapper: Providers,
            }
        );

        expect(getByTestId("image").props.source.uri).toBeTruthy();
    });

    it("Should must be have a circular format", () => {
        const { getByTestId } = render(
            <Avatar url="https://avatars.githubusercontent.com/u/7297243?s=96&v=4" />,
            {
                wrapper: Providers,
            }
        );

        expect(getByTestId("image").props.style[0].borderRadius).toEqual(50);
    });

    it("Should must be have a border white border", () => {
        const { getByTestId } = render(
            <Avatar url="https://avatars.githubusercontent.com/u/7297243?s=96&v=4" />,
            {
                wrapper: Providers,
            }
        );

        const avatarComponent = getByTestId("image");

        expect(avatarComponent.props.style[0].borderWidth).toBe(1);
        expect(avatarComponent.props.style[0].borderColor).toBe(
            theme.colors.primaryTitleColor
        );
    });
});
