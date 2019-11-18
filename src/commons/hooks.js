import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
    ConfirmButton, ModelContent, ModelFooter, ModelShadow, ModelWrap
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
import { getLayoutPositionList } from "./utils";

const useModel = (message, confirm) => {
    const [isShown, setShown] = useState(false);
    const showModal = useCallback(() => setShown(true), []);
    const hideModal = useCallback(() => setShown(false), []);

    const ModelBox = () => (
        <div>
            <ModelWrap>
                <ModelContent>{message}</ModelContent>
                <ModelFooter>
                    <ConfirmButton onClick={confirm}>Confirm</ConfirmButton>
                </ModelFooter>
            </ModelWrap>
            <ModelShadow onClick={hideModal} />
        </div>
    );

    return {
        ModelBox,
        isShown,
        showModal,
        hideModal
    };
};

const useTimer = (initialTime = 0, direction = 'forward' , onSuccess) => {
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

// React hook for JS media queries
const useMediaQuery = query => {
    if (typeof window !== `undefined`) {
        query = window.matchMedia(query)

        const [match, setMatch] = useState(query.matches)

        useEffect(() => {
            const handleMatch = q => setMatch(q.matches)
            query.addListener(handleMatch)

            return () => query.removeListener(handleMatch)
        }, [query])

        return match
    }
}

export {
    useMediaQuery,
    useModel,
    useTimer
};
