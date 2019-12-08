import each from 'jest-each';
import personalRecordReducer, { personalRecordAllSet, personalRecordSet } from "../../src/modules/personal-record";

describe('test personal-record modules.', () => {
    each([
        [
            'personalRecordAllSet',
            personalRecordAllSet,
            {
                type: '@@PERSONAL_RECORD/RECORD_ALL_SET',
                payload: {}
            }
        ],
        [
            'personalRecordSet',
            personalRecordSet,
            {
                type: '@@PERSONAL_RECORD/RECORD_SET',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to change personal record.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });

    it('should merge personalRecordAllSet and remove duplicated property when action is dispatched.', () => {
        const state = {
            easy: null,
            medium: null,
            hard: null
        };

        const result = personalRecordReducer(state, personalRecordAllSet({
            easy: 'easy',
            medium: 'medium',
            hard: 'hard'
        }));

        expect(result).toEqual({
            easy: 'easy',
            medium: 'medium',
            hard: 'hard'
        });
    });

    it('should merge personalRecordSet and remove duplicated property when action is dispatched.', () => {
        const state = {
            easy: null,
            medium: null,
            hard: null
        };

        const result = personalRecordReducer(state, personalRecordSet({
            level: 'easy',
            secs: 10,
            moves: 10,
            time: 201112343
        }));

        expect(result).toEqual({
            easy: {
                secs: 10,
                moves: 10,
                time: 201112343
            },
            medium: null,
            hard: null
        });
    });
});
