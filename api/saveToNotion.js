// api/saveToNotion.js
// Función serverless de Vercel para guardar datos en Notion (sin CORS)

export default async function handler(req, res) {
  console.log('🔍 Request recibida en /api/saveToNotion');
  console.log('Method:', req.method);
  
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
    
    console.log('🔑 Verificando API Key...');
    console.log('API Key disponible:', !!NOTION_API_KEY);
    console.log('API Key longitud:', NOTION_API_KEY?.length || 0);
    console.log('API Key primeros 10 chars:', NOTION_API_KEY?.substring(0, 10) || 'NOT SET');
    
    if (!NOTION_API_KEY) {
      console.error('❌ NOTION_API_KEY no está configurada en Vercel');
      console.error('Variables de entorno disponibles:', Object.keys(process.env).filter(k => k.includes('NOTION')));
      return res.status(500).json({ 
        error: 'Server configuration error',
        message: 'NOTION_API_KEY is not set in Vercel environment variables'
      });
    }

    console.log('✅ API Key encontrada. Enviando a Notion...');

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

    console.log('📊 Notion response status:', response.status);

    if (!response.ok) {
      console.error('❌ Notion API error:', responseData);
      return res.status(response.status).json({
        error: 'Notion API error',
        details: responseData
      });
    }

    console.log('✅ Página creada en Notion:', responseData.id);
    return res.status(200).json({
      success: true,
      pageId: responseData.id
    });

  } catch (error) {
    console.error('❌ Error en saveToNotion:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
