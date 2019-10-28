import React, { useEffect, useRef, useState } from 'react';
import { ContainerInner } from '../../../styles/layout-style';
import { convertToGrids, getGrids, getTiles } from '../../../commons/utils';
import { useDispatch, useSelector } from 'react-redux';
import { previewGridsSet, gridsSet } from "../../../modules/grids";
import { Grid, GridContainer } from "../styles/home-style";

const Home = () => {
    const dispatch = useDispatch();
    const [moves, setMoves] = useState(0);
    const [times, setTimes] = useState(0);
    const [isPreview, setIsPreview] = useState(true);
    const { columns, rows, img } = useSelector((state) => state.personal);
    const { previewGrids, grids } = useSelector(state => state.grids);

    const node = useRef();
    // console.log(node.current.clientWidth);

    useEffect(() => {
        const tiles = getTiles(columns * rows);
        const previewGrids = convertToGrids(tiles, columns, rows);

        dispatch(previewGridsSet({
            grids: previewGrids
        }));
    }, [dispatch, columns, rows, img]);

    return (
        <ContainerInner>
            <GridContainer ref={node}>
                {
                    isPreview ?
                        previewGrids.map((row) => row.map((column) => (
                            <Grid
                                key={column.label}
                                width={node.current.clientWidth / columns}
                                height={node.current.clientWidth / rows}
                            >{column.label}</Grid>
                        ))) :
                        grids.map((row) => row.map((column) => (
                            <div key={column.label}>{column.label}</div>
                        )))
                }
            </GridContainer>
        </ContainerInner>
    );
};

export default Home;
