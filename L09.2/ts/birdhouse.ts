namespace Vogelhaus_obj {

    export class Birdhouse {

        draw(): void {

            crc2.save();
            crc2.translate(canvas.width / 1.4, canvas.height * 0.88);

            //oberer Teil des Hauses
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(-80, 0);
            crc2.lineTo(80, 0);
            crc2.lineTo(80, -120);
            crc2.lineTo(120, -120);
            crc2.lineTo(0, -180);
            crc2.lineTo(-120, -120);
            crc2.lineTo(-80, -120);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            //Unterer Teil des Hauses 
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(-8, 0);
            crc2.lineTo(8, 0);
            crc2.lineTo(8, 50);
            crc2.lineTo(30, 110);
            crc2.lineTo(26, 110);
            crc2.lineTo(8, 80);
            crc2.lineTo(5, 110);
            crc2.lineTo(-5, 110);
            crc2.lineTo(-8, 80);
            crc2.lineTo(-26, 110);
            crc2.lineTo(-30, 110);
            crc2.lineTo(-8, 50);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            let rhole: number = 32;
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(0, -60, rhole, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }

    }
}