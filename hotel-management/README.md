# React Practice

## OVERVIEW

- This document provides requirements, technical stack, and estimation for React Practice.

## TIMELINE

- Expected: 70 hours  (from 2024/03/27 - 2024/04/10)

## TEAM SIZE

- One developer.

## TARGET

- Understand and apply knowledge of HTML5, CSS3, JavaScript (with ES6 syntax).
- Understand and apply TypeScript in React.
- Get familiar with design React components.
- Understand asynchronous programming and how to work with API.
- Understanding how React hooks work.
- Learn to debug with React developer tools.

## TECHNICAL STACK

- HTML5/CSS3
- React 18
- React-router-dom
- JavaScript
- TypeScript
- Eslint
- JSON Server
- Vite

## DESIGN

- Design: [Home Page](https://www.figma.com/file/fktqRevXEV7CUhux1T5h0h/Hotel-Website-Wireframe-Design-(Community)-(Copy)?type=design&node-id=2%3A1030&mode=design&t=CvKNLXnmqRK4ois8-1), [Details Page](https://www.figma.com/file/fktqRevXEV7CUhux1T5h0h/Hotel-Website-Wireframe-Design-(Community)-(Copy)?type=design&node-id=2%3A765&mode=design&t=atNGPZ94tRDvQpNS-1).
- Design Add-product page based on my own idea.

## TASK MANAGEMENT

- [Trello](https://trello.com/b/py0VHl0r/tiennguyen-internship-react)

## REQUIREMENTS

- Version 1: Basic CRUD Operations (without authentication) [Starting Point]
  - Home Page:
    - Header:
      - User can see the website logo
      - User can see a list of links (not able to navigate)
      - User can see an ‘auth’ button
      - User can click the button, and it will shows the dropdown 
      - If the user didn’t log in: It shows 2 buttons: login and register
      - If the user logged in: It shows user’s name, user’s role and ‘log out’ button
- Main:
  - User can view list of rooms with basic information (room name, price, availability status, room type, room thumbnail)
  - User can view detail of a room
    - The images of the room
    - The details of the room: room name, room previews, price, description, amenities, availability status, room type
  - User can add a room:
    - The user can see a "Add Room" button above room list
    - The user click the "Add Room" button and will be navigated to Add Room Page
    - The user can enter these fields:
      - Room Name
        - It should be a string composed of two parts: the 'Floor Level' followed by the 'Room Order’ (‘5’ + ‘05’ = ‘505’)
    - Price
      - It is a positive float value
    - Amenities (Optional)
      - User add amenities by clicking checkboxes
    - Description (Optional)
      - It should be text with at least 50 characters
    - Room Type (single, double)
      - User add Room Type by choosing radio buttons
    - Availability Status (Available, Unavailable)
      - User add Availability Status by choosing radio buttons
    - Images (Optional)
      - User add a image by add its url
        - We provide default room images if no images are provided
    - The user can click submit to create a new room
    - The user can click cancel to close the form
  - User can edit a room (all fields are able to modified)
    - User can see an edit button for the specific room they are hovering on
    - User can click the edit button and will be navigated to form page
    - The form will already be pre-filled with the product's existing information that the user wishes to edit
    - The user can click save to edit the room
    - The user can click cancel to close the form
  - User can delete a room
    - User can see a delete button for the specific room they are hovering on
    - User can click the delete button and the confirm modal will shows up to confirm if the user want to delete it
  - User can search for rooms
    - User can see a search input above the room list
    - User can enter a query to search for room by
      - Room Name
    - User can press enter to submit the search and the new room list will be re-render
  - User can filter for rooms
    - User can see a filter selections above the room list by:
      - Room type
      - Amenities
      - Availability Status
    - User can click any options and the new room list will be re-render
- Version 2: Authentication and Authorization [Next Phase (if possible)]
  - User can login
    - User can see the login page link when click ‘auth’ button
    - User need to enter these fields:
      - Email
      - Password
    - User can click ‘login’ button to try to login
  - User can register
    - User can see the register page link when click ‘auth’ button
    - User need to enter these fields:
      - Email
      - Password
      - Confirm password
    - User can click ‘register’ button to try to login
  - Only allow admin to modify hotel room listings
  - Pagination for list items
    - User can see a message that shows something like ‘Paginations or Load on scroll…’
    - User can scroll the page and the room list will be appended with new rooms
- Version 3: CRUD for cart [Final Phase (if possible)]
  - User can view list of rooms in their cart
    - User can see ‘button’ cart
    - User can click ‘button’ cart and the modal will show up
  - User can add a room to cart
    - User can see ‘add to cart’ button when hover to a room card
    - User can click the ‘add to cart’ button to add the room to cart
    - The cart will have these properties
      - ID
      - User ID
      - Room ID
      - Number of Nights (default=1, user can edit later)
      - Booking Date (default=now)
  - User can edit a room in their cart
    - User can see the increment/decrement button to modify the Night they will stay
    - User can click the button to modify the Night
  - User can delete a room in their cart
    - User can see the a button to delete a room beside it
    - User can click a button to delete a room
    - User will see a confirm modal to ask if they ensure to delete a room
      - User click Sure to delete the room
      - User click cancel to close the form

## GETTING STARTED

- Clone the repository

```bash
git clone https://github.com/TienNguyenDinh/training-react.git
```

- Move to the cloned repository folder

```bash
cd training-react
```

- Checkout to branch `react-practice`

```bash
git checkout react-practice
```

- Move to folder `hotel-management`

```bash
cd hotel-management
```

- Install packages

```bash
npm install
```

- Run the app

```bash
npm run dev
```

- Move to folder `json-server`

```bash
cd json-server
```

- Install packages in `json-server`

```bash
npm install
```

- Run the `json-server`

```bash
npm start
```

- Open your web browser and navigate to [http://localhost:5173](http://localhost:5173)