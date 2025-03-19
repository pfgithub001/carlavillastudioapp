export default function HomeVideo () {
    return (
        <div className="HomeVideo">
            <div className="video-container relative w-full aspect-[16/9] hidden sm:block">
                <video
                    className="video-element w-[100%] h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                    src="/video/home_video.mp4"
                    type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="video-container relative w-full aspect-[9/16] sm:hidden">
                <video
                    className="video-element w-full h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                    src="/video/home_video_mb.mp4"
                    type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}