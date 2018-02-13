import React from 'react'
import PropTypes from 'prop-types'

import '../scss/video_detail.scss'

const VideoDetail = ({ video }) => {
    if(!video) return <div>Loading...</div>

    const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="VideoDetail">
            <div className="embed-responsive">
                <iframe src={embedUrl}></iframe>
            </div>
            <div className="details">
                <p className="title">{video.snippet.title}</p>
                <p className="channel">{video.snippet.channelTitle}</p>
                <p className="description">{video.snippet.description}</p>
            </div>
        </div>
    )
}

VideoDetail.propTypes = {
    video: PropTypes.object
}

export default VideoDetail
