import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

import './scss/index.scss'

const API_KEY = 'AIzaSyD0tOaD9-PXFa1eDFGHA5ijCvaONSU3Z30'

function getVideos(term) {
    const result = new Promise((resolve, reject) => {
        YTSearch({key: API_KEY, term: term}, videos => {
            console.log(videos)
            resolve(videos)
        })
    })
    return result
}

class App extends Component {

    constructor(props) {
        super(props)

        getVideos('bamboo house')
        .then(videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            })
        })
    }

    state = {
        videos: [],
        selectedVideo: null
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({ selectedVideo })
    }

    videoSearch = (term) => {
        getVideos(term)
        .then(videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        return (
            <div>
                <SearchBar videoSearch={this.videoSearch} />
                <main className="main-container">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                        onVideoSelect={this.onVideoSelect}
                        videos={this.state.videos}
                    />
                </main>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
