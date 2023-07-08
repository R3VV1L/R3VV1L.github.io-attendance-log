import './Search.css';
import { Magnifier } from '../../assets/magnifier/Magnifier.tsx';
import { useState } from 'react';

interface SearchProps {
    onSearch: (query: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="box">
            <div className="box-frame-wrapper">
                <div className="box-frame">
                    <div className="box-div">
                        <input
                            className="box-text-wrapper"
                            type="search"
                            placeholder="Поиск..."
                            required
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button
                            className="box-magnifier"
                            onClick={handleSearch}
                        >
                            <Magnifier />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
