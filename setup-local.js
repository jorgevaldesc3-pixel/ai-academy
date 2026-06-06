// setup-local.js
// Este archivo carga el .env en desarrollo local
// En Vercel, no es necesario porque las variables se inyectan automáticamente

(async () => {
  try {
    const response = await fetch('.env');
    if (!response.ok) {
      console.log('ℹ️ .env no encontrado (normal en Vercel)');
      return;
    }
    const envText = await response.text();
    const lines = envText.split('\n');
    
    lines.forEach(line => {
      if (line && !line.startsWith('#')) {
        const [key, value] = line.split('=');
        if (key && value) {
          localStorage.setItem(key.trim(), value.trim());
          console.log(`✅ Cargado: ${key.trim()}`);
        }
      }
    });
  } catch (err) {
    console.log('ℹ️ Setup local completado (en Vercel esto es automático)');
  }
})();
