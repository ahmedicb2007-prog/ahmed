let trafficDensity = "High";
let emergencyMode = false;
let greenLightDuration = 0;
if (emergencyMode) {
greenLightDuration = 90;
console.log("Emergency detected! Turning light GREEN immediately.");
} else {
if (trafficDensity === "High") {
greenLightDuration = 60;
} else if (trafficDensity === "Medium") {
greenLightDuration = 40;
} else if (trafficDensity === "Low") {
greenLightDuration = 20;
} else {
console.log("Invalid traffic density input.");
}
}
if (greenLightDuration > 0) {
console.log("Traffic Density: " + trafficDensity);
console.log("Green light duration: " + greenLightDuration + " seconds");
}