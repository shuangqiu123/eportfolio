# Eport - Online Portfolio Website

## About Eport

Eport is an ePortfolio system - one that would act as a collection of *electronic evidence* for the user. Uploading of user-selected documents and files, as well as the ability to update dynamically are key features of a modern ePortfolio system.

## Project Structure

### Frontend

The frontend is created by create-react-app with craco to override the configuration of webpack and babel. It uses React 17, TypeScript 4, Redux, Redux-Saga, Ant Design, LESS, and CSS Module. 

### Backend

The backend is using Spring Boot and MongoDB, with Spring MVC, and Spring Data MongoDB.

### Deployment

The website is hosted on AWS EC2 Instance. The frontend static files are served by using NGINX. A CI/CD Pipeline on Jenkins has been set up for the website.

