import { ModuleFederationConfig } from '@nx/webpack';

const coreLibraries = new Set([
  'react',
  'react-dom',
  'styled-components',
  'react-router-dom',
  // // A workspace library for a publish/subscribe
  // // system of communication.
  '@nx-repo/ui',
]);

const config: ModuleFederationConfig = {
  name: 'checkout',
  exposes: {
    './Module': 'apps/checkout/src/remote-entry.ts',
  },
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return {...defaultConfig,
        eager:true,
      };
    }
  }
};

export default config;
