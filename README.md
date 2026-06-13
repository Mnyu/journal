## Running the app in local

1. Setup `.env.local` based on `.env.example`.

2. Run the below commands :
    ```bash
    docker compose --env-file .env.local up -d

    bun run db:generate

    bun --env-file=.env.local run db:migrate

    bun --env-file=.env.local run db:migrate
    ```

## Stopping the app in local

1. Run the below command :

    ```bash
    docker compose --env-file .env.local down
    # or
    docker compose --env-file .env.local down -v
    ```