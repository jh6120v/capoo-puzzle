import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

const Competition = () => {
    const dispatch = useDispatch();
    const { roomId } = useSelector((state) => state.competition);

    useEffect(() => {
        if (roomId !== null) {
            // 監聽 firebase
        }

        return () => {
            if (roomId !== null) {
                // 移除監聽 firebase
            }
        };
    }, [roomId]);

    return (
        <div>

        </div>
    );
};

export default Competition;
