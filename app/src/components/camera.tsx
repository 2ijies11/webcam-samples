import Webcam from "react-webcam";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const CameraView = () => {
    return (
        <Webcam
            videoConstraints={videoConstraints}
        />
    );
}

export default CameraView;
