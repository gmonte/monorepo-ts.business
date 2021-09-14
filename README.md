# @business monorepo
> This monorepo contains web applications about business, developed with React.


Here are the packages that are applications into this monorepo: 

###### `@business/web` - Web application

 
### Getting start

#### Clone and Install
After the repository was cloned, run:

```sh
$ yarn && yarn lerna bootstrap
```

#### @business/web-app
```sh
# watch
$ cd packages/web
$ yarn start
# accept dots-env arguments
# localhost:3000 

# build
$ cd packages/web
$ yarn build
# accept dots-env arguments
# artifacts path: packages/web/build/
```

### Environments
All applications of this monorepo use the [dots-env](https://www.npmjs.com/package/dots-env) to manage .env files.
