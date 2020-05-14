import React, { Component } from 'react';
import data from "../data/en_US.json";
import { Player } from 'video-react';


class Video extends Component {
    render() {
        return (
            <Player
                playsInline
                src={data.videoembed.src}
            />

        );
    }
};

export default Video;