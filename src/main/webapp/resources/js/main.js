let xValue, yValue, rValue;
canvas.addEventListener("click", (event) => {
        let position = getRelativeCoords(event);
        xValue = position.x;
        yValue = position.y;
        //setPointer(xValue, yValue);
        xValue = xValue - 150;
        yValue = 180 - yValue;
        //const k = rValue / 140
        //xValue = (xValue * k).toFixed(1);
        //yValue = (yValue * k).toFixed(1);
        alert('x coordinate = ' + xValue + ' y coordinate = ' + yValue);
});

function getRelativeCoords(event) {
    return {x: event.offsetX, y: event.offsetY};
}