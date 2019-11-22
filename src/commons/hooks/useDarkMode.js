import useLocalStorage from './useLocalStorage';
import useMediaQuery from './useMediaQuery';

const useDarkMode = (initialValue = `system`) => {
    let darkModeEnabled = false;

    const [colorMode, setColorMode] = useLocalStorage(`colorMode`, initialValue);
    const setter = value => {
        document.body.style.transition = `color 0.5s, background 0.5s`;

        setColorMode(value)
    };

    const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: dark)`);
    if (colorMode === 'system' && prefersDarkMode) {
        darkModeEnabled = true;
    }

    if (colorMode === `dark`) {
        darkModeEnabled = true;
    }

    return [darkModeEnabled, colorMode, setter];
};

export default useDarkMode;
