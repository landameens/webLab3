const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const drawCanvas = (r) => {
    clearCanvas();
    drawSquare();
    drawCircle();
    drawTriangle();
    drawLines();
    drawText(r);
    drawPoints();
}

const setPoint = (x, y, result) => {
    ctx.beginPath();
    ctx.fillStyle = result ? 'green' : 'red';
    ctx.moveTo(x, y);
    ctx.arc(x, y, 4, 0, (Math.PI * 2), true);
    ctx.fill();
    ctx.closePath();
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
    ctx.moveTo(0, 180);
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
    let negativeR;
    let negativeHalfR;
    if (r == 0){
        r = "R";
        halfR = "R/2";
        negativeHalfR = "-R/2";
        negativeR = "-R";
    } else {
        halfR = r / 2;
        negativeHalfR = -halfR;
        negativeR = -r;
    }

    ctx.font = "15px Verdana";
    ctx.fillText(halfR, 212, 170);
    ctx.fillText(negativeHalfR, 72, 170);
    ctx.fillText(halfR, 160, 115);
    ctx.fillText(negativeHalfR, 160, 255);

    ctx.fillText(r, 285, 170);
    ctx.fillText(negativeR, 5, 170);
    ctx.fillText(r, 160, 45);
    ctx.fillText(negativeR, 160, 325);

    ctx.fillText("X", 340, 180);
    ctx.fillText("Y", 165, 10);
}

const clearCanvas = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const drawPoints = () => {
    rValue = $('input[type="radio" i]:checked').val();
    drawDot(rValue);
}

const drawDot = (r) => {
    const myRows = [];
    const $headers = $("#table th");
    $("#table tr").each(function (index) {
        $cells = $(this).find("td");
        myRows[index] = {};
        $cells.each(function (cellIndex) {
            myRows[index][$($headers[cellIndex]).html()] = $(this).html().replace(/\s/g, "");
        })
    })
    for (let i = 0; i < myRows.length; i++) {
        const thisR = myRows[i]['R'];
        if(thisR == parseFloat(r)){
            const x = myRows[i]['X'];
            const y = myRows[i]['Y'];
            const result = myRows[i]['Result'];
            const coord = getCanvasCoord(x, y, thisR);
            setPoint(coord.x, coord.y, (result == 'true'));
        }
    }
}

const getCanvasCoord = (x, y, r) => {
    const k = 140 / r;
    const xCoordinate = (x * k) + 150;
    const yCoordinate = 180 - (y * k);
    return {
        "x": xCoordinate,
        "y": yCoordinate,
    }
}