const socket=io('');
const videoGrid=document.querySelector('#video-grid');
const myVideo=document.createElement('video');
myVideo.muted=true;

var peer = new Peer(undefined,{
    path:'/peerjs',
    host:'/',
    port:'3030'
}); 

let myVideoStream=
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream=>{
    myvideoStream=stream;
    addVideoStream(myVideo,stream);
    console.log(1)
    peer.on('call',call=>{
        call.answer(stream);
        const video=document.createElement('video');
        call.on('stream',userVideoStream=>{
            addvideoStream(video,userVideoStream);
        });
    });
    console.log(2)
    socket.on('user-connected',(userId)=>{
        connectToNewUser(userId, stream);
    });
});

peer.on('open',id=>{
    socket.emit('join-room',ROOM_ID, id)
    console.log(id)
});


const connectToNewUser=(userId, stream)=>{
    const call =peer.call(userId, stream);
    console.log('called'+ userId);
    const video=document.createElement('video');
    call.on('stream',userVideoStream=>{
        addVideoStream(video,userVideoStream);
    });
};

const addVideoStream=(video,stream)=>{
    video.srcObject=stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
    });
    videoGrid.append(video);
};