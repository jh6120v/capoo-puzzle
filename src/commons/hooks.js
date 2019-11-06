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
import { layoutPosition } from "./utils";

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
    const [timerState, setTimerState] = React.useState('reset');
    const initialAccumulationValue = direction === 'forward' ? -1 : initialTime + 1;

    const timerState$ = useObservable(pluckFirst, [timerState]);
    const countDown$ = useObservable(() =>
        timerState$.pipe(
            map(state => state === "reset"),
            distinctUntilChanged(),
            switchMap(isReset => {
                console.log("isReset", isReset);

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
                        takeWhile(([val,]) => {
                            // console.log(val, direction, initialTime);
                            return direction === 'forward' || (direction === 'backward' && val <= initialTime);
                        }),
                        tap(([val,]) => {
                            // console.log(val);
                            if (direction === 'backward' && val === initialTime) {
                                onSuccess();
                            }
                        }),
                        // count how many second left
                        scan(timeLeft => {
                            // console.log(timeLeft);
                            return direction === 'backward' ? timeLeft - 1 : timeLeft + 1;
                        }, initialAccumulationValue)
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

const usePuzzle = (grids, col) => {
    // 拼圖各方塊絕對定位
    const [layout, setLayout] = useState([]);

    // 拼圖實際寬度(正方形)
    const [puzzleWidth, setPuzzleWidth] = useState(0);

    // 移動次數
    const [move, setMove] = useState(0);

    const puzzleContainer = useRef();
    useEffect(() => {
        // 設定 puzzle 總寬度
        setPuzzleWidth(puzzleContainer.current.clientWidth);

        // 設定拼圖各方塊絕對定位
        setLayout(layoutPosition(puzzleContainer.current.clientWidth, col));
    }, []);

    return {
        puzzleContainer,
        total: col * col,
        puzzleWidth,
        layout,
        moves: [move, setMove]
    }
};

export {
    usePuzzle,
    useModel,
    useTimer
};
