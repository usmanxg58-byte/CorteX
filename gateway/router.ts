/* Copyright (C) CorteX AI Supreme - All Rights Reserved */
import { Express } from 'express';

export function setupRouter(app: Express) {
  // Health
  app.get('/health', (req, res) => res.json({ status: 'ok', name: 'CorteX AI Gateway' }));

  // Providers router (stubs). In a full implementation, these would proxy to model providers.
  app.post('/api/provider/:name/invoke', async (req, res) => {
    const provider = req.params.name;
    const payload = req.body;
    console.log(`[router] invoke provider=${provider}`, payload?.action || '');
    res.json({ result: `invoked provider ${provider}`, provider, payload });
  });

  // Skills discovery
  app.get('/api/skills', (req, res) => {
    res.json({ skills: ['terminal', 'memory', 'browser', 'swarms'] });
  });
}
