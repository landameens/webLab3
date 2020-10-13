function drawCanwas(id, rValue){
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext("2d");

//прямоугольник
  ctx.fillStyle = "#ffbb91";
  ctx.fillRect(150, 40, 140, 140);

//дуга
  ctx.moveTo(150, 180);
  ctx.arc(150, 180, 140, (Math.PI / 2), (Math.PI), false);
  ctx.fill();

//треугольник
  ctx.beginPath();
  ctx.moveTo(80, 180);
  ctx.lineTo(150, 230);
  ctx.lineTo(150, 180);
  ctx.lineTo(80, 180);
  ctx.fill();
  ctx.closePath();

//оси
  ctx.fillStyle = "#64958f";
  ctx.beginPath();
  ctx.moveTo(150, 0);
  ctx.lineTo(150, 330);
  ctx.moveTo(0, 180)
  ctx.lineTo(330, 180);
  ctx.closePath();
  ctx.stroke();

//засечки
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

  ctx.font = "15px Verdana";
  ctx.fillText("R/2", 210, 170);
  ctx.fillText("R/2", 70, 170);
  ctx.fillText("R/2", 160, 115);
  ctx.fillText("R/2", 160, 255);

  ctx.fillText("R", 285, 170);
  ctx.fillText("R", 5, 170);
  ctx.fillText("R", 160, 45);
  ctx.fillText("R", 160, 325);

  ctx.fillText("X", 340, 180);
  ctx.fillText("Y", 165, 10);

  // function setPointsCoordinate() {
  //   const pointsCoordinates = sessionStorage.getItem('points') ? JSON.parse(sessionStorage.getItem('points')) : [];
  //
  //   const k = 140 / rValue
  //   const xCoordinate = (xValue * k) + 150;
  //   const yCoordinate = 180 - (yValue * k);
  //   const coordinate = {
  //     "x": xCoordinate,
  //     "y": yCoordinate,
  //   };
  //
  //   pointsCoordinates.push(coordinate);
  //   sessionStorage.setItem('points', JSON.stringify(pointsCoordinates));
  // }
}

function setPointer(x, y) {
  ctx.moveTo(x, y);
  ctx.arc(x, y, 4, 0, (Math.PI * 2), true);
  ctx.fill();
}