import { Config, Generator, Schema } from './meta-models';
import { buildNameVariations } from './name-variations';

// TODO: allow CLI type configuration such as resource, component, angular/nest app etc
const generate = (schema: Schema, { scope }: Config) => {
    const { ref, refs, model, models, singleParam } = buildNameVariations(schema);

    const template = `nx g @nestjs/schematics:resource ${models} --type rest --crud true --source-root apps/api/src`;

    return {
        template,
        title: `${model} Resource`,
        fileName: ``,
    };
};

export const ResourceGenerator: Generator = {
    generate,
};

