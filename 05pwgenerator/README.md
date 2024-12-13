# Concept:

## useState:
- A React Hook that lets you add a state variable to your component. 
## useCallback:
- A React Hook that lets you cache a function definition between re-renders.  
- The React useCallback Hook returns a memoized callback function.  
- (Memoized: A technique where results are sotred to avoid doing the same computation many times)  
## useEffect(<DEPENDECY>, <FUNCTION>):
- The useEffect Hook allows you to perform side effects in your components.  
- Fetching data, directly updating the DOM and timers are side effect.  
- The effect will only run again if any of the values in the dependency array change.  
- FUNCTION: contains the code to be executed when useEffect triggers.  
- DEPENDENCY: is an optional parameter, useEffect triggers when the given dependency is changed.
## useRef:
- A React Hook that lets you reference a value that’s not needed for rendering.  
- Example: If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.  
- To avoid this, we can use the useRef Hook.  
