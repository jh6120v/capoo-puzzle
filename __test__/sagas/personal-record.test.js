import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { setAllPersonalRecord, setPersonalRecord } from "../../src/sagas/personal-record";
import { PERSONAL_RECORD } from "../../src/constants";

describe('test personal-record saga.', () => {
    it('success to set all personal record ', () => {
        const fakePayload = { payload: { test: 'test' } };

        testSaga(setAllPersonalRecord, fakePayload)
            .next()
            .call([localStorage, 'setItem'], PERSONAL_RECORD, JSON.stringify(fakePayload.payload))
            .next()
            .isDone();
    });

    it('fail to set all personal record. ', () => {
        const error = new Error('error');
        const fakePayload = { payload: { test: 'test' } };

        return expectSaga(setAllPersonalRecord, fakePayload)
            .provide([
                [matchers.call.fn(localStorage.setItem), throwError(error)]
            ])
            .dispatch(setAllPersonalRecord)
            .run();
    });

    it('success to set personal record.', () => {
        const fakePayload = {
            payload: {
                level: 'level',
                secs: 10,
                moves: 10,
                time: 201912321312
            }
        };

        const data = '"{"level":"hard","secs":100,"moves":100,"time":2019123212}"';

        const record = {
            level: 'hard',
            secs: 100,
            moves: 100,
            time: 2019123212
        };

        testSaga(setPersonalRecord, fakePayload)
            .next()
            .call([localStorage, 'getItem'], PERSONAL_RECORD)
            .next(data)
            .call([JSON, 'parse'], data)
            .next(record)
            .call([localStorage, 'setItem'], PERSONAL_RECORD, JSON.stringify({
                ...record,
                [fakePayload.payload.level]: {
                    secs: fakePayload.payload.secs,
                    moves: fakePayload.payload.moves,
                    time: fakePayload.payload.time
                }
            }))
            .next()
            .isDone();
    });

    it('success to set personal record when record not exist', () => {
        const fakePayload = {
            payload: {
                level: 'level',
                secs: 10,
                moves: 10,
                time: 201912321312
            }
        };

        const data = null;
        const record = null;

        testSaga(setPersonalRecord, fakePayload)
            .next()
            .call([localStorage, 'getItem'], PERSONAL_RECORD)
            .next(data)
            .call([JSON, 'parse'], data)
            .next(record)
            .call([localStorage, 'setItem'], PERSONAL_RECORD, JSON.stringify({
                [fakePayload.payload.level]: {
                    secs: fakePayload.payload.secs,
                    moves: fakePayload.payload.moves,
                    time: fakePayload.payload.time
                }
            }))
            .next()
            .isDone();
    });

    it('fail to set personal record. ', () => {
        const error = new Error('error');
        const fakePayload = { payload: { test: 'test' } };

        return expectSaga(setPersonalRecord, fakePayload)
            .provide([
                [matchers.call.fn(localStorage.getItem), throwError(error)]
            ])
            .dispatch(setPersonalRecord)
            .run();
    });
});
