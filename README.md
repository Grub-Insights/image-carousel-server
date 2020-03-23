# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

- NPM install
- NPM run react-watch
- create a config.js file inside /database/ folder. 
- inside config.js insert

module.exports = {

    user: [username],
    password: [if you have one],
    database: 'carousel'
}

- in the terminal at the root of the repo, enter:
  - mysql -u [username] < ./database.schema.sql<br/> 
    or mysql -u [username] -p [password] < ./database.schema.sql<br/>
    Automatic database drop everytime you load the schema
- NPM run seedDB
- NPM start

use http://localhost:3000/index.html

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

