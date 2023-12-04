import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(({type: event.target.dataset.type}),
            () => {
            this.props.searchMovies(this.state.search, this.state.type)
            })
    }

    render() {
        const {search, type} = this.state

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
                    <button className="btn search-btn" onClick={() => this.props.searchMovies(search, type)}>
                        Search
                    </button>
                    <div>
                        <label>
                            <input className="with-gap" type="radio" name="type" data-type="all"
                                   onChange={this.handleFilter}
                                   checked={type === "all"}/>
                            <span>all</span>
                        </label>
                        <label>
                            <input className="with-gap" type="radio" name="type" data-type="movie"
                                   onChange={this.handleFilter}
                                   checked={type === "movie"}/>
                            <span>movie</span>
                        </label>
                        <label>
                            <input className="with-gap" type="radio" name="type" data-type="series"
                                   onChange={this.handleFilter}
                                   checked={type === "series"}/>
                            <span>series</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export {Search};
