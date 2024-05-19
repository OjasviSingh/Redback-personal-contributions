### Documentation on Accessing and Using the Repository

#### 1. Introduction

This document provides detailed instructions on how to access and run the code for the Data Visualization Practice Web Development project, stored in the GitHub repository at "redback-fit-sports-performance". This application uses Flask to serve web content that dynamically interacts with data models to display cycling performance analytics.

#### 2. Prerequisites

Before starting, ensure you have the following installed on your system:

- **Git**: Needed to clone the repository and manage version control.
- **Python**: The application is written in Python, so ensure you have Python 3.x installed.
- **Pip**: Python's package installer, used to install dependencies.

#### 3. Downloading the Repository

Follow these steps to download the code:

1. Open a terminal or command prompt.
2. Navigate to the directory where you want to store the project.
3. Clone the repository using Git:
   ```
   git clone https://github.com/Redback-Operations/redback-fit-sports-performance/tree/main/DataVisualisationPracticeWebDev
   ```
4. Change into the project directory:
   ```
   cd DataVisualisationPracticeWebDev
   ```

#### 4. Installing Dependencies

Before running the application, you must install the necessary Python libraries:

1. Ensure you are in the project root directory in your terminal.
2. Install the required libraries using pip:
   ```
   pip install -r requirements.txt
   ```
   If the `requirements.txt` file is not available, install Flask and any other libraries used by the application:
   ```
   pip install flask pandas matplotlib
   ```

#### 5. Running the Application

To run the application on your local machine, follow these steps:

1. Open your terminal and navigate to the project directory.
2. Run the `app.py` script using Python:
   ```
   python app.py
   ```
3. Once the server starts, it will typically run on `http://localhost:5000`. Open a web browser and enter this URL to interact with the application.

#### 6. Navigating the Application

Once the application is running, use the following URLs to navigate:

- **Home Page**: Access this by simply visiting `http://localhost:5000`. It serves as the entry point to the application.
- **Display Power Curve**: Typically accessed via `http://localhost:5000/display_power_curve`, this page shows the power curve data visualizations.
- **Power Curve Calculations**: Accessed via `http://localhost:5000/power_curve`, here you can input data to calculate and visualize cycling power curves.

#### 7. Overview of Application Structure

##### `templates` Folder

This folder contains HTML templates which are crucial for rendering the user interface of your web application. Here’s a detailed look at each file:

- **`index.html`**: This file is typically the entry point for users. It serves as the home page of the application and is where users can navigate to different parts of the website or initiate actions like viewing data or submitting new data.
- **`display_power_curve.html`**: Used specifically for displaying the power curve data visualization. This page might include interactive elements that allow users to manipulate the data view or filter the datasets they are interested in.
- **`power_curve.html`**: This page likely handles user inputs for calculations related to power curves. It might include forms where users can enter or select parameters, and then see the results of their queries or calculations directly on this page.

These HTML files are rendered dynamically through Flask, allowing for real-time data presentation and interaction without the need for page reloads.

##### `static` Folder

The `static` folder serves as a repository for all the static content required by the web application, structured as follows:

- **CSS files (`style.css`)**: This file controls the overall aesthetic of the application including layout, color schemes, typography, and more. Effective CSS ensures that the application is visually appealing and provides a consistent user experience across different browsers and devices.
- **JavaScript files (`script.js`)**: This script enhances the interactivity of the application. It could handle tasks like sending asynchronous requests to the server (AJAX), manipulating the DOM based on user actions, and updating content dynamically.
- **Images (`photos/Pic1.webp`)**: Images are used to enhance the visual appeal and user interface of the application. They could be used in the website layout, as icons, or in content areas to visually represent data or features.

##### `models` Folder

This directory includes both scripts and notebooks that handle the data processing, modeling, and prediction tasks:

- **Python Scripts (`power_curve.py`, `ftp_predictor.py`)**: These scripts contain the core functionality for calculating power curves and predicting FTP. They likely include functions that take input data and compute outputs based on statistical models or algorithms.
- **Jupyter Notebooks (`*.ipynb`)**: These notebooks are used for exploratory data analysis, model development, and visualization. They provide a transparent way to document the data analysis workflow, including the ability to directly view plots and other outputs within the document.
- **Test Scripts (`test_power_curve.py`, `test_ftp_predictor.py`)**: These are automated tests designed to ensure that the functions within the models perform as expected under various conditions. They help maintain code reliability and ease future code refactoring.

##### `data` Folder

Contains datasets in CSV format that are used as input for analyses and modeling. These files might include:

- **Performance Data (`20km_time_trial_cycling.csv`)**: Contains time trial performance metrics from cycling events.
- **Activity Data (`3117764808.csv`, `activities_cleaned.csv`)**: These files may store raw and processed activity logs from fitness devices, providing detailed metrics that could be used for performance analysis and fitness tracking.

##### `app.py`

This Python file is essential for setting up the Flask application and mapping the backend functionality to the URLs:

- **Initialization and Configuration**: Sets up the Flask application instance, configures it, and possibly loads external configurations or sets up logging.
- **Route Definitions**: Each function decorated with `@app.route` responds to specific URLs, handling tasks like rendering the appropriate HTML template, receiving data from forms, and responding to user requests.
- **Template Rendering**: Uses `render_template` to integrate Python logic with HTML templates, dynamically passing data to the templates.

#### 8. Flask Framework Detailed Overview

Flask is a lightweight and powerful server-side web framework for Python. It's designed to make starting with web programming easy and is capable of scaling up to complex applications. Flask provides:

- **Simple and easy setup** for small projects with minimal configuration.
- **Flexibility** to add plugins and extensions for additional features like database integration, form validation, user authentication, and more.
- **Built-in development server** and debugger for easy testing and debugging of applications.
- **RESTful request handling**, allowing developers to build APIs easily.

The information provided should give you a comprehensive understanding of your repository's structure and functionality. If you need more specific details about any file or concept, or if you have other questions about deploying or maintaining the Flask application, feel free to ask!

#### 9. Conclusion

This guide should help you set up and navigate the Data Visualization Practice Web Development project.
