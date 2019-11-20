import Puzzle from './puzzle';
import Setting from './setting';
import GameLevel from './setting/routes/game-level';
import PuzzlePicture from './setting/routes/puzzle-picture';
import DarkMode from './setting/routes/dark-mode';
import About from './setting/routes/about';

// const Puzzle = lazy(() => import('./puzzle'));
// const Setting = lazy(() => import('./setting'));

const DEFAULT_SCENE_CONFIG = {
    enter: 'page-fade-in',
    exit: 'page-fade-out'
};

export const RouterConfig = [
    {
        path: '/',
        component: Puzzle,
        exact: true
    },
    {
        path: '/setting',
        component: Setting,
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/setting/game-level',
        component: GameLevel,
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/setting/puzzle-picture',
        component: PuzzlePicture,
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/setting/dark-mode',
        component: DarkMode,
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/setting/about',
        component: About,
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    }
];

export const getSceneConfig = (location) => {
    const matchedRoute = RouterConfig.find((config) => new RegExp(`^${config.path}$`).test(location.pathname));
    return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};
