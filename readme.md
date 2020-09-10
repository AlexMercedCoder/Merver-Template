# Merver Template

This is template using the Merver Micro Web Framework for building APIs and MicroServices. Below is a breakdown of the basic workflow of this template.

## Server Configuration

All the server configuration are in **configs/config.js**, here you can configure PORT and your cors headers

## Middleware

All your global middleware has to be registered in **middleware/global.js** there is a basic logger already registered as an example.

## Routes

In **controllers/responses** create files with your response objects and export them and register them with the responder in **controllers/responder.js**

That's about it, enjoy!

Merver Framework Documentation: https://github.com/AlexMercedCoder/merver