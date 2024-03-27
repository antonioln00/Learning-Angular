var brand:string = 'Chevrolet';
var message: string = `Today it's a happy day! I just bought a new ${brand} car`;

var x = 15;
console.log('antes', x);


function test() {
    var x = 10;
    console.log('dentro', x);
}

test()
console.log(x);


let y = 15;
console.log("antes", y);


function tesLet() {
    y = 25;
    console.log("dentro", y);
}

tesLet()

console.log(y);
