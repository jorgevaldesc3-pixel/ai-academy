// api/saveToNotion.js
// Función serverless de Vercel para guardar datos en Notion (sin CORS)

export default async function handler(req, res) {
  // Solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { payload } = req.body;

    if (!payload) {
      return res.status(400).json({ error: 'Payload missing' });
    }

    // API Key desde variable de entorno de Vercel
    const NOTION_API_KEY = process.env.NOTION_API_KEY;
    if (!NOTION_API_KEY) {
      console.error('NOTION_API_KEY no está configurada en Vercel');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Llamar a Notion API desde el servidor (sin CORS)
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Notion API error:', responseData);
      return res.status(response.status).json({
        error: 'Notion API error',
        details: responseData
      });
    }

    console.log('✅ Datos guardados en Notion:', responseData.id);
    return res.status(200).json({
      success: true,
      pageId: responseData.id
    });

  } catch (error) {
    console.error('Error en saveToNotion:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
