import React, { useState, useCallback, useEffect } from 'react';
import {
    Button,
    ConfirmButton, ModelContent, ModelFooter, ModelShadow, ModelTitle, ModelWrap
} from '../styles/model-style';
import {
    useObservable,
    pluckFirst,
    useObservableState
} from "observable-hooks";
import {
    map,
    filter,
    distinctUntilChanged,
    switchMap,
    repeat,
    withLatestFrom,
    scan,
    tap,
    takeWhile
} from "rxjs/operators";
import { of, animationFrameScheduler } from "rxjs";

const useModel = (title, message = null, confirm = null, confirmText = 'Confirm', cancel = null, cancelText = 'Cancel') => {
    const [isShown, setShown] = useState(false);
    const showModal = useCallback(() => setShown(true), []);
    const hideModal = useCallback(() => setShown(false), []);

    const ModelBox = () => (
        <div>
            <ModelWrap>
                <ModelTitle>{title}</ModelTitle>
                <ModelContent>{message}</ModelContent>
                <ModelFooter>
                    {
                        cancel ? (<Button type="cancel" onClick={cancel}>{cancelText}</Button>) : null
                    }
                    {
                        confirm ? (<Button type="confirm" onClick={confirm}>{confirmText}</Button>) : null
                    }
                </ModelFooter>
            </ModelWrap>
            <ModelShadow />
        </div>
    );

    return {
        ModelBox,
        isShown,
        showModal,
        hideModal
    };
};

const useTimer = (initialTime = 0, direction = 'forward', onSuccess) => {
    const [timerState, setTimerState] = useState('reset');

    const timerState$ = useObservable(pluckFirst, [timerState]);
    const countDown$ = useObservable(() =>
        timerState$.pipe(
            map(state => state === "reset"),
            distinctUntilChanged(),
            switchMap(isReset => {
                // console.log("isReset", isReset);

                return isReset
                    ? of(initialTime)
                    : // high accuracy timing
                      // repetitively calculate the diff
                    of(animationFrameScheduler.now(), animationFrameScheduler).pipe(
                        repeat(),
                        // extract seconds
                        map(startTime => ~~((Date.now() - startTime) / 1000)),
                        distinctUntilChanged(),
                        withLatestFrom(timerState$),
                        filter(([, state]) => state === "started"),
                        tap(([val,]) => {
                            // console.log(`tab::${val}`);

                            if (direction === 'backward' && val > initialTime) {
                                onSuccess();
                            }
                        }),
                        takeWhile(([val,]) => {
                            // console.log(val, direction, initialTime);

                            return direction === 'forward' || (direction === 'backward' && val <= initialTime);
                        }),
                        // count how many second left
                        scan((timeLeft, [val,]) => {
                            // console.log(timeLeft, val);

                            // 當時間尚未經過1秒時，先不進行時間增減
                            if (val === 0) {
                                return timeLeft;
                            }

                            return direction === 'backward' ? timeLeft - 1 : timeLeft + 1;
                        }, initialTime)
                    );
            })
        )
    );

    const seconds = useObservableState(countDown$, initialTime);

    return {
        timerState,
        setTimerState,
        seconds
    };
};

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

const useLocalStorage = (key, initialValue, options = {}) => {
    const { deleteKeyIfValueIs = null } = options;
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof localStorage !== `undefined`) {
            document.addEventListener(`localStorage:${key}Change`, event =>
                setStoredValue(event.detail)
            );

            const item = localStorage[key];

            if (!item) {
                localStorage[key] = JSON.stringify(initialValue);
            }

            return item ? JSON.parse(item) : initialValue;
        } else {
            return initialValue;
        }
    });

    const setValue = value => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        const event = new CustomEvent(`localStorage:${key}Change`, {
            detail: valueToStore
        });

        document.dispatchEvent(event);

        if (value === deleteKeyIfValueIs) {
            delete localStorage[key];
        } else {
            localStorage[key] = JSON.stringify(valueToStore);
        }
    };

    return [storedValue, setValue];
};

// React hook for JS media queries
const useMediaQuery = (query) => {
    if (typeof window !== `undefined`) {
        query = window.matchMedia(query);

        const [match, setMatch] = useState(query.matches);

        useEffect(() => {
            const handleMatch = q => setMatch(q.matches);
            query.addListener(handleMatch);

            return () => query.removeListener(handleMatch)
        }, [query]);

        return match
    }
};

export {
    useDarkMode,
    useMediaQuery,
    useModel,
    useTimer
};
