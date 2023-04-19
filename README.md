# FinanceMate

FinanceMate is a 100% open-source web application that is free to use for anyone who wants to take control of their finances. The application is designed to help users track their expenses and manage their budget in a simple and intuitive way. It is built with Vue.js for the frontend and Nest.js for the backend API, and it is made available to the public under the MIT license. This means that anyone can use it for any purpose, including personal or commercial use, without any bullshit or hidden fees.

However, it's important to note that FinanceMate may contain sensitive data, such as personal financial information, which requires extra care to secure the application if it's going to be deployed on a server. We highly recommend that you take appropriate measures to secure your deployment, such as using HTTPS, implementing user authentication and authorization, and properly configuring your server firewall. It's your responsibility to ensure that your FinanceMate deployment is secure and your data is protected.

## Folder Structure
The repository contains two main folders

- app *Vue.js, the frontend of the application*
- api *Nest.js, the backend of the application*

The frontend is built using the Vue.js framework and communicates with the backend API to retrieve and display data.

The backend API provides REST endpoints for the frontend to communicate with and is responsible for retrieving and persisting data to a database.

## Why FinanceMate?
Sometimes, it's hard to keep track of our expenses and manage our budget. With FinanceMate, you can easily track their expenses and have a better understanding of where your money is going. This can help you to make informed decisions about their spending habits and ultimately lead to better financial outcomes.

## Getting Started
To get started with FinanceMate, follow these steps:

1. Clone the repository
2. Install dependencies for both the app and api folders by running `npm install` in each folder.
3. Start the backend by running `npm run dev` in the `./api` folder.
4. Start the frontend by running `npm run dev` in the `./app` folder.
5. Take a look at the `README.md` either from the GUI and the API.