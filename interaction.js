
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.positInitX = 0; // Coordonnées de départ de la variable X
    this.positInitY = 0; // Coordonnée de départ de la variable Y
    this.positFinX = 0; // Coordonnée finale de la variable X
    this.positFinY = 0; // Coordonnée finale de la variable Y
	// Developper les 3 fonctions gérant les événements

    //Fonction gérant l'appui du bouton gauche de la souris
    this.mousedown = function(evt){
        this.positInitX = getMousePosition(canvas, evt).x;
        this.positInitY = getMousePosition(canvas, evt).y;
        this.pressed = true;
        pencil.onInteractionStart(this);
        console.log("Début du mouvement : " + this.positInitX + " " + this.positInitY);
    }.bind(this); // bind pour lier la fonction à la classe

    // Fonction sur le relâchement du bouton gauche de la souris
    this.mouseup = function(evt){
        if (this.pressed){
            this.positFinX = getMousePosition(canvas, evt).x;
            this.positFinY = getMousePosition(canvas, evt).y;
            this.pressed = false;
            pencil.onInteractionEnd(this);
            console.log("La souris s'arrete : " + this.positInitX + " " + this.positInitY + " " + this.positFinX + " " + this.positFinY);
        }
    }.bind(this);

    // Fonction gérant le mouvement de la souris
    this.mousemove = function(evt){
        if (this.pressed){
            this.positFinX = getMousePosition(canvas, evt).x;
            this.positFinY = getMousePosition(canvas, evt).y;
            pencil.onInteractionUpdate(this);
            console.log("La souris est en mouvement : " + this.positFinX + " " + this.positFinY);
        }
    }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.

    canvas.addEventListener('mousedown', this.mousedown);
    canvas.addEventListener('mouseup', this.mouseup);
    canvas.addEventListener('mousemove', this.mousemove);
}
// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}



