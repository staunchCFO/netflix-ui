import { ArrowBackIosOutlined } from "@material-ui/icons"
import sampleVideo from "../../assets/video/test.mp4"
import "./style.scss"

const Watch = () => {
    return (
        <div className="watch">
            <div className="watch__backBtn">
                <ArrowBackIosOutlined />
                Home
            </div>
            <video 
                controls
                autoPlay
                progress
                src={sampleVideo}
            />
        </div>
    )
}

export default Watch
