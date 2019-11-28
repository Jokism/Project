function main(z = 16) {
    for (let x = 0; x < z; x++) {
        var divContain = document.createElement("div");
        divContain.id = "miniDiv" + x;
        divContain.className = "paddingDiv";
        document.getElementById('squares').append(divContain);
        for (let y = 0; y < z; y++) {
            var divElem = document.createElement("div");
            divElem.className = "boxDiv";
            divElem.id = "randomC";
            document.getElementById('miniDiv' + x).appendChild(divElem);
        }

    }
    var cubes = document.getElementsByClassName('boxDiv');
    for (var cube of cubes) {
        cube.addEventListener('mouseover', newColour);
    }
    document.getElementById('btn').addEventListener('click', resetColour);
}

function resetColour() {
    document.getElementById("squares").innerHTML = "";
    var dimen = prompt("Enter a new value for pad size:");
    main(dimen);
}

function newColour() {
    this.className = "hover";

    // Trying to have dynamically changing background-color
    // this.id += 'hover';
    // var symbols, colour;
    // symbols = "0123456789ABCDEF";
    // colour = "#";
    // for (var c = 0; c < 6; c++) {
    //     colour = colour + symbols[Math.floor(Math.random() * 16)];
    // }
    // console.log(colour);

    // var el = document.getElementsByClassName('hover');
    // el.style.cssText = 'background-color: ' + colour;


}

main();