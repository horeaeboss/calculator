function calcPitagora() {
    let a = parseFloat(document.getElementById('cat1').value);
    let b = parseFloat(document.getElementById('cat2').value);
    let c = parseFloat(document.getElementById('hypo').value);

    // descomp radical
    function simplifySqrt(n) {
        if (n <= 0) return n;
        let largestSquare = 1;
        for (let i = 1; i*i <= n; i++) {
            if (n % (i*i) === 0) {
                largestSquare = i*i;
            }
        }
        let outside = Math.sqrt(largestSquare);
        let inside = n / largestSquare;
        if (inside === 1) return outside.toString();
        return outside + "√" + inside;
    }

    // verificam valori=0
    if (c === 0 && a > 0 && b > 0) {
        let result = a*a + b*b;
        document.getElementById('resultPitagora').innerText = "Ipoteza este: " + simplifySqrt(result);
    } else if (a === 0 && c > 0 && b > 0) {
        let result = c*c - b*b;
        if (result < 0) {
            document.getElementById('resultPitagora').innerText = "Eroare: valori imposibile!";
        } else {
            document.getElementById('resultPitagora').innerText = "Cateta 1 este: " + simplifySqrt(result);
        }
    } else if (b === 0 && c > 0 && a > 0) {
        let result = c*c - a*a;
        if (result < 0) {
            document.getElementById('resultPitagora').innerText = "Eroare: valori imposibile!";
        } else {
            document.getElementById('resultPitagora').innerText = "Cateta 2 este: " + simplifySqrt(result);
        }
    } else {
        document.getElementById('resultPitagora').innerText = "Te rog completeaza corect valorile!";
    }
}

function calcSimple() {
    let x = parseFloat(document.getElementById('num1').value);
    let y = parseFloat(document.getElementById('num2').value);
    let op = document.getElementById('operation').value;
    let rez;

    if (op === 'add') {
        rez = x + y; // adunare
    } else if (op === 'sub') {
        rez = x - y; // scadere
    } else if (op === 'mul') {
        rez = x * y; // inmultire
    } else if (op === 'div') {
        rez = y !== 0 ? x / y : 'Nu poti / la 0';
    }

    document.getElementById('resultSimple').innerText = "Rezultat: " + rez;
}