/* Copyright (C) CorteX AI Supreme - All Rights Reserved */
#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { startServer } from '../gateway/server';

const argv = yargs(hideBin(process.argv))
  .scriptName('cortex')
  .usage('$0 <cmd> [args]')
  .command('start', 'Start the CorteX AI gateway server', () => {}, async () => {
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
    startServer(port).catch(err => {
      console.error('Failed to start server:', err);
      process.exit(1);
    });
  })
  .command('agent [name]', 'Inspect an agent template', (y) => y.positional('name', { type: 'string', default: 'default' }), (args) => {
    console.log(`CorteX AI agent template: ${args.name}`);
  })
  .help()
  .parse();
