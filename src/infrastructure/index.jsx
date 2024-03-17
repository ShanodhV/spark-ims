import { space, lineHeights } from "./spacing";
import { sizes, sizesPercentage, maxsizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";
import { lightColors, darkColors } from "./colors";

const lightTheme = {
    colors: lightColors, //light colors
    space,
    lineHeights,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
    sizesPercentage,
    maxsizes,
};

const darkTheme = {
    colors: darkColors, //dark colors
    space,
    lineHeights,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
    sizesPercentage,
    maxsizes,
};

export { lightTheme, darkTheme };
