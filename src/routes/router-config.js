import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import Puzzle from './puzzle';
import PuzzlePicture from './setting/routes/puzzle-picture';
import { waitingRouteComponent } from "../commons/utils";

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
        exact: true,

    },
    {
        path: '/setting',
        component: waitingRouteComponent(lazy(() => import('./setting'))),
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/setting/game-level',
        component: waitingRouteComponent(lazy(() => import('./setting/routes/game-level'))),
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
        component: waitingRouteComponent(lazy(() => import('./setting/routes/dark-mode'))),
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/setting/about',
        component: waitingRouteComponent(lazy(() => import('./setting/routes/about'))),
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/competition/game',
        component: waitingRouteComponent(lazy(() => import('./competition/routes/game'))),
        exact: true
    }
];

export const PrivateRouterConfig = [
    {
        path: '/ranking',
        component: waitingRouteComponent(lazy(() => import('./ranking'))),
        exact: true
    },
    {
        path: '/competition',
        component: waitingRouteComponent(lazy(() => import('./competition'))),
        exact: true
    }
];

export const getSceneConfig = (location) => {
    const matchedRoute = RouterConfig.find((config) => new RegExp(`^${config.path}$`).test(location.pathname));
    return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};

export const PrivateRoute = (props) => (
    <>
        {
            props.auth ? props.children : <Redirect to={'/'} />
        }
    </>
);
