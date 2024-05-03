# Python & NextJs App Starter

> Empower yourself with a real backend and frontend app starter using Python and Next.js.

This is an app starter using a python FastAPI backend and a TypeScript based React frontend leveraging NextJS. It comes with user authentication, database migrations, and a component library.

## Api
>First run `cp api/dist.env.local api/.env.local` and fill in the necessary environment variables if they are not already set.

To successfully use the backend, you will need to have a PostgreSQL database running. You can use the `docker-compose.yml` file in the `root` directory to run a PostgreSQL database. To run the database, navigate to the `root` directory and run `docker-compose up`.

To initialise the virtual environment from the `root` directory, run `python3 -m venv venv` and then `source venv/bin/activate`. Then run `pip install -r requirements.txt

The FastAPI backend is in the `api` directory. 
It uses Alembic for database migrations. To run the migrations, navigate to the `api` directory and run `alembic upgrade head`.

To then run the backend, navigate to the `api` directory and run `uvicorn app.main:app --reload`.

To create a new migration, run `alembic revision -m "migration message"`.


## Client
>First run `cp client/dist.env.local client/.env.local` and fill in the necessary environment variables if they are not already set.

Install the dependencies by running `npm install` in the `client` directory.

You will need to have the backend running to use the frontend, if you only want to develop components, you can run the storybook without the backend.

The NextJS client is in the `client` directory. To run the client, navigate to the `client` directory and run `npm run dev`.

It ships with Storybook for component development. To run Storybook, navigate to the `client` directory and run `npm run storybook`.

Also included is TailwindCSS for styling. The Components are based on Catalyst UI.

To generate the `AUTH_SECRET` use `npx auth secret`. This will generate a random string that can be used as the `AUTH_SECRET` in the `.env` file.