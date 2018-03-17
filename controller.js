var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = 0;
    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    new DnD(canvas, this);

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    // Fonction onInteractionStart
    this.onInteractionStart = function(dnd) {
        var butRect = document.getElementById('butRect');
        var butLine = document.getElementById('butLine');
        var spinner = document.getElementById('spinnerWidth');
        var colour = document.getElementById('colour');
        this.currLineWidth = spinner.value;
        this.currColour = colour.value;


        //Choix du mode d'edition
        if(butRect.checked) {
            this.currEditingMode = editingMode.rect;
        } else if (butLine.checked){
            this.currEditingMode = editingMode.line;
        }
        //Changement de la forme et création de la forme
        switch (this.currEditingMode){
             case editingMode.line: {
                 console.log("ligne");
                 this.currentShape = new Line(dnd.positInX, dnd.positInY, dnd.positOutX, dnd.positOutY, this.currLineWidth, this.currColour);
                 break;
             }
            case editingMode.rect: {
                console.log("rectangle");
                this.currentShape = new Rectangle(dnd.positInX, dnd.positRecInY, dnd.largeur, dnd.hauteur, this.currLineWidth, this.currColour);
                break;
            }
        }
    }.bind(this);


    // Fonction onInteractionUpdate
    this.onInteractionUpdate = function(dnd){
        if(butRect.checked){
            //Rectangle
            this.currentShape = new Rectangle(dnd.positInitX, dnd.positInitY, dnd.positFinX - dnd.positInitX, dnd.positFinY - dnd.positInitY, this.currLineWidth, this.currColour);

        } else if(butLine.checked){
            //Line
            this.currentShape = new Line(dnd.positInitX, dnd.positInitY, dnd.positFinX, dnd.positFinY, this.currLineWidth, this.currColour);
        }
        drawing.paint(ctx);
        this.currentShape.paint(ctx);

    }.bind(this);


    // Fonction onInteractionEnd
    this.onInteractionEnd = function(dnd){
           drawing.addForm(this.currentShape);
           drawing.paint(ctx);
           drawing.updateShapeList();
        this.currentShape=null;
    }.bind(this);

};

