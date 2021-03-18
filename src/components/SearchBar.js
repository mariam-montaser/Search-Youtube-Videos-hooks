import React, { Component, useState} from 'react';

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

// export default class SearchBar extends Component {

//     state = {
//         term: 'news'
//     }

//     onInputChange = (e) => {
//         this.setState({term: e.target.value});
//     }

//     onFormSubmit = (e) => {
//         e.preventDefault();
//         this.props.onFormSubmit(this.state.term)
//     }

//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form className="ui form" onSubmit={this.onFormSubmit}>
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input type="text" className="input" value={this.state.term} onChange={this.onInputChange}/>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
