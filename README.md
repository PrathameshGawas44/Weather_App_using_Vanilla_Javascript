# Vanilla JavaScript Weather App

## Description

This project is a simple weather application built using HTML, CSS, and Vanilla JavaScript.

The application allows users to enter a city name through a text input field and fetches real-time weather data for that city using the OpenWeather API.

The main objective of this project is to understand API integration, asynchronous JavaScript using async/await, and exception handling using try-catch blocks.

---

## Features

- Search weather information by city name  
- Fetches real-time weather data from an external API  
- Uses async/await for asynchronous API calls  
- Handles errors using try-catch  
- Clean and beginner-friendly code structure  
- API key is not exposed in the public repository  

---

## Technologies Used

- HTML  
- CSS  
- JavaScript (Vanilla JavaScript)  
- OpenWeather API  

---

## Project Structure

README.md

style.css

weather.html

weather.js


---

## Application Flow

1. The user enters a city name in an HTML input field and validations like empty city name is handled by JavaScript.
2. JavaScript accesses the city name using the input element’s id.
3. An API request is made to the OpenWeather API using fetch.
4. The API call is handled asynchronously using async/await.
5. Errors such as invalid city names or network issues are handled using try-catch blocks.
6. The fetched weather data is displayed on the webpage.

---

## API Key Setup

This project requires an API key from OpenWeather.

### Steps

1. Generate an API key from https://openweathermap.org/api  

2. Copy generated API key and give that value as String to const var apiKey

---

## What I Learned

- How to manipulate the DOM using Vanilla JavaScript  

- How to make API requests using the fetch API  

- How to handle asynchronous operations using async/await  

- How to implement exception handling using try-catch blocks  

- How to work with external APIs and process JSON responses  

- How to structure a frontend project in a clean and readable way  

- How to safely manage API keys in a public GitHub repository

---

## Author

Prathamesh Gawas

---
