# Concept:

- First install a react-router: _npm install react-router_

## Concepts in Headers.
- a tag vs Link:
```
a-tag = Causes a full page reload when navigating to a new URL.
Link =  Allows navigation without reloading the page.
        Optimized for single-page applications (SPAs) by managing routing in the browser.
```

-NavLink:  
Wraps <Link> with additional props for styling active and pending states.
```javascript
<NavLink
        to="/"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          }`
        }
>
```
- href in html same as to in react
- We want header and footer on every page, then we use {outlet}. For this we create a Layout.jsx in src dirc.

## Concepts in Footers page
- No such concepts

## Concepts in Home page
- No such concepts

## Concepts in About page
- No such concepts

## Concepts in Github page
- Fetch api, using useLoaderData(). This is a optimize way
- See in github.jsx
- In Route: Use loader={function}

## Concepts in User
- useParams() will return the params object, which will refer to any dynamic part of the URL.

## Concepts in Layout:
- Why we use Layout.jsx?
- We want to use Header and Footer in every page. How?
- By Outlet method.

## Concepts in main.js
- RouterProvider: Need a one prop
- There are two methods to access prop.
- Below methods is the easiest method.
```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="user/:UserId" element={<User/>}/>
    <Route 
    loader={githubInfoLoader}
    path="github" 
    element={<Github/>} />
  </Route>
  )
);
```
- we use two functions, createBrowserRouter and createRouterFromElement
- render.
```javascript
<RouterProvider router={router} />
```