import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    next();
  }
}
export function loggerGlobal(req: Request, res: Response, next: () => void) {
  const date = new Date();
  console.log(
    `Date: ${date} Se llamó al endpoint ${req.url} con método ${req.method}`,
  );
  next();
}
