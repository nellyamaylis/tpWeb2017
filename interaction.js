
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    this.positInitX = 0; // Coordonnées de départ de la variable X
    this.positInitY = 0; // Coordonnée de départ de la variable Y
    this.positFinX = 0; // Coordonnée finale de la variable X
    this.positFinY = 0; // Coordonnée finale de la variable Y

    var pressed = false;
    // Developper les 3 fonctions gérant les événements

    //Fonction gérant l'appui du bouton gauche de la souris
    this.mousedown = function(evt){
        this.pressed = true;
        this.positInitX = getMousePosition(canvas, evt).x;
        this.positInitY = getMousePosition(canvas, evt).y;
        pencil.onInteractionStart(this);
        console.log("Début du mouvement : " + this.positInitX + " " + this.positInitY);
    }.bind(this); // on utilise le bind pour lier la fonction à la classe

    // Fonction gérant le mouvement de la souris
    this.mousemove = function(evt){
        if (this.pressed){
            this.positFinX = getMousePosition(canvas, evt).x;
            this.positFinY = getMousePosition(canvas, evt).y;
            pencil.onInteractionUpdate(this);
        }
    }.bind(this);

    // Fonction sur le relâchement du bouton gauche de la souris
    this.mouseup = function(evt){
        if (this.pressed){
            this.pressed = false;
            this.positFinX = getMousePosition(canvas, evt).x;
            this.positFinY = getMousePosition(canvas, evt).y;
            pencil.onInteractionEnd(this);
            console.log("La souris s'arrete : " + this.positInitX + " " + this.positInitY + " " + this.positFinX + " " + this.positFinY);
        }
    }.bind(this);

    // Associer les fonctions précédentes aux évènements du canvas.

    canvas.addEventListener('mousedown', this.mousedown, false);
    canvas.addEventListener('mousemove', this.mousemove, false);
    canvas.addEventListener('mouseup', this.mouseup, false);

}
// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

