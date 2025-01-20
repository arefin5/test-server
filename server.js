// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// API to delete the bk.js file
// app.get('/delete-file', (req, res) => {
//     const filePath = path.join(__dirname, 'public/js/bk.js'); // Adjust the path if needed

//     fs.unlink(filePath, (err) => {
//         if (err) {
//             console.error(`Error deleting ${filePath}:`, err.message);
//             return res.status(500).json({ success: false, message: 'Failed to delete file.' });
//         }
//         console.log(`${filePath} has been deleted.`);
//         res.json({ success: true, message: 'File deleted successfully.' });
//     });
// });
app.get('/mute', (req, res) => {
    res.status(200).json({ message: 'File deleted successfully.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
