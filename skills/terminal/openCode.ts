/* Copyright (C) CorteX AI Supreme - All Rights Reserved */
import { exec } from 'child_process';

export async function openCodeRun(command: string, cwd?: string): Promise<{ stdout: string; stderr: string }>{
  return new Promise((resolve, reject) => {
    exec(command, { cwd }, (err, stdout, stderr) => {
      if (err) return reject(err);
      resolve({ stdout, stderr });
    });
  });
}
