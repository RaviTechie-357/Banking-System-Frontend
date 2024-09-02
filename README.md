# Banking-System-Frontend



Banking System Project
Author: Ravindra Dhage

This project is a full-stack banking system application with a Spring Boot backend and an Angular frontend. The system is designed to manage various banking operations, including account management, transactions, and user authentication.

Project Overview
Backend (Spring Boot)
Entity Layer: Defines core data structures, with each entity representing a database table. Annotated with @Entity, these classes manage data fields like account information, customer details, and transactions.

Repository Layer: Interfaces extending JpaRepository to provide CRUD operations and custom queries. Annotated with @Repository, these interfaces handle data persistence.

Service Layer: Contains business logic and intermediates between the repository and controller layers. Annotated with @Service, it processes data before interaction with the database.

Controller Layer: Manages incoming HTTP requests and maps them to service methods. Annotated with @RestController, it serves as the endpoint handler for the client.

Frontend (Angular)
Component-Based Architecture: The frontend is built using Angular's component-based architecture, allowing for modular development and easy maintenance.

Service Integration: Angular services are used to communicate with the backend APIs, handling HTTP requests and processing responses.

Routing: Angular's router module enables smooth navigation between different views, such as account management, transaction history, and user profile.

Forms and Validation: The frontend includes robust forms with built-in validation to ensure data integrity before submission to the backend.

Styling: Custom CSS and Angular's built-in styling capabilities are used to create a responsive and user-friendly interface.

Working in Short
Client Interaction: The Angular frontend sends HTTP requests (e.g., for creating an account) to the backend via service calls.

Controller Layer: Spring Boot controllers receive these requests and invoke the corresponding service methods.

Service Layer: The service layer processes the request, applying business logic, and interacts with the repository layer for data persistence.

Repository Layer: The repository layer executes the necessary database operations and returns the result to the service layer.

Response: The backend sends the response back to the Angular frontend, where it is processed and displayed to the user.

Technologies Used
Backend: Spring Boot, JPA, MySQL
Frontend: Angular, TypeScript, HTML, CSS
Database: MySQL
Tools: Maven, npm, Angular CLI
Contact
📧 Email: dhageravi4@gmail.com
📞 Phone: 7875671417
