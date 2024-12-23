# Concept:

## Install react-redux and reduxjs/toolkit
- npm install @reduxjs/toolkit
- npm install react-redux    (If you need React bindings)  

Then create a file store in app folder.(Choice your where you want to store)  
- first: Make a store = configureStore({obj}) === Most of the things are object in configureStore.
- Second: Make a reducer, but in redux-toolkit, this is little bit different. We naming a Slices

A feture folder: Where login, todo feture etc are lies.
- We create a todoSlice.js
- nanoid: to generate unique id's
- Then we create a initialState = {} or []. How does store look like in its initial state. 
- Then we create a Slice: todoSlice = createSlice({name: '', initialState, reducers: {fn, properties}})


# Note:
- First we create Store
- Second we create Reducers
- Third we import in components


## useDispatche and useSelector
- useDispatcher is used to update the state of component and return a new state 
useDispatcher change values in store using reducer.  
- useSelector is used to extract the state of component from the redux store using the selector function
