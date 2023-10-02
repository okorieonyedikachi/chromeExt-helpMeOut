recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;
    // Creating a FormData object to send the recordedBlob as a file
    let formData = new FormData();
    formData.append("video", recordedBlob, "screen-recording.webm");
    // Defining the URL of your endpoint
    let endpointUrl = "https://video-api.up.railway.app/api/upload";
    // Make the POST request to the endpoint
    fetch(endpointUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
        // You can handle the response here if needed
      })
      .then((data) => {
        console.log("Video uploaded successfully:", data);
        let videoViewUrl = "http://localhost:3000/video/hvccb"; // Replace with the actual URL
        window.location.href = videoViewUrl;
      })
      .catch((error) => {
        console.error("Error uploading video:", error);
      });
  };
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");
    sendResponse(`processed: ${message.action}`);
    const audioPreference = message.audioPreference;
    const videoPreference = message.videoPreference;
    const mediaConstraints = {
      audio: audioPreference,
      video: videoPreference
        ? {
            width: 9999999999,
            height: 9999999999,
          }
        : false,
    };
    navigator.mediaDevices
      .getDisplayMedia(mediaConstraints)
      .then((stream) => {
        onAccessApproved(stream);
      })
      .catch((error) => {
        alert("Media Access Error: Enable Video capture.");
        console.error("Error accessing media devices:", error);
      });
  }
  if (message.action === "stopvideo") {
    console.log("stopping video");
    sendResponse(`processed: ${message.action}`);
    if (!recorder) return console.log("no recorder");
    recorder.stop();
  }
});