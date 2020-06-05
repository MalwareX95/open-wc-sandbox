
import replace from '@rollup/plugin-replace';
import { createCompatibilityConfig } from '@open-wc/building-rollup';
// const createDefaultConfig = require('@open-wc/building-rollup/modern-and-legacy-config');
import devEnv from './src/environment'

const configs = createCompatibilityConfig({
    input: './index.html',
    extensions: ['.js', '.mjs', '.ts'],
})

const values = {}

if(process.env.BUILD != 'development'){
    const stageEnv = require(`./environments/environment.${process.env.BUILD}.json`)
    Object
        .entries(devEnv)
        .forEach(([key, value]) => values[value] = stageEnv[key])
}

    
export default configs.map(config => ({
    ...config,
    plugins: [
        replace({
            include: /environment/,
            values
        }),
        ...config.plugins, 
    ],
  }));


// import { createDefaultConfig } from '@open-wc/building-rollup';

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });


// const config = createDefaultConfig({ 
//     input: './index.html',
//     extensions: ['.js', '.mjs', '.ts']
// });