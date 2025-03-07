// Simple auth service for Petfinder API

import * as SecureStore from 'expo-secure-store';

// we would put these in .env file, and request them from backend after auth , but for now we will just use these
const CLIENT_ID = "pCtVn4j9WVsPLQpBOBP5ZuA24mxAtka6ga8DnCKHEEKnyXUykP";
const CLIENT_SECRET = "Ay5fFXJQg5MhKfIEgGqL36yKUjYnLRNqDb2v7UuA";

export async function getToken() {
    const token = await SecureStore.getItemAsync('petfinderToken');
    if (token) return token;

    try {
        const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        });

        const data = await response.json();
        await SecureStore.setItemAsync('petfinderToken', data.access_token);
        return data.access_token;

    } catch (error) {
        console.error("Failed to get token:", error);
        throw error;
    }
}

export async function fetchPets() {
    console.log("fetching pets!!!");
    const token = await getToken();
    console.log("token", token);

    const response = await fetch("https://api.petfinder.com/v2/animals?limit=10", {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response.json();
} 

export async function fetchPet(animalId: string) {
    const token = await getToken();
    const response = await fetch(`https://api.petfinder.com/v2/animals/${animalId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response.json();
}
