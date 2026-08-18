/* Copyright (C) CorteX AI Supreme - All Rights Reserved */
// Lightweight index to list available agents and templates
import { agentTemplate } from './agent-template';
export function listAgents(){
  return [{ name: 'default', template: agentTemplate }];
}
