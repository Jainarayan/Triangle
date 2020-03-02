
var x1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var x2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var x3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var y1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var y2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var y3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var vertexArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var x1pt, x2pt, x3pt, y1pt, y2pt, y3pt, a, b, c, vertexpt, vertexpt1, vertexpt2, vertexIndex;

function setup(){
	scale(30);
	createCanvas(500, 500);		
	noStroke();
	draw();
}

function buttonClick(){	
	createCanvas(500, 500);	
	scale(30);
	noStroke();
	draw();	
	document.getElementById('values').style.display = 'block';
}

function calPoints(){
	x1pt = x1[Math.floor(Math.random() * x1.length)];
	x2pt = x2[Math.floor(Math.random() * x2.length)];
	x3pt = x3[Math.floor(Math.random() * x3.length)];
	y1pt = y1[Math.floor(Math.random() * y1.length)];
	y2pt = y2[Math.floor(Math.random() * y2.length)];
	y3pt = y3[Math.floor(Math.random() * y3.length)];
	noLoop();		
	document.getElementById('coordinates').innerHTML = 'Coordinates: x1: '+x1pt+ ', x2: '+x2pt+ ', x3: '+x3pt+', y1: '+y1pt+ ', y2: '+y2pt+ ', y3: '+y3pt;
}

function calLength(){
	a = Math.sqrt( Math.pow((x1pt-x2pt), 2) + Math.pow((y1pt-y2pt), 2)).toFixed();
	b = Math.sqrt( Math.pow((x2pt-x3pt), 2) + Math.pow((y2pt-y3pt), 2)).toFixed();
	c = Math.sqrt( Math.pow((x1pt-x3pt), 2) + Math.pow((y1pt-y3pt), 2)).toFixed();		
}

function draw(){
    background(220); 
	calPoints();	
	if(x1pt == x2pt || x1pt == x3pt || x2pt == x3pt || y1pt == y2pt || y1pt == y3pt || y2pt == y3pt){
		draw();
	}
	else{
		calLength();
		if((a >= 3 && a <= 12) && (b >= 3 && b <= 12) && (c >= 3 && c <= 12)){ 
			vertexLabel();
			fill('blue')
			triangle(x1pt, y1pt, x2pt, y2pt, x3pt, y3pt);				
		}
		else{
			draw();
		}
	}
} 

function vertexLabel(){
	vertexpt = vertexArr[Math.floor(Math.random() * vertexArr.length)];
	vertexIndex = vertexArr.indexOf(vertexpt);
	if(vertexIndex == 24){
		vertexpt = vertexArr[vertexIndex - 1];
		vertexpt1 = vertexArr[vertexIndex];
		vertexpt2 = vertexArr[vertexIndex + 1];
	}
	else if(vertexIndex == 25){
		vertexpt = vertexArr[vertexIndex - 2];
		vertexpt1 = vertexArr[vertexIndex - 1];
		vertexpt2 = vertexArr[vertexIndex];
	}
	else{
		vertexpt1 = vertexArr[vertexIndex + 1];
		vertexpt2 = vertexArr[vertexIndex + 2];
	}
	document.getElementById('length').innerHTML = 'Length: '+vertexpt+vertexpt1+': '+a+ ', '+vertexpt1+vertexpt2+': '+b+', '+vertexpt2+vertexpt+': '+c;
	textSize(1);
	fill('black')
	textAlign(CENTER, TOP);
	text(vertexpt, x1pt, y1pt);
	text(vertexpt1, x2pt, y2pt);
	text(vertexpt2, x3pt, y3pt);
	
	text(a, x1pt + 1, y1pt + 1);
	text(b, x2pt + 1, y2pt + 1);
	text(c, x3pt + 1, y3pt + 1);
}
