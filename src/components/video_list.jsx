import React from 'react'
import PropTypes from 'prop-types'
import VideoListItem from './video_list_item'

import '../scss/video_list.scss'

const VideoList = ({
    videos,
    onVideoSelect
}) => {
    const videoItems = videos.map(video => (
        <VideoListItem
            key={video.etag}
            video={video}
            onVideoSelect={onVideoSelect}
        />
    ))

    return (
        <ul className="VideoList">
            {videoItems}
        </ul>
    )
}

VideoList.proptypes = {
    videos: PropTypes.array,
    onVideoSelect: PropTypes.func
}

export default VideoList
