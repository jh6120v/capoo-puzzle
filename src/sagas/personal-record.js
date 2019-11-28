import { PERSONAL_RECORD } from "../constants";

export function* setAllPersonalRecord({ payload }) {
    try {
        yield localStorage.setItem(PERSONAL_RECORD, JSON.stringify(payload));
    } catch (e) {
        console.log(e);
    }
}

export function* setPersonalRecord({ payload }) {
    try {
        const record = yield JSON.parse(localStorage.getItem(PERSONAL_RECORD));
        if (record !== null) {
            yield localStorage.setItem(PERSONAL_RECORD, JSON.stringify({
                ...record,
                [payload.level]: {
                    secs: payload.secs,
                    moves: payload.moves
                }
            }));
        } else {
            yield localStorage.setItem(PERSONAL_RECORD, JSON.stringify({
                [payload.level]: {
                    secs: payload.secs,
                    moves: payload.moves
                }
            }));
        }
    } catch (e) {
        console.log(e);
    }
}
