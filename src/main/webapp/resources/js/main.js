let xValue, yValue, rValue;

canvas.addEventListener("click", (event) => {
        rValue = $('input[type="radio" i]:checked').val();
        if(isRChecked(rValue)){
            const coord = getNormalCoords(rValue);
            xValue = coord.x;
            yValue = coord.y;
            sendValues(xValue, yValue, rValue);
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

const getNormalCoords = r => {
    const position = getRelativeCoords(event);
    let x = position.x;
    let y = position.y;
    setPointer(x, y);
    x = x - 150;
    y = 180 - y;
    const k = r / 140
    x = (x * k).toFixed(1);
    y = (y * k).toFixed(1);

    return {x: x, y: y};
}

const getRelativeCoords = event => {
    return {x: event.offsetX, y: event.offsetY};
}

const isRChecked = r => {
    if(isNaN(r)){
        $('input[type="radio"]').prev("label").addClass("not-checked");
        return false;
    }
    return true;
}