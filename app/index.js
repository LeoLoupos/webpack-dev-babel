function merge(...z){
    let a = [1,2,3];
    let b = [...a, ...z];
    console.log(b);
    return b;
}

merge(4,5,6);

//Object

let magical = true;
let power = 2;

let wizard = {
    magical: true,
    power: 10
};

// let magical = wizard.magical;
// let power = wizard.power;

({ magical, power } = wizard);

console.log(magical, power);

//Map

let points = [10, 20, 30];


points = points.map(element => {
    return element + 1;
});

console.log(points);

//filter

let scores = [90, 85, 67, 71, 70, 55 ,92];

let passing = scores.filter(element => {
    return element >= 70;
})

console.log(passing);