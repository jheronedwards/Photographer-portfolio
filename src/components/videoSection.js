import React from "react"

const VideoSection = () => {
  return (
    <div className="video-section">
    <div className="title">
            <h3>#MulberryEngland</h3>
          </div>
      <div className="container">
        <div className="video-player">
          <video
            poster="//cdn.shopify.com/s/files/1/0566/9873/2734/files/Capture_d_ecran_2021-05-06_a_11.09.31_500x.png?v=1620292188"
            controls
            type="video/mp4"
            src="https://cdn.shopify.com/s/files/1/0566/9873/2734/files/mulberryxcolesprouse-2.mp4?v=1620292061"
          />
        </div>
        <div className="video-content">
          
          <div className="content">
            <p> Here’s a little something I filmed for @mulberryengland a couple months ago. 
            Special appreciation to @lucan_gillespie and @lirisaw for letting me drag them out to the English countryside for a day. 
            And an even larger thank you to @glenn_wassall For hosting.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
