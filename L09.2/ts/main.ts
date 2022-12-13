/*
Aufgabe: L09.2_Vogelhaus
Name: Paula Jordans
Matrikel: 271121
Datum: 13.12.2022
Quellen: Pia Giovannelli, Julia Befus, Aanya Khetarpal, Havva Kilic
*/



namespace Vogelhaus_obj {

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    let clouds: Cloud[] = [];
    let birds: Birds[] = [];
    
    let imageData: ImageData;

    window.addEventListener("load", fillCanvas);
    window.addEventListener("resize", fillCanvas, false);
    window.addEventListener("orientationchange", fillCanvas, false);

    function fillCanvas(_event: Event): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // responsive canvas size
        canvas.width = window.innerWidth * 0.95;
        canvas.height = window.innerHeight * 0.85;

        createBackground();
        createClouds();
        createSnowman();
        createbirdsitting();
        
        let birdhouse: Birdhouse = new Birdhouse();
        birdhouse.draw();

        createBirds(10);
      
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        animate();
    }

    function createBackground(): void {

        let background: Background = new Background;
        background.draw();

        let sun: Sun = new Sun((new Vector(canvas.width * 0.1, canvas.height * 0.12)));
        sun.draw();

        let higherMountains: MountainRange = new MountainRange(new Vector(0, canvas.height * 0.38), canvas.height * 0.08, canvas.height * 0.15, "black", "white");
        higherMountains.draw();
        let lowerMountains: MountainRange = new MountainRange(new Vector(0, canvas.height * 0.38), canvas.height * 0.05, canvas.height * 0.09, "#442b0b", "#c09682");
        lowerMountains.draw();

        let trees: TreeLine = new TreeLine(0, 15);
        trees.draw();

    }

    function createClouds(): void {
        clouds.push(new Cloud(new Vector(canvas.width * 0.8, canvas.height * 0.5)));
        clouds.push(new Cloud(new Vector(canvas.width * 0.4, canvas.height * 0.08)));
    }

    function createBirds(_amount: number): void {
        for (let i: number = 0; i < _amount; i++) {
            let randomScale: number = randomNumber(0.5, 1.7);
            let randomVelocity: Vector = new Vector((randomNumber(-2.5, 2.5)), (randomNumber(-3, 0)));

            birds.push(new Birds(new Vector(canvas.width / 2, canvas.height * 0.95), new Vector(randomVelocity.x, randomVelocity.y), randomScale));
        }
    }

    
    function animate(): void { // roughly based on Asteroids code
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.putImageData(imageData, 0, 0);
        
        for (let i: number = 0; i < clouds.length; i++) {
            clouds[i].update();
        }
        for (let i: number = 0; i < clouds.length; i++) {
            birds[i].update();
        }
    }

    // random number between a minimum and a maximum input
    export function randomNumber(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }

    function createSnowman(): void {

        //Schneekugeln
        let radius: number = 40;
        let positionX: number = 300;
        let positionY: number = 350;

        for (let i: number = 0; i < 3; i++) {
            crc2.beginPath();
            crc2.arc(positionX, positionY, radius, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();


            positionY = positionY + radius + 50;
            radius = radius + 10;
        }


        //Augen
        crc2.beginPath();
        crc2.arc(positionX - 10, positionY - 307, radius - 66, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(positionX + 8, positionY - 307, radius - 66, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();


        //Knöpfe
        crc2.beginPath();
        crc2.arc(positionX + 1, positionY - 190, radius - 66, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(positionX + 1, positionY - 210, radius - 66, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(positionX + 1, positionY - 230, radius - 66, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
    }

    function createbirdsitting(): void {

        let positionx: number = 700;
        let positiony: number = 393;


        //Unterkörper
        let radius2: number = 12;
        crc2.beginPath();
        crc2.arc(positionx, positiony, radius2, 0, 2 * Math.PI);
        crc2.fillStyle = randomColor();
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        //Kopf
        let radius: number = 10;
        crc2.beginPath();
        crc2.arc(positionx - 10, positiony - 10, radius, 0, 2 * Math.PI);
        crc2.fillStyle = randomColor();
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.restore();



        //Schnabel
        crc2.beginPath();
        crc2.moveTo(positionx - 20, positiony - 10);
        crc2.lineTo(positionx - 25, positiony - 5);
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        crc2.beginPath();
        crc2.moveTo(positionx - 19, positiony - 5);
        crc2.lineTo(positionx - 25, positiony - 5);
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        //Bein
        crc2.beginPath();
        crc2.moveTo(positionx, positiony + 5);
        crc2.lineTo(positionx, positiony + 20);
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        //Fuß
        crc2.beginPath();
        crc2.moveTo(positionx, positiony + 20);
        crc2.lineTo(positionx - 5, positiony + 20);
        crc2.stroke();
        crc2.closePath();
        crc2.restore();


    }

    //Funktion zufällige Farbe 
    function randomColor(): string {
        let letters: string = "0123456789";
        let color: string = "#";
        for (let i: number = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }
        return color;




    }
}