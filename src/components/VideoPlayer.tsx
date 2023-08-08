/*
 * src/components/VideoPlayer.tsx
 * Contains the preview video player with a mute and unmute button
 * mute is on by default
 */
import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    //mute or unmute  
    const handleToggleMute = () => {
        //if video exists
        if (videoRef.current) {
            //perform a not on the mute variable
            setIsMuted(!isMuted);
            videoRef.current.muted = isMuted;
            //videoRef.current.muted = !videoRef.current.muted;
            //setIsMuted(videoRef.current.muted);
        }
    };


    useEffect(() => {
        //update the video timeline
        const handleTimeUpdate = () => {
            setCurrentTime(videoRef.current?.currentTime || 0);
        };

        //if video exits update the handle timeline function
        if (videoRef.current) {
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }

        //remove the update timeline function after updating the timeline
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    //handle playing of the video
    const handlePlay = () => {
        //if video exists
        if (videoRef.current) {
            if (isPlaying) {
                //update muting mechanism
                videoRef.current.muted = isMuted;

                //pause the video and update the state
                videoRef.current.pause();
                setPlaying(false);
            }
            else {
                //play the video and update the state
                videoRef.current.play();
                setPlaying(true);
            }
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        setCurrentTime(time);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
        }
    };

    return (
        <div className = 'videoPlayerContainer'>
            <video ref = {videoRef} className = 'videoPlayer' controls = {false} muted = {true}>
                <source
                src = 'https://www.w3schools.com/html/mov_bbb.mp4'
                type = "video/mp4"
                />
                <p>Your browser does not support the video tag.</p>
            </video>
            <div className="videoCustomontrols">
                <button className="playButton" onClick={handlePlay}>
                    { isPlaying ? 'Pause' : 'Play'}
                </button>
                <input
                    type="range"
                    className="timeline"
                    min="0"
                    max={videoRef.current?.duration || 100}
                    step="0.01"
                    onChange={handleSeek}
                    value={currentTime}
                />
                <button className = 'muteButton' onClick = {handleToggleMute}>
                    { isMuted  ? 'Mute' : 'unMute'}
                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
