const video = document.getElementById('cum_video');
console.log("in proctoring ");
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('../Proctoring/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('../Proctoring/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('../Proctoring/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('../Proctoring/models')
]).then(startVideo);

async function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
      let ans = 0 ;
      setInterval(async () => {
          var time = Number(0) ;
          var count = Number( 0) ;
          let inter =  await setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
            count = Math.max(count ,Number( detections.length) );
            time = time +1;
            ans = count;
             console.log("cur detections 1" ,count);
            if(time >=10){
               clearInterval(inter);
               console.log("cur detections " , count);
            }
        }, 1000);
      },3000);

})


startVideo();