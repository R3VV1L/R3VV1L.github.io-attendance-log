import './ButtonTable.css';
import { ArrowRight } from '../../../assets/arrows/ArrowRight.tsx';
import { ArrowLeft } from '../../../assets/arrows/ArrowLeft.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';

export const ButtonTable = () => {
    // @ts-ignore
    const tableLength = useSelector((state: RootState) => state.tableLength);

    return (
        <div className="button-table">
            <div className="button-table-border" />
            <button className="btn-arl">
                <ArrowLeft />
            </button>
            <button
                className="btn-arr"
                onClick={() => {
                    console.log('pipop');
                }}
            >
                <ArrowRight />
            </button>
            <div className="button-table-text">
                {tableLength} из {tableLength}
            </div>
        </div>
    );
};
