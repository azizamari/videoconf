const videoGrid=document.querySelector('#video-grid');
const myVideo=document.createElement('video');
myVideo.muted=true;

let myVideoStream=
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream=>{
    myvideoStream=stream;
    addVideoStream(myVideo,stream);
});

const addVideoStream=(video,stream)=>{
    video.srcObject=stream;
    video.addEventListener('loaded+metadata',()=>{
        video.play();
    });
    videoGrid.append(video);
};