const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Ustaw serwowanie plików statycznych
app.use(express.static(__dirname));

// Obsługa głównego endpointu
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Uruchom serwer
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});