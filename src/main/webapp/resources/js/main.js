let rValue;
$('input[type="radio" i]').on('change', function() {
        rValue = $('input[type="radio" i]:checked').val();
       drawCanvas(rValue);
});

canvas.addEventListener("click", (event) => {
        rValue = $('input[type="radio" i]:checked').val();
        if(!isNaN(rValue)){
            const coord = getNormalCoords(rValue);
            sendValues(coord.x, coord.y, rValue);
        }
});

const sendValues = (x, y, r) => {
    const inputR = document.getElementById("hidden-form:r");
    const inputX = document.getElementById("hidden-form:x");
    const inputY = document.getElementById("hidden-form:y");

    inputR.value = r;
    inputX.value = x;
    inputY.value = y;

    document.getElementById("hidden-form:submit-hidden").click();
}

const getNormalCoords = (r) => {
    const position = getRelativeCoords(event);
    let x = position.x;
    let y = position.y;
    x = x - 150;
    y = 180 - y;
    const k = r / 140
    x = (x * k).toFixed(1);
    y = (y * k).toFixed(1);

    const result = getResult(x, y, r);
    setPoint(position.x, position.y, result);

    return {x: x, y: y};
}

const getRelativeCoords = (event) => {
    return {x: event.offsetX, y: event.offsetY};
}

const getResult = (x, y, radius) => {
    const inTriangle = (x >= -(radius / 2) && x <= 0) && (y <= 0 && y >= -(radius / 2)) &&
        y >= (-(radius / 2) - x);

    const inCircleQuadrant = (x <= 0 && y >= 0) && (x * x + y * y <= radius * radius);

    const inSquare = (x >= 0 && x <= radius) && (y >= 0 && y <= radius);

    return (inTriangle || inCircleQuadrant || inSquare);
}

const setPointsCoordinate = (x, y, r) => {
    const pointsCoordinates = sessionStorage.getItem('points') ? JSON.parse(sessionStorage.getItem('points')) : [];

    const k = 140 / r
    const xCoordinate = (x * k) + 150;
    const yCoordinate = 180 - (y * k);
    const coordinate = {
        "x": xCoordinate,
        "y": yCoordinate,
    };

    pointsCoordinates.push(coordinate);
    sessionStorage.setItem('points', JSON.stringify(pointsCoordinates));
}