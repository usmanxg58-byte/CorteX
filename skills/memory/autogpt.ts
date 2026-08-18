/* Copyright (C) CorteX AI Supreme - All Rights Reserved */
export class AutoGPTWrapper {
  async start(goal: string){
    console.log('[AutoGPT] start', goal);
    return { started: true };
  }
}
