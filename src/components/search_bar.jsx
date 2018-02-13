import React, { Component } from 'react'
import PropTypes from 'prop-types'
import searchIcon from '../../public/search.png'

import '../scss/search_bar.scss'

class SearchBar extends Component {

    state = {
        term: ''
    }

    static propTypes = {
        videoSearch: PropTypes.func
    }

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onKeyPress = (e) => {
        if(e.key.toLowerCase() === 'enter') {
            this.props.videoSearch(this.state.term)
        }
    }

    submitSearch = () => {
        this.props.videoSearch(this.state.term)
    }

    render() {
        return (
            <div className="search-bar-container">
                <div className="SearchBar">
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        onKeyPress={this.onKeyPress}
                        placeholder="Bamboo houses"
                    />
                    <button onClick={this.submitSearch}>
                        <img src={searchIcon} alt="search icon" className="search-icon"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchBar
