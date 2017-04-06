import React from 'react'

import '../scss/video_list_item.scss'

const VideoListItem = ({
    video,
    onVideoSelect
}) => {
    function selectVideo() {
        onVideoSelect(video)
    }

    const thumbnail = video.snippet.thumbnails.medium.url
    const title = video.snippet.title

    return (
        <li
            className="VideoListItem"
            onClick={selectVideo}
        >
            <img className="thumbnail" src={thumbnail} alt={title}/>
            <p className="title">{title}</p>
        </li>
    )
}

VideoListItem.propTypes = {
    video: React.PropTypes.object,
    onVideoSelect: React.PropTypes.func
}

export default VideoListItem
