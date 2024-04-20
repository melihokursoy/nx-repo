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
  name: 'home',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: [],
  shared: (libraryName, defaultConfig) => {
    console.log(libraryName,defaultConfig)
    if (coreLibraries.has(libraryName)) {
      return {...defaultConfig,
        eager:true,
      };
    }
  }
};

export default config;
