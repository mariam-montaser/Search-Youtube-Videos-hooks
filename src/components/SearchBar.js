import React, { useState} from 'react';

export const SearchBar = ({onSearchSubmit}) => {
    const [term, setTerm] = useState('news');

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
                <form className="ui form" onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" className="input" value={term} onChange={(e) => setTerm(e.target.value)}/>
                    </div>
                </form>
            </div>
    )
}
