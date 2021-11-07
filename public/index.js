// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = 'https://teachablemachine.withgoogle.com/models/X118HFsQb/';


let model, webcam, labelContainer, maxPredictions, performanceIndex, isTracingUserActivity;
performanceIndex = 1000;

isTracingUserActivity = false;

document.querySelector('#resume').style.display = "none";
document.querySelector('#pause').style.display = "none";

document.querySelector('#start').addEventListener('click', async () => {
  document.querySelector("#message").textContent = "";
  document.querySelector('#start').style.display = "none"; 
  isTracingUserActivity = true;
  document.querySelector('#loadingSpinner').innerHTML = `
  <div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  `
  const initialized = await init();
  if (initialized){
    document.querySelector('#loadingSpinner').innerHTML = '';
    document.querySelector('#pause').style.display = "";
  }
})

document.querySelector('#resume').addEventListener('click', async () => {
  performanceIndex = 100;
  document.querySelector('#resume').style.display = "none";
  document.querySelector('#pause').style.display = "";
  isTracingUserActivity = true;
})

document.querySelector('#pause').addEventListener('click', () => {
  document.querySelector('#resume').style.display = "";
  document.querySelector('#pause').style.display = "none";
  isTracingUserActivity = false;
})


// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(500, 500, flip, ); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
    return true;
}

async function loop() {
    webcam.update(); // update the webcam frame
    if (isTracingUserActivity){
      await predict();
    }    
    window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    const change = changesInReferenceScore(prediction)
    performanceIndex += change
    console.log(performanceIndex)
    if (performanceIndex <= 0){
      pauseTrackingUserActivity();
      await sendEmail();      
    }
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}

async function sendEmail(){
  await fetch("/email", {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({sendEmail: true})
  });
};

function pauseTrackingUserActivity(){
  document.querySelector('#pause').click();
}
