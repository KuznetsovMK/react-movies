import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        filter: 'all'
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    };

    handleFilter = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {search, filter} = this.state

        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='search'
                        type='search'
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({search: e.target.value})
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn search-btn" onClick={() => this.props.searchMovies(search, filter)}>
                        Search
                    </button>
                    <div>
                        <label>
                            <input type="radio" name="filter" value="all" onChange={this.handleFilter}
                                   checked={filter === "all"}/>
                            <span>all</span>
                        </label>
                        <label>
                            <input type="radio" name="filter" value="movie" onChange={this.handleFilter}
                                   checked={filter === "movie"}/>
                            <span>movie</span>
                        </label>
                        <label>
                            <input type="radio" name="filter" value="series" onChange={this.handleFilter}
                                   checked={filter === "series"}/>
                            <span>series</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export {Search};
