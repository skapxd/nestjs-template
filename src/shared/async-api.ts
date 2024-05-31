import { rm, writeFile } from 'node:fs/promises';

import { INestApplication } from '@nestjs/common';
import { AsyncApiDocumentBuilder, AsyncApiModule } from 'nestjs-asyncapi';

import { generateGraphOfEvents } from './generate-graph-of-events';

export const asyncApi = async (app: INestApplication) => {
  if (process.env.NODE_ENV === 'development') {
    await rm('public/async-api.json').catch((e) => console.log(e));
    await rm('public/graph.json').catch((e) => console.log(e));
  }

  const config = new AsyncApiDocumentBuilder()
    .setTitle('Feline')
    .setDescription('Feline server description here')
    .setVersion('1.0')
    .setDefaultContentType('application/json')
    .addSecurity('user-password', { type: 'userPassword' })
    .addServer('feline-ws', {
      url: 'http://localhost:3000',
      protocol: 'http',
    })
    .build();

  const document = AsyncApiModule.createDocument(app, config);

  const graphDependencies = await generateGraphOfEvents(document);

  if (process.env.NODE_ENV === 'development') {
    await writeFile('public/async-api.json', JSON.stringify(document, null, 2));
    await writeFile(
      'public/graph.json',
      JSON.stringify(graphDependencies, null, 2),
    );
  }

  // await AsyncApiModule.setup('async-api', app, document);
};
