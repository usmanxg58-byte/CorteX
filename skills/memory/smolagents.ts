/* Copyright (C) CorteX AI Supreme - All Rights Reserved */
export class SmolAgentsWrapper {
  async runPlan(plan: any){
    console.log('[Smolagents] running plan', plan);
    return { ok: true };
  }
}
