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

## Contributing
We welcome contributions from the community. Please ensure that your commits are signed for security and transparency reasons.

## Built With
- [Nest.js](https://nestjs.com/)- A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [TypeORM](https://typeorm.io/) - An ORM that can run in Node.js and supports both Active Record and Data Mapper patterns.
- [FactoryGirl](https://github.com/simonexmachina/factory-girl/tree/f7ec9d5004021ff1334ab9440e9b5cc4fd1a18b0):  A factory library for node.js, it works asynchronously and supports associations and the use of functions for generating attributes.

## License
This project is 100% open-source under the `MIT Licence`.