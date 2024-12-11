const express = require('express');
const app = express();
const path = require('path');

// Serwowanie plików statycznych
app.use(express.static(path.join(__dirname, 'public')));

// Główna strona
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
