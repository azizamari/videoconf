const socket=io('');
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

socket.emit('join-room',ROOM_ID)
socket.on('user-connected',()=>{
    connectToUser();
});

const connectToUser=()=>{
    console.log('new user');
};

const addVideoStream=(video,stream)=>{
    video.srcObject=stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
    });
    videoGrid.append(video);
};