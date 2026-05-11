async function test() {
    try {
        const response = await fetch('http://localhost:3001/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [
                    { role: 'user', content: 'Hello' }
                ]
            })
        });

        console.log('Status:', response.status);
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            console.log('Chunk:', decoder.decode(value));
        }
    } catch (error) {
        console.error('Test Error:', error);
    }
}

test();
