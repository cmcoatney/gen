import { Config, Generator, Schema } from './meta-models';
import { buildNameVariations } from './name-variations';

const generate = (schema: Schema, { scope }: Config) => {
    const { ref, refs, model, models, singleParam } = buildNameVariations(schema);

    const template = `npx ng g c ${models} --project=web`;

    return {
        template,
        title: `${model} Component`,
        fileName: ``,
    };
};

export const ComponentGenerator: Generator = {
    generate,
};

