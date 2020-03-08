import { useState } from 'react';
import { pluckFirst, useObservable, useObservableState } from 'observable-hooks';
import {
    distinctUntilChanged,
    filter,
    map,
    repeat,
    scan,
    switchMap,
    takeWhile,
    tap,
    withLatestFrom
} from 'rxjs/operators';
import { animationFrameScheduler, of } from 'rxjs';

const useTimer = (initialTime = 0, direction = 'forward', onSuccess) => {
    const [timerState, setTimerState] = useState('reset');

    const timerState$ = useObservable(pluckFirst, [timerState]);
    const countDown$ = useObservable(() => timerState$.pipe(
        map((state) => state === 'reset'),
        distinctUntilChanged(),
        switchMap((isReset) => {
            // console.log("isReset", isReset);

            return isReset
                ? of(initialTime)
                : // high accuracy timing
                  // repetitively calculate the diff
                of(animationFrameScheduler.now(), animationFrameScheduler).pipe(
                    repeat(),
                    // extract seconds
                    map((startTime) => ~~((Date.now() - startTime) / 1000)),
                    distinctUntilChanged(),
                    withLatestFrom(timerState$),
                    filter(([, state]) => state === 'started'),
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
    ));

    const seconds = useObservableState(countDown$, initialTime);

    return {
        timerState,
        setTimerState,
        seconds
    };
};

export default useTimer;
