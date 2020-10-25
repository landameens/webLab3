const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", function () {
    drawCanvas(0);
});

const drawCanvas = (r) => {
    clearCanvas();
    drawSquare();
    drawCircle();
    drawTriangle();
    drawLines();
    drawText(r);
}

const setPoint = (x, y, result) => {
    ctx.moveTo(x, y);
    if(result){
        ctx.fillStyle = 'green';
    } else {
        ctx.fillStyle = 'red';
    }
    ctx.arc(x, y, 3, 0, (Math.PI * 2), true);
    ctx.fill();
}

const drawSquare = () => {
    ctx.fillStyle = "#ffbb91";
    ctx.fillRect(150, 40, 140, 140);
}

const drawCircle = () => {
      ctx.moveTo(150, 180);
      ctx.arc(150, 180, 140, (3 * Math.PI / 2), (Math.PI), true);
      ctx.fill();
}

const drawTriangle = () => {
    ctx.beginPath();
    ctx.moveTo(80, 180);
    ctx.lineTo(150, 250);
    ctx.lineTo(150, 180);
    ctx.lineTo(80, 180);
    ctx.fill();
    ctx.closePath();
}

const drawLines = () => {
    ctx.fillStyle = "#64958f";
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 330);
    ctx.moveTo(0, 180)
    ctx.lineTo(330, 180);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(147, 40);
    ctx.lineTo(153, 40);
    ctx.stroke();

    ctx.moveTo(147, 110);
    ctx.lineTo(153, 110);
    ctx.stroke();

    ctx.moveTo(220, 177);
    ctx.lineTo(220, 183);
    ctx.stroke();

    ctx.moveTo(290, 177);
    ctx.lineTo(290, 183);
    ctx.stroke();

    ctx.moveTo(147, 250);
    ctx.lineTo(153, 250);
    ctx.stroke();

    ctx.moveTo(147, 320);
    ctx.lineTo(153, 320);
    ctx.stroke();

    ctx.moveTo(80, 177);
    ctx.lineTo(80, 183);
    ctx.stroke();

    ctx.moveTo(10, 177);
    ctx.lineTo(10, 183);
    ctx.stroke();

    ctx.moveTo(320, 175);
    ctx.lineTo(330, 180);
    ctx.lineTo(320, 185);
    ctx.stroke();

    ctx.moveTo(145, 10);
    ctx.lineTo(150, 0);
    ctx.lineTo(155, 10);
    ctx.stroke();
    ctx.closePath();
}

const drawText = (r) => {
    let halfR;
    if (r == 0){
        r = "R";
        halfR = "R/2";
    } else {
        halfR = r / 2;
    }

    ctx.font = "15px Verdana";
    ctx.fillText(halfR, 212, 170);
    ctx.fillText(halfR, 72, 170);
    ctx.fillText(halfR, 160, 115);
    ctx.fillText(halfR, 160, 255);

    ctx.fillText(r, 285, 170);
    ctx.fillText(r, 5, 170);
    ctx.fillText(r, 160, 45);
    ctx.fillText(r, 160, 325);

    ctx.fillText("X", 340, 180);
    ctx.fillText("Y", 165, 10);
}

const clearCanvas = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}