---
sidebar_position: 1
---

# Installation

You can run FLAI with either FLAI Cloud or hosting it on your own server premises.

## Cloud

Coming Soon

---

## Self Hosted

### Pre-requisites

1. **Docker**  
   Your server must have Docker installed on it. You can see how [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04).

2. **PostgreSQL Database**  
   If you have an available PostgreSQL Server running elsewhere (RDS or SaaS Platforms), you can use it here by just having the url `postgresql://username:password@url:port/db-name`. Make sure you have the write operation permission in that database.

   Else you can just run a postgres docker image if you will run the servers in your local machine.

   `docker run --name flai-db -e POSTGRES_USER=user -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres`

   Then access this by having this url `postgresql://user:mysecretpassword@localhost:5432/flai-server`.

3. **Rediseach**  
   In FLAI, we chose to use Redis (specifically its module RediSearch) as an HNSW Vector Search for it's simplicity and ease of installation. Although in the future, we might create an adapter for Weaviate.

   You can run your own RediSearch (from Redis-stack) by following this [tutorial](https://redis.io/learn/howtos/moviesdatabase/install)

   Then access this by having this url `redis://url:6379`

4. **ChatGPT Key**  
   Create your own ChatGPT account [here](https://auth.openai.com/authorize). Then on the platform page, create an API Key in the API Keys page.

5. **Github OAuth (For OAuth Signup)**  
   To avoid the hassle of managing the user account, creating reset password mechanism and overall authentication pain point, we decided to just integrate an OAuth service in the system. Currently, Github OAuth was integrated and you can have your own API Key by:

   - Logging in to your github account
   - Go to Settings > Developer settings > OAuth Apps
   - Create a New OAuth App
   - Provide the following Information:
     - Application name: -any-
     - Homepage URL: http://localhost:3000 (assuming you will run the server on local system and server at port 3000)
     - Authorization Callback URL: http://localhost:3000/api/oauth/github/callback
   - Copy the client ID and client secret

6. **S3 Credentials (Optional)**  
   Currently, we only use the S3 bucket to store images (might change in the future). The server CAN run without S3 configuration, but if you wish to set this up too, you'll need to get the following configurations from your S3 provider:
   - Bucket Name
   - Region
   - Access Key ID
   - Access Key Secret
   - Endpoint

### Applications

FLAI consists of 2 NodeJS Server Applications: FLAI Server and FLAI Frontend.

:::note

In the examples that will follow, it will be assumed that the servers will run on localhost at 3000 (server) and 3001 (frontend). You can change the urls based of your preferences.

:::

#### 1. FLAI Server - **[Github](https://github.com/leomarkcastro/fl-ai.git)**

FLAI Server handles all of the server logic of the AI Chatbot, exposes REST and Graphql endpoint to facilitate conversation.

To know more about the environment variables of FLAI Server, you can check it [here](/docs/configuration/deployment/server-env)

```sh
git clone --depth 1 git@github.com:leomarkcastro/fl-ai.git flai-server
cd flai-server

# Build the flai-server image
docker build -t flai-server .

# Copy the .env.sample
cp .env.sample .env
```

Modify the .env file like the example provided below

```.env
APP_NAME=FL-AI
DATABASE_URL=<database_url>
REDIS_URL=<redis_url>
BASE_URL=http://localhost:3000
CLIENT_URL=http://localhost:3001
OPENAI_API_KEY=<api_key>
GITHUB_CLIENT_ID= <github_client_id>
GITHUB_CLIENT_SECRET= <github_client_secret>
GITHUB_REDIRECT_URI= http://localhost:3000/api/oauth/github/callback
```

```sh
# ... After editing the .env's value

# Runt the server with the env
docker run -d --env-file .env -p 3000:3000 --name flai-server flai-server
```

Wait for atleast 30 seconds as the server will bootstrap

![flai-server-getstart](/img/flai-getstart-serverlogin.png)

After running the server, you should be able to go to http://localhost:3000 and be prompted to create an admin account. The FLAI Server has its own dashboard based of a modified Keystone6 Server that lets you do the following:

![flai-server-getstart-dashboard](/img/flai-getstart-dashboard.png)

1. Manage the database entries
2. View Server statistics (request count, memory usage, response time, server request history)
3. View the REST API swagger page (/api/swagger) and GraphQL Apollo Page (/api/graphql) if enabled in the enviroment variable
4. View Server Log History
5. View (Catched) Server Error History (still under work)

---

#### 2. FLAI Frontend - **[Github](https://github.com/leomarkcastro/fl-ai-fe.git)**

FLAI Frontend should provide you an admin dashboard, visual chatbot builder and an embeddable chat view page.

To know more about the environment variables of FLAI Frontend, you can check it [here](/docs/configuration/deployment/frontend-env)

```sh
git clone --depth 1 git@github.com:leomarkcastro/fl-ai-fe.git flai-frontend
cd flai-frontend

# Build the flai-server image
docker build \
  --build-arg "NEXT_PUBLIC_BASE_URL=http://localhost:3001" \
  --build-arg "NEXT_PUBLIC_TRPC_URL=http://localhost:3001" \
  --build-arg "NEXT_PUBLIC_GRAPHQL_URL=http://localhost:3000/api/graphql" \
  --build-arg "NEXT_PUBLIC_REST_URL=http://localhost:3000" \
  --build-arg "NODE_ENV=development" \
  --build-arg "DATABASE_URL=file://./db.sqlite" \
  --build-arg "JWT_SECRET=secret" \
  --build-arg "JWT_DURATION=1d" \
  -t flai-frontend .

# Run the Docker container
docker run -d -p 3001:3000 --name flai-frontend flai-frontend
```

After succesfully running the docker image, you should have a page on http://localhost:3001 available for you to use. In this frontend dashboard page, you should be able to:

![landing](/img/flai-getstart-frontendland.png)

1. Create an account and organization group
2. Create flows using the Visual Chatbot Builder
3. Create Knowledge base Context
4. Create and Embed Chatbot Bubble
5. View Chat Conversation History

## Setting up your Workspace

### Setting Up the Admin Dashboard

You can go to http://localhost:3000 to visit the admin dashboard page. If there's no existing account yet on the database, you will be greeted by Keystone6's welcome page. You will be asked to provide an email, name and password.

![flai-server-getstart](/img/flai-getstart-serverlogin.png)

After providing all of this information, you can use the login information to login in the server dashboard in the future.

![flai-server-getstart-dashboard](/img/flai-getstart-dashboard.png)

### Creating your Account

Upon running both FLAI Server and Frontend, you should be able to visit the FrontEnd's website at http://localhost:3001, you will be greeted by the Frontend's Landing Page.

![landing](/img/flai-getstart-frontendland.png)

Click the Dashboard button on the top right to go to the login page.

![flai-server-getstart-dashboard](/img/flai-getstart-frontendsignin.png)

Login with your github accout.

### Creating your Organization

All of the Chatbot Flows, Contexts, Conversation History will be located per organization. Inside organization, you can invite co-developers in the future to facilitate the organization and so on.

![flai-server-getstart-dashboard](/img/flai-getstart-frontendcreateorg.png)

Click the Add New Organization button to create a new organization.

![flai-server-getstart-dashboard](/img/flai-getstart-orgview.png)
