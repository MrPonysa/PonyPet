var ponyStates = [];
var currentPonyState = null;
var ponyImg;

function changePonyTo(id) {
    ponyImg.setAttribute("src", "img/" + id + ".gif");
}

function pet() {
    currentPonyState.pet();
    changePonyTo(currentPonyState.id);
}
function eye() {
    currentPonyState.eye();
    changePonyTo(currentPonyState.id);
}
function boop() {
    currentPonyState.boop();
    changePonyTo(currentPonyState.id);
}
function mouth() {
    currentPonyState.mouth();
    changePonyTo(currentPonyState.id);
}

window.onload = function () {
	
	function pnpoly( nvert, vertx, verty, testx, testy ) {
    var i, j, c = false;
    for( i = 0, j = nvert-1; i < nvert; j = i++ ) {
        if( ( ( verty[i] > testy ) != ( verty[j] > testy ) ) &&
            ( testx < ( vertx[j] - vertx[i] ) * ( testy - verty[i] ) / ( verty[j] - verty[i] ) + vertx[i] ) ) {
                c = !c;
        }
    }
    return c;
}
	
	var vx = [50,150,150,50];
	var vy = [50,50,150,150];
	function FindPosition(oElement)
{
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
}
function GetCoordinates(e,myImg)
{
  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(myImg);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  
  if(pnpoly(4,vx,vy,PosX,PosY)) boop();
  //alert(PosX +","+PosY+": "+pnpoly(4,vx,vy,PosX,PosY));
}
	function ponyPet_clicked(e){
		
		GetCoordinates(e,elem);
	}
    function ponyStateFactory(id, pet, eye, boop, mouth) {
        return {
            id: id,
            pet: function () { currentPonyState = ponyStates[pet - 1]; },
            eye: function () { currentPonyState = ponyStates[eye - 1]; },
            boop: function () { currentPonyState = ponyStates[boop - 1]; },
            mouth: function () { currentPonyState = ponyStates[mouth - 1]; }
        };
    }

    ponyStates.push(ponyStateFactory(1, 1, 6, 3, 13));
    ponyStates.push(ponyStateFactory(2, 3, 10, 6, 10));
    ponyStates.push(ponyStateFactory(3, 5, 11, 1, 9));
    ponyStates.push(ponyStateFactory(4, 5, 8, 3, 12));
    ponyStates.push(ponyStateFactory(5, 1, 11, 11, 13));
    ponyStates.push(ponyStateFactory(6, 7, 10, 11, 14));
    ponyStates.push(ponyStateFactory(7, 1, 10, 2, 14));
    ponyStates.push(ponyStateFactory(8, 4, 10, 11, 4));
    ponyStates.push(ponyStateFactory(9, 9, 11, 11, 1));
    ponyStates.push(ponyStateFactory(10, 2, 2, 8, 3));
    ponyStates.push(ponyStateFactory(11, 13, 13, 12, 3));
    ponyStates.push(ponyStateFactory(12, 13, 11, 11, 5));
    ponyStates.push(ponyStateFactory(13, 9, 10, 11, 5));
    ponyStates.push(ponyStateFactory(14, 13, 10, 11, 6));

    currentPonyState = ponyStates[1];

    var elem = document.createElement("img");
    elem.setAttribute("src", "img/1.gif");
    elem.setAttribute("height", "200");
    elem.setAttribute("width", "200");
    elem.setAttribute("alt", "Best Pony");
    elem.setAttribute("id", "ponyImg");
	elem.onclick = ponyPet_clicked;
	

    var canvas = document.getElementById('ponypetcanvas');
    canvas.appendChild(elem);

    ponyImg = document.getElementById('ponyImg');

    changePonyTo(currentPonyState.id);
};
