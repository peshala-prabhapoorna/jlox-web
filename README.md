# jLox for the Browser

![jLox-web screenshot](https://github.com/user-attachments/assets/7f5780da-038c-4319-951a-689e7326b65a)

Run Lox code locally in the browser with jLox interpreter. jLox-web allows you to write and run Lox code directly in your browser, providing an interactive environment for learning and experimenting with the language. The jLox interpreter is available in my [jlox repository](https://github.com/peshala-prabhapoorna/jlox).

## Deployment

This project is deployed at [jlox.lavenderleit.dev](https://jlox.lavenderleit.dev).

## Description

The project includes various features such as syntax highlighting, code examples, and coding challenges to help you master the Lox programming language. You can explore different aspects of the language, from basic syntax to advanced concepts, through interactive lessons and examples.

The jLox interpreter is built using JavaScript and leverages the CheerpJ runtime to execute Lox code in the browser. It provides a seamless experience for running Lox programs without the need for any additional setup or installation.

The project is organized into different sections, including syntax lessons, example programs, and coding challenges. Each section is designed to provide a comprehensive understanding of the Lox programming language and its features.

Feel free to explore the project and start coding in Lox right away!

## Build Instructions

To build the project, run the following script:

```bash
./build.sh
```

## Docker Instructions

### Build and Run with Docker

Build the Docker image:

```bash
docker build -t jlox-web .
```

Run the container:

```bash
docker run -d -p 8080:80 --name jlox-web jlox-web
```

The application will be available at `http://localhost:8080`.

### Using Docker Compose

Start the application:

```bash
docker compose up -d
```

Stop the application:

```bash
docker compose down
```

The application will be available at `http://localhost:8080`.

## Deployment Instructions

To deploy the project, run the following script with the deploy directory as an argument:

```bash
sudo ./deploy.sh <deploy_directory>
```
