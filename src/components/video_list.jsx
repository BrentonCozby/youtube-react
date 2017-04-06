import React from 'react'
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
    videos: React.PropTypes.array,
    onVideoSelect: React.PropTypes.func
}

export default VideoList
