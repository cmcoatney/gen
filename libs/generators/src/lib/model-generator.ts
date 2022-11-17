import { Config, Generator, Schema } from './meta-models';
import { buildNameVariations } from './name-variations';

// CHALLENGE: Update service template to be dynamic
const generate = (schema: Schema, { scope }: Config) => {
  const { ref, refs, model, models, singleParam } = buildNameVariations(schema);

  const template = `
export interface I${model} {

}

export class ${model} implements I${model}}{

}
`;

  return {
    template,
    title: `${models} Model`,
    fileName: `libs/core-data/src/lib/services/${models}/${models}.service.ts`,
  };
};

export const ModelGenerator: Generator = {
  generate,
};
