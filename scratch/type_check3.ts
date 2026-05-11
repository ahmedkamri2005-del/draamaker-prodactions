import { tool } from 'ai';
import { z } from 'zod';

tool({
  description: 'test',
  parameters: z.object({ foo: z.string() }),
  execute: async (args) => {
    return args.foo;
  }
})
