fetch("data/datos/especies.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("No se pudo cargar especies.json");
        }

        return response.json();
    })
    .then(datos => {

        const etiquetas = datos.map(item => item.especie);
        const valores = datos.map(item => item.cajas);

        const ctx = document.getElementById("grafico");

        new Chart(ctx, {
            type: "bar",

            data: {
                labels: etiquetas,

                datasets: [
                    {
                        label: "Cajas a inspección",
                        data: valores
                    }
                ]
            },

            options: {
                responsive: true
            }
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });