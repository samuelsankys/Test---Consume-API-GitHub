# shaw-partners


Its purpose is to consume the GitHub APIs, more precisely the user and repositories endpoints, and create an application.

## challenge requirements
- [x] API that will proxy all client requests to the appropriate GitHub endpoint.
- [x] Create tests for your application covering all endpoints.
## Environment variables

To run this project, you may need to create an .env file

`PORT`

## Endpoints

- GET - /api/users?since={number}
- GET - /api/users/:username/details
- GET - /api/users/:username/repos

## Running locally

Clone the project

```bash
  git clone https://github.com/samuelsankys/shaw-partners.git
```
### To start the server

Be in the project directory

```bash
  cd shaw-partners
```

Install dependencies

```bash
  npm install
```

Init Server

```bash
  npm run dev
```

#### Or by docker-compose

Be in the project directory

```bash
  cd shaw-partners
```
Init docker-compose

```bash
  docker-compose up
```


## Stack

**Back-end:** Node, Express

**API:** GitHub



