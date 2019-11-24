import React from 'react';
import PropTypes from 'prop-types';
import {
    PersonalRecordInner,
    PersonalRecordItem, PersonalRecordItemContent,
    PersonalRecordItemTitle,
    PersonalRecordTitle, PersonalRecordWrap
} from "../styles/puzzle-style";
import { LEVEL_MAP } from "../../../constants";

const PersonalRecord = ({ record }) => {
    return (
        <PersonalRecordWrap>
            <PersonalRecordTitle>YOUR BEST</PersonalRecordTitle>
            <PersonalRecordInner>
                {
                    Object.keys(record).map((val) => {
                        return (
                            <PersonalRecordItem key={val}>
                                <PersonalRecordItemTitle>{LEVEL_MAP[val]}</PersonalRecordItemTitle>
                                <PersonalRecordItemContent>
                                    {
                                        record[val] ? (
                                            <>
                                                <div>
                                                    <div>{record[val].secs}</div>
                                                    <div>secs</div>
                                                </div>
                                                <div>
                                                    <div>{record[val].moves}</div>
                                                    <div>moves</div>
                                                </div>
                                            </>
                                        ) : '--'
                                    }
                                </PersonalRecordItemContent>
                            </PersonalRecordItem>
                        );
                    })
                }
            </PersonalRecordInner>
        </PersonalRecordWrap>
    );
};

PersonalRecord.propsTypes = {
    record: PropTypes.object
};

export default PersonalRecord;
