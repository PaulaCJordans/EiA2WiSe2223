var Vogelhaus_obj;
(function (Vogelhaus_obj) {
    class Birdhouse {
        draw() {
            Vogelhaus_obj.crc2.save();
            Vogelhaus_obj.crc2.translate(Vogelhaus_obj.canvas.width / 1.4, Vogelhaus_obj.canvas.height * 0.88);
            //oberer Teil des Hauses
            Vogelhaus_obj.crc2.save();
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.moveTo(-80, 0);
            Vogelhaus_obj.crc2.lineTo(80, 0);
            Vogelhaus_obj.crc2.lineTo(80, -120);
            Vogelhaus_obj.crc2.lineTo(120, -120);
            Vogelhaus_obj.crc2.lineTo(0, -180);
            Vogelhaus_obj.crc2.lineTo(-120, -120);
            Vogelhaus_obj.crc2.lineTo(-80, -120);
            Vogelhaus_obj.crc2.fillStyle = "brown";
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.closePath();
            Vogelhaus_obj.crc2.restore();
            //Unterer Teil des Hauses 
            Vogelhaus_obj.crc2.save();
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.moveTo(-8, 0);
            Vogelhaus_obj.crc2.lineTo(8, 0);
            Vogelhaus_obj.crc2.lineTo(8, 50);
            Vogelhaus_obj.crc2.lineTo(30, 110);
            Vogelhaus_obj.crc2.lineTo(26, 110);
            Vogelhaus_obj.crc2.lineTo(8, 80);
            Vogelhaus_obj.crc2.lineTo(5, 110);
            Vogelhaus_obj.crc2.lineTo(-5, 110);
            Vogelhaus_obj.crc2.lineTo(-8, 80);
            Vogelhaus_obj.crc2.lineTo(-26, 110);
            Vogelhaus_obj.crc2.lineTo(-30, 110);
            Vogelhaus_obj.crc2.lineTo(-8, 50);
            Vogelhaus_obj.crc2.fillStyle = "brown";
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.closePath();
            Vogelhaus_obj.crc2.restore();
            let rhole = 32;
            Vogelhaus_obj.crc2.save();
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.fillStyle = "black";
            Vogelhaus_obj.crc2.arc(0, -60, rhole, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.closePath();
            Vogelhaus_obj.crc2.restore();
        }
    }
    Vogelhaus_obj.Birdhouse = Birdhouse;
})(Vogelhaus_obj || (Vogelhaus_obj = {}));
//# sourceMappingURL=birdhouse.js.map