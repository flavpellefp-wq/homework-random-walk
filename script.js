function generaWalk() {

    let n = 100; // numero di passi
    let x = [1000]; // valore iniziale

    for (let i = 1; i <= n; i++) {

        // genera +1 o -1
        let salto = Math.random() < 0.5 ? -1 : 1;

        // formula random walk
        x[i] = x[i-1] + salto;
    }

    // labels per il grafico
    let labels = [];
    for (let i = 0; i <= n; i++) {
        labels.push(i);
    }

    // crea grafico
    const ctx = document.getElementById('grafico').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Random Walk',
                data: x,
                borderColor: 'blue',
                fill: false
            }]
        }
    });
}
