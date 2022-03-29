[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> Sample project to illustrate routing with Angular.

:zap: Just use Angular's router and interact with the rest of the application natively without even thinking what is hosted where.

You can visit this demo at [angular-routing.samples.piral.cloud/](https://angular-routing.samples.piral.cloud/).

## Getting Started

Install the dependencies:

```sh
npx lerna bootstrap
```

Now run the application with all (2) pilets:

```sh
npm start
```

One micro frontend is written in Angular using the hash location strategy with two pages and a tile, while the other has a complete "application" behind it using the standard browser location strategy. The application is mounted at a sub-path, where the Angular router takes care of actually dispatching to its subroutes.

The important part is that both things can play well together (even if the underlying router uses the browser location strategy).

## More Information

...

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
