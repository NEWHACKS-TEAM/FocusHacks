function changesInReferenceScore(predictions){
    
    let mostProbablePrediction = {
        className: '',
        probability: 0
    }

    for (const prediction of predictions){
        if (prediction.probability > mostProbablePrediction.probability){
            mostProbablePrediction.className = prediction.className;
            mostProbablePrediction.probability = prediction.probability;
        }
    }
    document.querySelector("#message").textContent = "";
    // if(mostProbablePrediction.probability > 0.9){
    //     if(mostProbablePrediction.className === "Not Focused"){
    //         document.querySelector("#message").textContent = "Come back to work and stay focus!";
    //     }        
    //     if(mostProbablePrediction.className == "Focused"){
    //         document.querySelector("#message").textContent = "Good Job, Keep It Up!";
    //     }
    //     if(mostProbablePrediction.className == "VIOLATING PRIVACY"){
    //         document.querySelector("#message").textContent = "YOU ARE VIOLATING THE PRIVACY POLICY";
    //     }
    // }
    const {className} = mostProbablePrediction
    if (className == "Not Focused"){
        return -1
    } else {
        return 0
    }
}