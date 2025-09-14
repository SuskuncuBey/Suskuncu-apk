server.js      ← Sunucu kodu
package.json   ← Proje ve start komutu bilgisi
/suskuncu-apk
├─ index.html
└─ apk/
    └─ benim-konusan-tomum-hileli-apkdayi.com.apk
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
