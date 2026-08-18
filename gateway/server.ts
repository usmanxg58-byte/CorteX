/* Copyright (C) CorteX AI Supreme - All Rights Reserved */
import express from 'express';
import http from 'http';
import { setupRouter } from './router';
import WebSocket, { WebSocketServer } from 'ws';

export async function startServer(port: number = 4000) {
  const app = express();
  app.use(express.json());

  // Register API routes
  setupRouter(app);

  const server = http.createServer(app);

  // WebSocket server for agent sessions
  const wss = new WebSocketServer({ server });
  wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
      console.log('[ws] received:', msg.toString());
      ws.send(JSON.stringify({ ok: true, echo: msg.toString() }));
    });
    ws.send(JSON.stringify({ welcome: 'CorteX AI Gateway WS' }));
  });

  server.listen(port, () => {
    console.log(`CorteX AI Gateway listening on http://localhost:${port}`);
  });
}

if (require.main === module) {
  // Allow running the server directly
  startServer().catch((e) => console.error(e));
}
