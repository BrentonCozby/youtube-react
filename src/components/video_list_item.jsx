import React from 'react'
import PropTypes from 'prop-types'

import '../scss/video_list_item.scss'

function addCommas(num) {
    return String(num).split('').reverse().reduce((prev, curr, index) => {
        if(index % 3 === 0) return prev + ',' + curr
        return prev + curr
    }).split('').reverse().join('')
}

const VideoListItem = ({
    video,
    onVideoSelect
}) => {
    function selectVideo() {
        onVideoSelect(video)
    }

    const thumbnail = video.snippet.thumbnails.medium.url
    const title = video.snippet.title
    const channel = video.snippet.channelTitle

    return (
        <li
            className="VideoListItem"
            onClick={selectVideo}
        >
            <img className="thumbnail" src={thumbnail} alt={title}/>
            <div className="details">
                <p className="title">{title}</p>
                <p className="channel">{channel}</p>
                <p className="views">{ addCommas(Math.round(Math.random() * 3000000 + 5000)) } views</p>
            </div>
        </li>
    )
}

VideoListItem.propTypes = {
    video: PropTypes.object,
    onVideoSelect: PropTypes.func
}

export default VideoListItem
