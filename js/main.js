const ctx = document.getElementById("grafico");

new Chart(ctx, {
    type: "bar",

    data: {
        labels: [
            "Manzanas",
            "Naranjas",
            "Plátanos",
            "Peras"
        ],

        datasets: [
            {
                label: "Cantidad",
                data: [30, 50, 40, 20]
            }
        ]
    },

    options: {
        responsive: true
    }
});