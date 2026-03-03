
const API_URL = "https://pearl-thoughts-backend.nithinsettibathula1426.workers.dev";

async function fetchBackendData() {
    const loadingDiv = document.getElementById('loading');
    const contentDiv = document.getElementById('content');
    const msgSpan = document.getElementById('msg');
    const timeSpan = document.getElementById('time');
    const internSpan = document.getElementById('intern');

    try {
        
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        
        msgSpan.innerText = data.message;
        timeSpan.innerText = new Date(data.timestamp).toLocaleString();
        internSpan.innerText = data.intern_name;

        
        loadingDiv.style.display = 'none';
        contentDiv.classList.remove('hidden');
        
        console.log("Data fetched successfully from Cloudflare Worker.");
    } catch (error) {
        
        loadingDiv.innerText = "Error: Could not connect to the Backend API.";
        loadingDiv.style.color = "#d9534f"; 
        console.error("Connection Error:", error);
    }
}


window.onload = fetchBackendData;