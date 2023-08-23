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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSearch();
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            event.target.placeholder = '';
        }
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            event.target.placeholder = 'Поиск...';
        }
    };

    return (
        <form className="search-box" onSubmit={handleSubmit}>
            <input
                className="search-box-text"
                type="search"
                placeholder="Поиск..."
                required
                value={query}
                onChange={(event) => {
                    setQuery(event.target.value);
                    handleInputChange(event);
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyPress={handleKeyPress}
            />
            <button type="submit" className="search-bottom">
                <Magnifier />
            </button>
        </form>
    );
};
