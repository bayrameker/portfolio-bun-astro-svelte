# Portfolio Readme

This document serves as a comprehensive guide to setting up and running a simple portfolio page built with Astro, Svelte, and TailwindCSS, utilizing Bun as both the package manager and runtime.

## Table of Contents
- [Introduction](#introduction)
- [Development Environment](#development-environment)
  - [Manual Setup](#manual-setup)
  - [Docker Setup](#docker-setup)

---

## Introduction

This project is a straightforward portfolio page built using the following technologies:

- **Astro**: A static site generator that combines the best of static and dynamic websites.
- **Svelte**: A modern JavaScript framework for building user interfaces.
- **TailwindCSS**: A highly customizable CSS framework for designing web interfaces.
- **Bun**: Both the package manager and runtime for managing dependencies and running the application.

In this README, we will guide you through the process of setting up and running this portfolio page on your local environment.

---

## Development Environment

Before you can run the portfolio page locally, you need to set up your development environment. There are two ways to do this: manual setup or using Docker.

### Manual Setup

To manually set up your development environment, follow these steps:

1. **Install Bun**: Make sure you have [Bun](https://bun.sh/) installed on your system.

2. **Install Dependencies**: Open your terminal and navigate to the project directory. Run the following command to install project dependencies:
   ```
   bun install
   ```

3. **Run the Development Server**: Once the dependencies are installed, start the development server with the following command:
   ```
   bun run dev
   ```

Your portfolio page will now be accessible locally at `http://localhost:5000/`.

### Docker Setup

Alternatively, you can use Docker to set up the development environment. Here's how:

1. **Build the Docker Image**: Open your terminal and navigate to the project directory. Run the following command to build the Docker image:
   ```
   docker build -t portfolio .
   ```

2. **Run the Docker Container**: After the image is built, start a Docker container with the following command:
   ```
   docker run -t -i -p 5000:5000 portfolio
   ```

Your portfolio page will be available at `http://localhost:5000/`.

---

That's it! You've successfully set up and run the simple portfolio page locally. You can now customize it according to your needs and showcase your work to the world. Happy coding!