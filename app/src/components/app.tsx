import { useEffect, useState } from "react";
import CameraView from "./camera";

const App = () => {
    const [isBackground, setIsBackground] = useState(false);

    useEffect(() => {
        const visibilityCheck = () => setIsBackground(document.hidden);
        document.addEventListener('visibilitychange', visibilityCheck);
        return () => document.removeEventListener('visibilitychange', visibilityCheck);
    }, []);

    return (
        <>
            <div>WebCAM TEST</div>
            {!isBackground && <CameraView />}
        </>
    );

}

export default App;
