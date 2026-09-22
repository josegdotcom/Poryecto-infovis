let indiceActivo = null;
let temporizadoresAudio = [];

function reproducirCaidasFrutas(cajasActuales, maxCajas) {
    // Cancelar sonidos de la barra anterior seleccionada
    temporizadoresAudio.forEach(timer => clearTimeout(timer));
    temporizadoresAudio = [];

    //Determinamos la proporcion entre las cajas actuales y el maximo, tambien usamos un rango 1-12
    //segun los impactos a sonar

    const proporcion = Math.max(0, cajasActuales / maxCajas);
    const ImpactosTotales = Math.max(1, Math.round(proporcion * 12));
}


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