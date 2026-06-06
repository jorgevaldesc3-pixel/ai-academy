# 🤖 AI Academy

**Plataforma educativa de Inteligencia Artificial para niños 7-13 años**

Módulo 1: "¿Qué es la IA?"

---

## 🚀 Quick Start

### Para desarrollo local:
1. Clona el repo: `git clone https://github.com/tu-usuario/ai-academy.git`
2. Crea un archivo `.env` en la raíz:
   ```
   NOTION_API_KEY=tu_api_key_aqui
   ```
3. Abre `index.html` en tu navegador

### Para producción (Vercel):
1. Deploya en Vercel
2. En Dashboard de Vercel → Settings → Environment Variables
3. Añade: `NOTION_API_KEY` = tu API key

---

## 🔒 Seguridad

- ✅ Las API Keys **NUNCA** están en el código
- ✅ `.env` está en `.gitignore` (no se sube a GitHub)
- ✅ Variables de entorno en Vercel están encriptadas
- ✅ El HTML obtiene la API Key desde proceso.env en runtime

**Si expones accidentalmente una API Key:**
1. Ve a https://www.notion.com/my-integrations
2. Revoca la integration vieja
3. Crea una nueva
4. Actualiza en Vercel y `.env` local

---

## 📋 Estructura

```
ai-academy/
├── index.html              (Aplicación principal)
├── .env                    (Variables locales - NO commitar)
├── .env.example            (Plantilla de .env)
├── .gitignore              (Archivos ignorados por Git)
├── vercel.json             (Config de Vercel)
└── README.md               (Este archivo)
```

---

## 🎯 Módulos

- **M1**: "¿Qué es la IA?" ✅ Completo
- **M2**: "¿Cómo piensa la IA?" 🔜 Próximo
- **M3**: "Cuidados y Peligros" 🔜 Próximo

---

## 👨‍💻 Autor

Desarrollado por **Jorge Valdés Cardona**  
Proyecto Juventudes Guanajuato  
© 2026

---

## 📱 Deploy

- **Staging**: https://ai-academy.vercel.app
- **Storage**: Notion DB "AI Academy - Estudiantes & Respuestas"
- **Hosting**: Vercel + GitHub

---

## 🛠️ Tech Stack

- HTML5 + CSS3 + Vanilla JavaScript
- Notion API para almacenamiento
- localStorage para respaldo offline
- Vercel para hosting

---

**Última actualización**: 6 de junio de 2026
