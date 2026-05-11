import { tool } from 'ai';
import { z } from 'zod';
const t = tool({
  description: 'test',
  parameters: z.object({ fullName: z.string() }),
  execute: async ({ fullName }) => 'test ' + fullName
});
