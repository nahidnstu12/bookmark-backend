import express from 'express';
import {Server} from 'http';
import 'reflect-metadata';
import {useContainer, useExpressServer} from 'routing-controllers';
import {Container} from 'typedi';
import './utils/env';
import {routingControllerOptions} from './utils/routingConfig';

useContainer(Container);
const app = express();
console.log(`Current NODE_ENV is ${process.env.NODE_ENV}`);

app.use(express.static(__dirname + '/view'));

useExpressServer(app, routingControllerOptions);

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




export { app };