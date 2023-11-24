# Contact Service API

Welcome to the Contact Service API! This API allows you to perform CRUD operations on a contact database.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/VedantSharma11/Interactly-task
    ```

2. **Install dependencies:**

    ```bash
    cd contact-service-api
    npm install
    ```

3. **Create a `.env` file:**

    Create a file named `.env` in the root directory and add your MongoDB Atlas connection string:

    ```env
    MONGODB_ATLAS_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

## How to Run

To run the project, follow these steps:

1. **Start the server:**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

2. **Access the API guide:**

    Visit `http://localhost:3000` in your web browser or use a tool like `curl`:

    ```bash
    curl http://localhost:3000
    ```

    This will provide you with a guide on how to use the API endpoints.

## API Endpoints

- **GET /contacts**: Get all contacts.
- **POST /contacts**: Create a new contact.
- **PUT /contacts/:id**: Update an existing contact.
- **DELETE /contacts/:id**: Delete a contact.
- **GET /contacts/:id**: Get a specific contact by ID.
