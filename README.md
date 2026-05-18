# Happy Thoughts

This is a React web application where users can share their happy thoughts and like thoughts shared by others. The project connects to a public API to fetch, post, and update data in real-time.

## Project Description

The assignment was to build a "Happy Thoughts" messaging app using React. The core goals were to practice state management, lifting state up, components, and handling asynchronous API requests (`GET` and `POST`).

## How I Approached the Task

- **Planning:** I started by breaking the UI into reusable components (`ThoughtForm` and `ThoughtList`) to keep the code clean and structured.

- **Data Handling:** I tested the API endpoints using Postman first to understand the data structure (`message`, `hearts`, `createdAt`).

- **State Management:** I implemented a loading state while fetching data, and used an optimistic-style state update when submitting new thoughts so they appear instantly without reloading the entire list.

- **Styling:** I followed the provided design specifications, creating a bold "retro-block" look using CSS borders and hard `box-shadow` values, along with a dynamic character counter that alerts the user if the text is too long.

## If I Had More Time, I Would:

- Add a feature to let users see how many unique posts _they_ have liked using `localStorage`.
- Implement smooth CSS animations when a new thought is added to the list.

## View it live

🔗 [Click here to view the live project on Cloudflare](KLISTRA_IN_DIN_CLOUDFLARE_LÄNK_HÄR)
