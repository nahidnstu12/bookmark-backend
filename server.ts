import 'reflect-metadata';
import express, { Request, NextFunction, Response } from 'express';
import { Container } from 'typedi';
import './utils/env';
import { useContainer, useExpressServer } from 'routing-controllers';
import { routingControllerOptions } from './utils/routingConfig';
import swaggerUi from 'swagger-ui-express';

useContainer(Container);
const app = express();
console.log(`Current NODE_ENV is ${process.env.NODE_ENV}`);

app.use(express.static(__dirname + '/view'));

useExpressServer(app, routingControllerOptions);
import { Server } from 'http';

export function runServer(host: string, port: number) {
  return new Promise<void>((resolve, reject) => {
    const server: Server = app.listen(port, host, (err?: Error) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });

    // Handle server close event to gracefully shut down the server if needed
    server.on('close', () => {
      // Perform any cleanup or other tasks before the server fully closes
      console.log('Server is closing...');
    });
  });
}



import { spec } from './utils/swagger';

app.use(swaggerUi.serve);
app.get('/swagger', swaggerUi.setup(spec));

app.get('/', (_: Request, res: Response) => {
  res.sendFile('./view/index.html');
});
app.get('/swagger.json', (_: Request, res: Response) => {
  res.json(spec);
});

app.use((err: string, _req: Request, res: Response, _next: NextFunction) => {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.end(`{ result: false, error: ${err} }`);
});

export { app };