"use strict";

let map; // Lagrar variabel för karta

// Asynkron funktion för att skapa karta
async function createMap() {
    try {
        // Laddar in google Maps API bibliotek och extraherar Maps-objektet
        const { Map } = await google.maps.importLibrary("maps");
        // Sätter position till Sundsvall initialt
        const position = { lat: 62.3908, lng: 17.3069 };
        // Skapar ny karta
        map = new Map(document.getElementById("map"), {
            center: position, // Centrerar över position som är Sundsvall
            zoom: 12 // Zoomar in till nivå 12
        });
        // Fångar upp eventuella felmeddelanden
    } catch (error) {
        console.error("Felmeddelande", error);
    }
}

// Anropar funktion
createMap()