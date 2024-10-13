"use client"

import { useEffect } from "react";

const LiveFeed = () => {

    useEffect(() => {
        const video = document.getElementById('fishVideo') as HTMLVideoElement;
        const audio = document.getElementById('fishAudio') as HTMLAudioElement;

        const handlePlay = () => {
            audio.play().catch(error => console.error("Audio playback failed:", error))
        };

        const handlePause = () => {
            audio.pause();
        };

        const handleSeeked = () => {
            audio.currentTime = video.currentTime;
        };

        const enableAudio = () => {
            video.addEventListener('play', handlePlay);
            video.addEventListener('pause', handlePause);
            video.addEventListener('seeked', handleSeeked);
            document.removeEventListener('click', enableAudio);
        };

        document.addEventListener('click', enableAudio);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('seeked', handleSeeked);
            document.removeEventListener('click', enableAudio);
        };

    }, []);

    return (
        <>
            <h1 className="font-bold opacity-70 mb-4">Live feed</h1>
            <div className="h-full relative">
                <video
                    autoPlay
                    loop
                    controls
                    muted
                    className="w-full rounded-lg"
                    width="320"
                    height="240"
                    id="fishVideo"
                >
                    <source src="/live-feed.mkv" type="video/mp4"></source>
                    Your browser does not support the video tag
                </video>
                <audio id="fishAudio" loop>
                    <source src="/fish-pond-sound.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </>
    )
}

export default LiveFeed