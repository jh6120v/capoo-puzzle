import React, { useEffect } from 'react';
import { ContainerInner } from '../../../styles/layout-style';
import { getGrids } from '../../../commons/utils';
import { useDispatch, useSelector } from 'react-redux';
import { personalSettingGridsSet } from '../../../modules/personal-setting';

const Home = () => {
    const dispatch = useDispatch();
    const { columns, rows, move, grids } = useSelector((state) => state.personal);

    useEffect(() => {
        const newGrids = getGrids(columns, rows);
        dispatch(personalSettingGridsSet({
            grids: newGrids
        }));
    }, [dispatch, columns, rows]);

    return (
        <ContainerInner>
            {
                grids.map((row) => row.map((column) => (
                    <div key={column.label}>{column.label}</div>
                )))
            }
        </ContainerInner>
    );
};

export default Home;
