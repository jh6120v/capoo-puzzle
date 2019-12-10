import React from 'react';
import { Grid, GridWrap } from '../styles/puzzle-style';

const PuzzleGrids = ({ prepared, width, grids, cols, image, tips, layoutPositionList, moveHandler }) => {
    return (
        <GridWrap>
            {
                grids.map((item, idx) => {
                    let isSpace = parseInt(item.label) === cols * cols - 1 && prepared === false;
                    const { x, y } = layoutPositionList[item.position];

                    return (
                        <Grid
                            key={item.label}
                            totalWidth={width}
                            width={width / cols}
                            position={layoutPositionList[item.label]}
                            isSpace={isSpace}
                            image={image}
                            onClick={() => moveHandler(idx, item)}
                            style={{ transform: `translate3d(${x}px,${y}px,0)` }}
                        >
                            {tips ? item.label : null}
                        </Grid>
                    )
                })
            }
        </GridWrap>
    );
};

export default PuzzleGrids;
