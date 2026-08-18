/* Copyright (C) CorteX AI Supreme - All Rights Reserved */
export class GooseMemory {
  private map = new Map<string, any>();
  async put(k:string, v:any){ this.map.set(k,v); }
  async fetch(k:string){ return this.map.get(k); }
}
