# FinanceMate API

FinanceMate API is an open-source RESTful API built with Nest.js. It's designed to work seamlessly with the FinanceMate, a Vue.js application available in the `app/` directory of this repository. FinanceMate aims to provide an efficient and user-friendly way to manage personal finances and expenses.

## Getting Started
Follow these instructions to set up the FinanceMate API on your local machine for development and testing purposes.

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL (v5.7 or higher)

### Installation

1. Clone the repository:
```
git clone https://github.com/csswasthebestcs/FinanceM8.git
```

2. Navigate to the api/ directory
```
cd FinanceM8/api
```

3. Install the dependencies
```
npm install
```

4. Set up your `.env` file with your database credentials and other necessary environment variables. (Use the `.env.example` as a template)

5. Run the development server
```
npm run dev
```
The API will be available at http://localhost:ENV_PORT.

## Testing the API with Insomnia

We've provided an exported Insomnia configuration file to help you get started with testing the API. The file is located in the `./docs` directory and is named `httpRequests.yaml`.

To import the configuration file into Insomnia, follow these steps:

1. If you haven't already, download and install Insomnia from the official website: https://insomnia.rest/download

2. Open Insomnia and go to the "Dashboard" view.

3. Click on the "Import/Export" button located in the top right corner of the Dashboard view.

4. In the Import/Export modal, click on the "Import Data" button and select "From File."

5. Navigate to the `docs` directory in your project and select the `insomnia.yaml` file.

6. Click "Open" to import the configuration into Insomnia.

Now you should have all the API endpoints pre-configured in Insomnia, and you can start testing the API by sending requests to the server.

## Contributing
We welcome contributions from the community. Please ensure that your commits are signed for security and transparency reasons.

## Built With
- [Nest.js](https://nestjs.com/)- A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [TypeORM](https://typeorm.io/) - An ORM that can run in Node.js and supports both Active Record and Data Mapper patterns.
- [FactoryGirl](https://github.com/simonexmachina/factory-girl/tree/f7ec9d5004021ff1334ab9440e9b5cc4fd1a18b0):  A factory library for node.js, it works asynchronously and supports associations and the use of functions for generating attributes.

## License
This project is 100% open-source under the `MIT Licence`.