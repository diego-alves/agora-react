import { useState } from 'react';
import './App.css';
import AgoraUIKit from 'agora-react-uikit';

function App() {
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
    appId: '3ab9356bb1fd42b0a2c468de0ce392c7',
    channel: 'test',
    token:
      '007eJxTYNDdZJM59S6DW8kv1UrH/xr/O8v5p+wUKhDtMbVjztvGeFeBwTgxydLY1CwpyTAtxcQoySDRKNnEzCIl1SA51djSKNncRK8htSGQkWFTySpWRgYIBPFZGEpSi0sYGAC1Wx2E',
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
}

export default App;
