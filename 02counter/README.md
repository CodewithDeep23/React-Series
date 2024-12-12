## Question on Counter:
## output ?
```javascript
const [counter, setCounter] = useState(10);
const addValue(){
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
}

return(
    <>
       <p>{counter}</p>
       <button onclick={addValue}>Add value</button>
    </>
)

## output: 14
```