var w, h; //largeur hauteur du canvas
var button = []; //tableau des boutons
var word = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var tabmot = ["ordinateur","microprocesseur","internet","algorithme"]; //tableau des mots
var mot = " "; //mot à trouver
var tiret = ""; //mot à afficher
var nerreur; //nombre de clic pour un mot
var p; // pas du dessin;




function setup() {
  w = 600;
  h = 400;
  p = 10;
  frameRate(2);

  createCanvas(w, h);
  background(220);
  initButton();


  

}



function draw() {
  background(150);
  fill(0);
  textSize(30);
  var affich = ""; //mot à afficher avec des espaces
  for (var i = 0; i < mot.length; i++) affich = affich + tiret.charAt(i) + ' ';
  text(affich, w / 10, h / 3);
  dessine(nerreur);
  if (nerreur > 10) text("C'est perdu !", w / 2, h / 6);
  if (mot == tiret) text("C'est gagné !", w / 2, h / 6);

}





function clic(car) {
  
  if (nerreur < 11 && mot!=tiret) { //actif si pas gagné ni perdu

    console.log("ok : " + car);
   
    var tiretprec = tiret; //variable provisoire
    tiret = "";

    for (var i = 0; i < mot.length; i++) {

      if (tiretprec.charAt(i) == '_') {
        if (mot.charAt(i) == car) tiret = tiret + mot.charAt(i); //comparaison avec le mot
        else tiret = tiret + '_';
      } else tiret = tiret + mot.charAt(i);//si la lettre a déjà été trouvée

    }
    if (tiret == tiretprec) nerreur++; //détection de nouvelle erreur
   
  }

}



//dessin du pendu selon le nombre d'erreur
function dessine(n) {

  if (n > 0) line(35 * p, 35 * p, 45 * p, 35 * p);
  if (n > 1) line(40 * p, 35 * p, 40 * p, 10 * p);
  if (n > 2) line(40 * p, 10 * p, 50 * p, 10 * p);
  if (n > 3) line(45 * p, 10 * p, 40 * p, 15 * p);
  if (n > 4) line(50 * p, 10 * p, 50 * p, 15 * p);
  if (n > 5) ellipse(50 * p, 16 * p, 3 * p, 3 * p);
  if (n > 6) line(50 * p, 17 * p, 50 * p, 25 * p);
  if (n > 7) line(50 * p, 25 * p, 47 * p, 28 * p);
  if (n > 8) line(50 * p, 25 * p, 53 * p, 28 * p);
  if (n > 9) line(50 * p, 19 * p, 47 * p, 20 * p);
  if (n > 10) line(50 * p, 19 * p, 53 * p, 20 * p);

}


// tirage au sort du mot
function init_mot() {
  nerreur = 0;
  win = false;
  
  mot = tabmot[int(random(tabmot.length))];
  tiret=""
  console.log("ok" + mot.length);
  // initialisation de tiret
  for (var i = 0; i < mot.length; i++) tiret = tiret + '_';

}


//initialisation des boutons
function initButton() {

  //bouton nouveau mot
  button[26] = createButton("NOUVEAU MOT");
  button[26].position(w / 20, 0.6 * h + w / 5);
  button[26].size(w / 5, w / 20)
  button[26].mousePressed(init_mot);
  
  //1ère ligne de boutons
  textSize(w / 20);
  for (var i = 0; i < 9; i++) {
    button[i] = createButton(word.charAt(i));
    button[i].position(i * w / 20 + w / 20, 0.6 * h);
    button[i].size(w / 20, w / 20)
  }
  
  //2ème ligne de boutons
  for (var i = 9; i < 18; i++) {
    button[i] = createButton(word.charAt(i));
    button[i].position((i - 9) * w / 20 + w / 20, 0.6 * h + w / 20);
    button[i].size(w / 20, w / 20)
  }
  
  //3ème ligne de boutons
  for (var i = 18; i < 26; i++) {
    button[i] = createButton(word.charAt(i));
    button[i].position((i - 18) * w / 20 + w / 20, 0.6 * h + w / 10);
    button[i].size(w / 20, w / 20)
  }

  
  //évènement sur les boutons
  button[0].mousePressed(clica);
  button[1].mousePressed(clicb);
  button[2].mousePressed(clicc);
  button[3].mousePressed(clicd);
  button[4].mousePressed(clice);
  button[5].mousePressed(clicf);
  button[6].mousePressed(clicg);
  button[7].mousePressed(clich);
  button[8].mousePressed(clici);
  button[9].mousePressed(clicj);
  button[10].mousePressed(click);
  button[11].mousePressed(clicl);
  button[12].mousePressed(clicm);
  button[13].mousePressed(clicn);
  button[14].mousePressed(clico);
  button[15].mousePressed(clicp);
  button[16].mousePressed(clicq);
  button[17].mousePressed(clicr);
  button[18].mousePressed(clics);
  button[19].mousePressed(clict);
  button[20].mousePressed(clicu);
  button[21].mousePressed(clicv);
  button[22].mousePressed(clicw);
  button[23].mousePressed(clicx);
  button[24].mousePressed(clicy);
  button[25].mousePressed(clicz);

}

function clica() {
  clic('a');
}

function clicb() {
  clic('b');
}

function clicc() {
  clic('c');
}

function clicd() {
  clic('d');
}

function clice() {
  clic('e');
}

function clicf() {
  clic('f');
}

function clicg() {
  clic('g');
}

function clich() {
  clic('h');
}

function clici() {
  clic('i');
}

function clicj() {
  clic('j');
}

function click() {
  clic('k');
}

function clicl() {
  clic('l');
}

function clicm() {
  clic('m');
}

function clicn() {
  clic('n');
}

function clico() {
  clic('o');
}

function clicp() {
  clic('p');
}

function clicq() {
  clic('q');
}

function clicr() {
  clic('r');
}

function clics() {
  clic('s');
}

function clict() {
  clic('t');
}

function clicu() {
  clic('u');
}

function clicv() {
  clic('v');
}

function clicw() {
  clic('w');
}

function clicx() {
  clic('x');
}

function clicy() {
  clic('y');
}

function clicz() {
  clic('z');
}