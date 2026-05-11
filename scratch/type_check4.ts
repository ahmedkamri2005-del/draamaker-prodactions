import { z } from 'zod';
import { streamText } from 'ai';

streamText({
  model: {} as any,
  tools: {
    test: {
      description: 'test',
      parameters: z.object({ foo: z.string() }),
      execute: async (args: any) => {
        return args.foo;
      }
    }
  }
})
