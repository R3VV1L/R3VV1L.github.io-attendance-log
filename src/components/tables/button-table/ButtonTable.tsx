import './ButtonTable.css';
import { ArrowRight } from '../../../assets/arrows/ArrowRight.tsx';
import { ArrowLeft } from '../../../assets/arrows/ArrowLeft.tsx';

interface ButtonTableProps {
    currentPage: number;
    recordsPerPage: number;
    filteredData: any;
    setCurrentPage: (page: number) => void;
    getPaginatedData: any;
}

export const ButtonTable = ({
    currentPage,
    recordsPerPage,
    filteredData,
    setCurrentPage,
    getPaginatedData,
}: ButtonTableProps) => {
    const tableLength = filteredData.length;

    return (
        <div className="button-table">
            <div className="button-table-border">
                <button
                    className="btn-arl"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    <ArrowLeft />
                </button>
                <div className="button-table-text">
                    {getPaginatedData().length} из {tableLength}
                </div>
                <button
                    className="btn-arr"
                    disabled={
                        currentPage ===
                        Math.ceil(filteredData.length / recordsPerPage)
                    }
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};
