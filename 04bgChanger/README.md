# Concept:
-> onclick: you pass a reference in onclick
=> onclick={setColor};
=> onclick={setColor("red")}: You should not pass like that, because in this case you give a return value to onclick function. Onclick in React does not require a return value.

-> onclick: To pass an argument to an event handler, use an arrow function.
=> onclick={() => setColor("red")}