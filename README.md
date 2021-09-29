# Telegraph

## Description

This app is called Telegraph, a mock of the Telegra.ph website. It enables users to anonymously
:raised_eyebrow: publish posts and display them.

## Installation & Usage

### Installation

1. Clone the github repository
2. Cd into the server directory 
having filepath (LAP2CHALLENGE/Telegraph/server)
3. Type into the terminal 'docker compose up' to connect to the database and start the server

### Usage

1. Once the server is up and running, users can insert the:
- Title
- Pseudonym 
- Text

2. Click on the 'PUBLISH' button to view your post

## Technologies used

1. HTML, CSS and Vanilla JS for the client-side
2. Node express, router middleware, cors and nodemon for server and API
3. Node postgres to connect to the database
4. Docker (compose) to spin up the node and postgres coontainers
5. Dayjs for simple date formatting 



