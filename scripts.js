const API_KEY = "b6a585a444a05bff90b4a0e303462026";
const API_BASE = "https://api.openweathermap.org/data/2.5/weather";

function updateWeather(data) {
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";
    document.querySelector(".text-climate").textContent = data.weather[0].description;
    document.querySelector(".img-climate").src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    document.querySelector(".error-message").textContent = "";
}

function showError(message) {
    document.querySelector(".error-message").textContent = message;
}

async function findCity(city) {
    if (!city.trim()) {
        showError("Digite o nome de uma cidade.");
        return;
    }

    try {
        const res = await fetch(
            `${API_BASE}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=pt_br`
        );

        if (!res.ok) {
            showError(res.status === 404
                ? "Cidade não encontrada. Verifique o nome e tente novamente."
                : "Erro ao buscar dados. Tente novamente mais tarde."
            );
            return;
        }

        const data = await res.json();
        updateWeather(data);
    } catch {
        showError("Erro de conexão. Verifique sua internet e tente novamente.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search-button");
    const input = document.getElementById("input-city");

    button.addEventListener("click", () => findCity(input.value));
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") findCity(input.value);
    });

    findCity("São Paulo");

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/service-worker.js");
    }
});
