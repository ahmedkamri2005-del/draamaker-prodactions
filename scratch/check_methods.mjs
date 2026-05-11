import { streamText } from 'ai';

console.log('Keys on streamText result:', Object.keys(streamText({ model: {}, messages: [] }).then(r => Object.keys(r))));
