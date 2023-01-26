# **UX Studio Contacts App**

## Start the application

## I.BACKEND

**Install the dependecies:**

```sh
cd server
yarn
```

**Set the necessary ENV variables:**

```sh
DATABASE_URL="postgresql://user:password@localhost:5435/uxstudio?schema=public"
BACKEND_PORT=5000
CLOUD_NAME="ddvzzovu9"
CLOUD_API_KEY="929611179597579"
CLOUDINARY_API_SECRET= ask by email!
CLOUDINARY_URL_PREFIX="https://res.cloudinary.com"
MOCK_DATA=false
```

**Create a docker container for the database (postgreSQL)**

```sh
docker compose up
```

**Generate the database schema:**

```sh
yarn migrate:dev
```

**Start the server:**

```sh
yarn dev
```

**Add some bulk contacts to the database by changing the MOCK_DATA environment variable (CLOUDINARY_API_SECRET required!):**

```sh
MOCK_DATA=true
```

## II.FRONTEND

**Install the dependecies:**

```sh
cd client
yarn
```

**Start the application:**

```sh
yarn dev
```
