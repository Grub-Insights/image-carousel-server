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
- create a .env file inside the root folder
- inside the .env file 

```
DATABASE=carousel 
HOST=[ip/localhost]
USER=root
PASS=[...]
```

- NPM run seedDB
- NPM start

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

## API Documentation

Get requests sent to /api/carousel/:restaurantID will return ~1k images

Get requests sent to /api/carousel/20/restaurant_name returns ~100 restarants

Post requests sent to /api/carousel/restaurants will post a new restarant to the restarant database
  - requirements for this request are a restarant
  - No optional parameters

Put request sent to /api/carousel/restaurants will update the restarant to the entered restarante name
  - requirements for this are a restarant name and an ID

Delete request sent to /api/carousel/restaurants will remove a restarante;
  - required parameters are the rastarant name