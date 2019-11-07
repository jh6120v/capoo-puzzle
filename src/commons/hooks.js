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

const usePuzzle = (cols, width) => {
    // 拼圖各方塊絕對定位
    const [layout, setLayout] = useState([]);

    // 拼圖實際寬度(正方形)
    const [puzzleWidth, setPuzzleWidth] = useState(0);

    // 移動次數
    const [move, setMove] = useState(0);

    const puzzleContainerNode = useRef();
    useEffect(() => {
        console.log('component did mount.');

        // 設定 puzzle 總寬度
        setPuzzleWidth(puzzleContainerNode.current.clientWidth);

        return () => {
            console.log('component did unmount.');
        };
    }, []);

    return {
        puzzleContainerNode,
        totalCols: cols * cols,
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
