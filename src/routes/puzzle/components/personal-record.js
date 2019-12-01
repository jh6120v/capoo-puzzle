import React from 'react';
import PropTypes from 'prop-types';
import {
    PersonalRecordInner,
    PersonalRecordItem, PersonalRecordItemContent,
    PersonalRecordItemTitle,
    PersonalRecordTitle, PersonalRecordWrap
} from "../styles/puzzle-style";

const PersonalRecord = ({ record }) => {
    return (
        <PersonalRecordWrap>
            <PersonalRecordTitle>YOUR BEST</PersonalRecordTitle>
            <PersonalRecordInner>
                {
                    Object.keys(record).sort().map((val) => {
                        return (
                            <PersonalRecordItem key={val}>
                                <PersonalRecordItemTitle>{val}</PersonalRecordItemTitle>
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
