# Idevo

Idevo is a modern idea-sharing platform where users can discover, share, like, save, and comment on creative ideas.

## Features

* Browse ideas through multiple pages
* Maximum 10 ideas per page
* Automatically adds new ideas every 10 seconds
* Displays 5 new ideas at a time
* Live comments directly under each idea
* Comment counter updates instantly
* Like and save ideas
* Search ideas
* Filter ideas by category
* View detailed information about an idea
* Turkish interface
* Responsive design for desktop and mobile
* Data is stored locally using `localStorage`

## Technologies

* HTML5
* CSS3
* JavaScript
* LocalStorage API

## Project Structure

```text
Idevo/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone the project.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in your browser.

For the best development experience, you can use the Live Server extension in Visual Studio Code.

## Comments

Users can write comments directly below each idea. Comments appear immediately without refreshing the page, and the comment count is updated automatically.

## Pagination

Idevo displays a maximum of 10 ideas per page. When more ideas are added, additional pages are automatically created.

## Automatic Ideas

The application automatically generates 5 new ideas every 10 seconds. New ideas are added to the beginning of the list while the current page is preserved.

## Data Storage

Idevo currently uses the browser's `localStorage` to store:

* Ideas
* Likes
* Saved ideas
* Comments

This means the data is stored locally in the user's browser.

## Future Improvements

Possible future features include:

* User accounts
* Real-time database
* Profile pages
* Image uploads
* Notifications
* Idea categories
* Advanced search
* Follow system
* Real-time synchronization

## License

This project is created for learning and development purposes.
