import each from 'jest-each';
import {
    headerTitleDefault,
    headerTitleSet,
    prevLinkActClose,
    prevLinkActGoBack,
    prevLinkActSet
} from '../../src/modules/header';

describe('test header modules', () => {
    each([
        [
            'headerTitleDefault',
            headerTitleDefault,
            {
                type: '@@HEADER/TITLE_DEFAULT',
                payload: {}
            }
        ],
        [
            'headerTitleDefault',
            headerTitleSet,
            {
                type: '@@HEADER/TITLE_SET',
                payload: {}
            }
        ],
        [
            'prevLinkActSet',
            prevLinkActSet,
            {
                type: '@@HEADER/PREV_LINK_ACT_SET',
                payload: {}
            }
        ],
        [
            'prevLinkActGoBack',
            prevLinkActGoBack,
            {
                type: '@@HEADER/PREV_LINK_ACT_GO_BACK',
                payload: {}
            }
        ],
        [
            'prevLinkActClose',
            prevLinkActClose,
            {
                type: '@@HEADER/PREV_LINK_ACT_CLOSE',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to change header.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });
});
