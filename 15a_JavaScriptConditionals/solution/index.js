let age = 15;

if(age <= 17) {
    console.log("Underage");
}
else {
    console.log("18 or over");
}

if(age <= 17) {
    console.log("Underage")
}
else if(age <=65) {
    console.log("Insurable");
}
else {
    console.log("out of range");
}

age <= 17 ? console.log("Underage") : console.log("18 or over");