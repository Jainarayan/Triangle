
var x1 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var x2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var x3 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var y1 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var y2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var y3 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var vertexArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var x1pt, x2pt, x3pt, y1pt, y2pt, y3pt, a, b, c, vertexpt, vertexpt1, vertexpt2, vertexIndex;

function setup(){	
	createCanvas(500, 500);	
	scale(30);	
	noStroke();
	drawTriangle();	
}

function calPoints(){
	x1pt = x1[Math.floor(Math.random() * x1.length)];
	x2pt = x2[Math.floor(Math.random() * x2.length)];
	x3pt = x3[Math.floor(Math.random() * x3.length)];
	y1pt = y1[Math.floor(Math.random() * y1.length)];
	y2pt = 12;
	y3pt = 12;
	noLoop();	
}

function calLength(){
	a = Math.sqrt( Math.pow((x1pt-x2pt), 2) + Math.pow((y1pt-y2pt), 2)).toFixed();
	b = Math.sqrt( Math.pow((x2pt-x3pt), 2) + Math.pow((y2pt-y3pt), 2)).toFixed();
	c = Math.sqrt( Math.pow((x1pt-x3pt), 2) + Math.pow((y1pt-y3pt), 2)).toFixed();		
}

function drawTriangle(){
	
    background(220); 
	calPoints();	
	if(x1pt == x2pt || x1pt == x3pt || x2pt == x3pt || y1pt == y2pt || y1pt == y3pt){
		drawTriangle();
	}		
	else{
		calLength();
		if((a >= 3 && a <= 12) && (b >= 3 && b <= 12) && (c >= 3 && c <= 12)){ 
			vertexLabel();
			stroke(1);		
			strokeWeight(0.1);
			noFill();
			triangle(x1pt, y1pt, x2pt, y2pt, x3pt, y3pt)		
		}
		else{
			drawTriangle();
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
	textSize(0.7);
	fill('black');
		
	text(vertexpt, x1pt, y1pt - 0.5);
	text(vertexpt1, x2pt, y2pt + 1);
	text(vertexpt2, x3pt, y2pt + 1);
		
	if(x1pt > x2pt && x1pt < x3pt && x2pt < x3pt){
		text(a, ((x1pt + x2pt) / 2) - 0.7, ((y1pt + y2pt) / 2));
		text(c, ((x1pt + x3pt) / 2) + 0.7, ((y1pt + y3pt) / 2));
	}
	if(x1pt < x2pt && x1pt > x3pt && x3pt < x2pt){
		text(a, ((x1pt + x2pt) / 2) + 0.7, (y1pt + y2pt) / 2);
		text(c, ((x1pt + x3pt) / 2) - 0.7, ((y1pt + y3pt) / 2));
	}
	if(x1pt > x2pt && x1pt > x3pt && x2pt > x3pt){
		if(y1pt > 8){
			text(a, ((x1pt + x2pt) / 2) + 0.8, ((y1pt + y2pt) / 2) + 0.3);
			text(c, ((x1pt + x3pt) / 2) - 0.7, ((y1pt + y3pt) / 2));
		}
		else{
			text(a, ((x1pt + x2pt) / 2) + 0.7, ((y1pt + y2pt) / 2));
			text(c, ((x1pt + x3pt) / 2) - 0.7, ((y1pt + y3pt) / 2));
		}
	}
	if(x1pt > x2pt && x1pt > x3pt && x2pt < x3pt){
		if(y1pt > 8){
			text(a, ((x1pt + x2pt) / 2) - 0.7, ((y1pt + y2pt) / 2));
			text(c, ((x1pt + x3pt) / 2) + 0.9, ((y1pt + y3pt) / 2) + 0.3);
		}
		else{
			text(a, ((x1pt + x2pt) / 2) - 0.7, ((y1pt + y2pt) / 2));
			text(c, ((x1pt + x3pt) / 2) + 0.7, ((y1pt + y3pt) / 2));
		}
	}
	if(x1pt < x2pt && x1pt < x3pt && x2pt > x3pt){
		if(y1pt > 8){
			text(a, ((x1pt + x2pt) / 2) + 0.7, ((y1pt + y2pt) / 2) - 0.5);
			text(c, ((x1pt + x3pt) / 2) - 0.9, ((y1pt + y3pt) / 2) + 0.9);
		}
		else{
			text(a, ((x1pt + x2pt) / 2) + 0.7, ((y1pt + y2pt) / 2));
			text(c, ((x1pt + x3pt) / 2) - 0.9, ((y1pt + y3pt) / 2));
		}
	}
	if(x1pt < x2pt && x1pt < x3pt && x2pt < x3pt){
		if(y1pt > 8){
			text(a, ((x1pt + x2pt) / 2) - 0.9, ((y1pt + y2pt) / 2) + 0.9);
			text(c, ((x1pt + x3pt) / 2) + 0.7, ((y1pt + y3pt) / 2) - 0.5);
		}
		else{
			text(a, ((x1pt + x2pt) / 2) - 0.9, ((y1pt + y2pt) / 2));
			text(c, ((x1pt + x3pt) / 2) + 0.7, ((y1pt + y3pt) / 2));
		}
	}
	
	text(b, ((x2pt + x3pt) / 2), ((y2pt + y3pt) / 2) + 1);
	
	text('Lengths:', 13, 1);
	text(vertexpt+vertexpt1+': '+a, 13, 2);
	text(vertexpt1+vertexpt2+': '+b, 13, 3);
	text(vertexpt2+vertexpt+': '+c, 13, 4);
}