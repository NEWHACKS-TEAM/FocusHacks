function changeReferenceScore(predictions){
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

    const hashTableScores = {
        "Not Focused": -1,
        "Focused": 0
    }
    const {className} = mostProbablePrediction
    return hashTableScores[className]
}