var Vogelhaus_obj;
(function (Vogelhaus_obj) {
    class TreeLine {
        min;
        max;
        constructor(_min, _max) {
            this.min = _min;
            this.max = _max;
        }
        draw() {
            // distance between trees
            let stepMin = 5;
            let stepMax = 15;
            let x = 0;
            // draw each tree
            do {
                let y = Vogelhaus_obj.randomNumber(this.min, this.max);
                Vogelhaus_obj.crc2.save();
                Vogelhaus_obj.crc2.translate(x, y + (Vogelhaus_obj.canvas.height * 0.39));
                let treeTrunk = -30; // tree trunk height
                let treeTop = -150; // tree top height
                let treeColor = ["#d2d2d2", "#e7e7e7", "#fff"]; // shades of green
                let treeSize = Vogelhaus_obj.randomNumber(0.15, 0.2);
                Vogelhaus_obj.crc2.scale(treeSize, treeSize);
                // tree trunk
                Vogelhaus_obj.crc2.fillStyle = "#6d502b"; // colour tree trunk
                Vogelhaus_obj.crc2.fillRect(0, 0, 15, treeTrunk);
                // treetop
                for (let color = 0; color < 3; color++) {
                    // draw triangle and fill with color
                    Vogelhaus_obj.crc2.beginPath();
                    Vogelhaus_obj.crc2.moveTo(-50, treeTrunk);
                    Vogelhaus_obj.crc2.lineTo(60, treeTrunk);
                    Vogelhaus_obj.crc2.lineTo(10, treeTop);
                    Vogelhaus_obj.crc2.closePath();
                    Vogelhaus_obj.crc2.fillStyle = treeColor[color];
                    Vogelhaus_obj.crc2.fill();
                    // move starting position of next triangle upwards
                    treeTrunk += -40;
                    treeTop += -40;
                }
                x += stepMin + Vogelhaus_obj.randomNumber(stepMin, stepMax);
                Vogelhaus_obj.crc2.restore();
            } while (x < Vogelhaus_obj.canvas.width);
        }
    }
    Vogelhaus_obj.TreeLine = TreeLine;
})(Vogelhaus_obj || (Vogelhaus_obj = {}));
//# sourceMappingURL=TreeLine.js.map