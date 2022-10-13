const loggingFunction = (funcArg) => {
    funcArg();
}
function invoked() {
    console.log("hi")
}

loggingFunction(invoked)


function electricMixer(attachment) {
    console.log(`This mixer is now: ${attachment()}`)
}
function whisk() {
    return "whisking"
}

electricMixer(() => {
    return "spiralizing"
})

electricMixer(whisk)