
# C<img src="https://github.com/Ankitkumargh/Tally-Codebrewers-Online-Coding-Platform/blob/main/tonline-coding-editor.png" alt="">nappDashbord

# Dashboard Project Documentation

# Overview
This project is a dynamic dashboard built using Angular (latest version) with Bootstrap and Bootstrap Icons for styling. The dashboard allows users to manage widgets dynamically, including adding, removing, and searching for widgets within various categories.

# Features
1. Dynamic Widget Management: Users can add and remove widgets dynamically within different categories.
2. Category-Based Organization: Widgets are organized into categories such as "CSPM Executive Dashboard" and "CWPP Dashboard".
3. JSON-Based Configuration: The dashboard is configured using JSON data to define categories and widgets, allowing for easy customization and scalability.
4. User Interaction: Users can click on the "+Add Widget" button to add a new widget with custom names and text, and use the cross icon to remove widgets from a category.
5. Search Functionality: The dashboard includes a search feature that allows users to filter through the list of available widgets.

# Technologies Used
1. Angular (latest version): For building a single-page application with a dynamic dashboard.
2. Bootstrap: For responsive design and layout.
3. Bootstrap Icons: For icons used in the dashboard.
4. Store Management Tool: (e.g., NgRx or a simple state management approach) for managing the addition and removal of widgets locally.

# Project Structure
src/app: Contains all the Angular components, services, and modules.
components: Houses all the UI components like dashboards and widgets.
services: Includes services for managing state and API interactions.
models: Contains TypeScript interfaces for JSON configuration and widget management.
store: Manages the application state using NgRx or any other store management tool.

# JSON Configuration Example
        The dashboard configuration is defined in a JSON file, which includes categories and their respective widgets.

json
Copy code
{
  "categories": [
    {
      "name": "CSPM Executive Dashboard",
      "widgets": [
        {
          "id": 1,
          "name": "Cloud Accounts",
          "content": "Random text for Cloud Accounts widget."
        },
        {
          "id": 2,
          "name": "Cloud Account Risk Assessment",
          "content": "Random text for Risk Assessment widget."
        }
      ]
    },
    {
      "name": "CWPP Dashboard",
      "widgets": [
        {
          "id": 3,
          "name": "Top 5 Namespace Specific Alerts",
          "content": "Random text for Namespace Alerts widget."
        },
        {
          "id": 4,
          "name": "Workload Alerts",
          "content": "Random text for Workload Alerts widget."
        }
      ]
    }
  ]
}




 # Run the Application:
 Start the development server with the following command:ng serve

# CnappDashbord

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.
# How to Run Locally
 Clone the Repository:  
git clone <your-repo-url>
cd <your-project-directory>

# Install Dependencies:
Make sure you have Node.js and Angular CLI installed. Then run: npm istall 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
Open your browser and navigate to http://localhost:4200.
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

