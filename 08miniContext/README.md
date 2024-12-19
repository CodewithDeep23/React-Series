# Concepts:
## Context API:
- What is this?, Why this?
- A feature in React that allows managing state globally across a components tree without the needs to pass props down manually at every level.
- It provides a way to share values like themes, user authentication, or application state between components, regardless of how deeply nested those components are.

## How to use this?
### First: create context object. [React.createContext();]
- We use .js, because it's need a pure js.
### Second: create Provider after that. It's need a jsx for return.
- Used to wrap components that need access to the context.
- Passes data (state) via the value prop.