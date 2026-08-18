/* Copyright (C) CorteX AI Supreme - All Rights Reserved */
export class Mem0Store { private s = {} as Record<string, any>; async set(k:string,v:any){ this.s[k]=v } async get(k:string){ return this.s[k]; } }
