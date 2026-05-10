fetch('https://integrate.api.nvidia.com/v1/chat/completions', { 
  method: 'POST', 
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer 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' 
  }, 
  body: JSON.stringify({ 
    model: 'z-ai/glm-5.1', 
    messages: [{ role: 'user', content: 'hello' }] 
  }) 
}).then(res => res.json()).then(data => console.log(JSON.stringify(data))).catch(console.error);
