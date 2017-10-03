var s;
var historie = [];
var lengde = 10;
var mat;
var fartX = 4;
var fartY = 0;
var poeng = 0;
var bredde = 10;

function setup() {
	createCanvas(800, 600);
	s = new Snake(10, 10);
	mat = new Mat(random(10, 800), random(10, 600));
}


function draw() {
	background(0);
	hinder();
	var d = {
		x: s.x,
		y: s.y
	}
	historie.push(d);
	s.move();

	s.display();
	for (var i = 0; i < historie.length; i++) {		
		fill(255);
		noStroke();
		rectMode(CENTER);
		rect(historie[i].x, historie[i].y, bredde, bredde);
		
		

		if (historie.length > lengde) {
			historie.splice(i, 1);


		}
	}
	mat.display();	

	if (s.meets(mat)) {
		lengde +=10;
		poeng +=1;
		mat = new Mat(random(0, 800), random(0, 600));
		if (mat.x < 700 && mat.x >100 && mat.y <105 && mat.y> 95) {
		mat = new Mat(random(0, 800), random(0, 600));
	} else if (mat.x < 700 && mat.x >100 && mat.y <505 && mat.y> 495) {
		mat = new Mat(random(0, 800), random(0, 600));
	} else if(mat.x < 655 && mat.x >645 && mat.y >150 && mat.y< 450) {
		mat = new Mat(random(0, 800), random(0, 600));
	} else if (mat.x < 155 && mat.x >145 && mat.y >150 && mat.y< 450) {
		mat = new Mat(random(0, 800), random(0, 600));
	} else if (s.x <205 && s.x > 195 && s.y <400 && s.y > 200) {
		mat = new Mat(random(0, 800), random(0, 600));
	} else if (s.x < 605 && s.x > 595 && s.y < 400 && s.y > 200) {
		mat = new Mat(random(0, 800), random(0, 600));
	} else if (s.x < 600 && s.x > 200 && s.y < 205 && s.y > 195 ) {
		mat = new Mat(random(0, 800), random(0, 600));
	} else if (s.x < 500 && s.x > 200 && s.y < 405 && s.y >395) {
		mat = new Mat(random(0, 800), random(0, 600));
	}

	}

	for (var g = 0; g < historie.length; g++) {
		
		var d = dist(s.x, s.y, historie[g].x, historie[g].y);
		if (d < 1) {
			s = new Snake(0, 0);
			lengde = 10;
			poeng = 0;
		}

	if (s.x < 700 && s.x >100 && s.y <105 && s.y> 95) {
		s = new Snake(0, 0);
		lengde = 10;
		createP("Du fikk " + poeng+ " poeng");
		poeng = 0;		
	} else if (s.x < 700 && s.x >100 && s.y <505 && s.y> 495) {
		s = new Snake(0, 0);
		lengde = 10;
		createP("Du fikk " + poeng+ " poeng");
		poeng = 0;

	} else if(s.x < 655 && s.x >645 && s.y >150 && s.y< 450) {
		s = new Snake(0, 0);
		lengde = 10;
		createP("Du fikk " + poeng+ " poeng");
		poeng = 0;

	} else if (s.x < 155 && s.x >145 && s.y >150 && s.y< 450) {
		s = new Snake(0, 0);
		lengde = 10;
		createP("Du fikk " + poeng + " poeng");
		poeng = 0;

	} else if (s.x <205 && s.x > 195 && s.y <400 && s.y > 200) {
		s = new Snake(0, 0);
		lengde = 10;
		createP("Du fikk " + poeng+ " poeng");
		poeng = 0;

	} else if (s.x < 605 && s.x > 595 && s.y < 400 && s.y > 200) {
		s = new Snake(0, 0);
		lengde = 10;
		createP("Du fikk " + poeng+ " poeng");
		poeng = 0;
	} else if (s.x < 600 && s.x > 200 && s.y < 205 && s.y > 195 ) {
		s = new Snake(0, 0);
		lengde = 10;
		createP("Du fikk " + poeng+ " poeng");
		poeng = 0;
	} else if (s.x < 500 && s.x > 200 && s.y < 405 && s.y >395) {
		s = new Snake(0, 0);
		lengde = 10;
		createP("Du fikk " + poeng+ " poeng");
		poeng = 0;
	}

	textSize(20);
	text("Poeng: " + poeng, 5, 15);
	}
}

function Snake(x, y) {
	this.x = x;
	this.y = y;
	this.xspeed = fartX;
	this.yspeed = fartY;

	this.display = function() {
		fill(255);
		rectMode(CENTER);
		noStroke();
		rect(this.x, this.y, bredde, bredde);
	}

	this.move = function() {
		
		this.x += this.xspeed;
		this.y += this.yspeed;

		if (this.x < 0) {
			this.x = 0;
		} else if (this.x > 800) {
			this.x = 800;
		} else if (this.y < 0) {
			this.y = 0;
		} else if (this.y > 600) {
			this.y = 600;
		} 

	}

	this.meets = function(mat) {
		var d = dist(this.x, this.y, mat.x, mat.y);
		if (d <15) {
			return true;
		} else {
			return false;
		}
	}
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.xspeed = 0;
		s.yspeed = -4;
	} else if (keyCode === DOWN_ARROW) {
		s.xspeed = 0;
		s.yspeed = 4;
	} else if (keyCode === LEFT_ARROW) {
		s.xspeed = -4;
		s.yspeed = 0;
	} else if (keyCode === RIGHT_ARROW) {
		s.xspeed = 4;
		s.yspeed = 0;
	} 
}

function Mat(x,y) {
	this.x = x;
	this.y = y;

	this.display = function() {
		fill(100, 50, 250);
		ellipseMode(CENTER);
		ellipse(this.x, this.y, 15, 15);
	}
}

function hinder() {
	stroke(255);
	strokeWeight(10);
	line(100, 100, 700, 100);
	stroke(255);
	strokeWeight(10);
	line(100, 500, 700, 500);
	stroke(255);
	strokeWeight(10);
	line(150, 150, 150, 450);
	stroke(255);
	strokeWeight(10);
	line(650, 150, 650, 450);
	stroke(255);
	strokeWeight(10);
	line(200, 200, 600, 200);
	stroke(255);
	strokeWeight(10);
	line(200, 200, 200, 400);
	stroke(255);
	strokeWeight(10);
	line(600, 200, 600, 400);
	stroke(255);
	strokeWeight(10);
	line(200, 400, 500, 400);
}