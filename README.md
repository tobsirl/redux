# Redux - [A Predictable State Container for JS Apps](https://redux.js.org/)

## What about React state?
* How to handle state that your whole application needs.
* Lack of organization and clarity

## Guiding Principles
1. A single source of truth ("global state")
2. State is read-only ("actions")
3. Changes are made with pure functions ("reducers")
   
## Fundamentals
1. Actions & action creators
2. Dispatch
3. Reducers
4. Store
   
![redux](https://user-images.githubusercontent.com/25591390/78661105-1d616000-78c6-11ea-999a-2174ae7caabb.png)

## Restaurant Analogy
1. Your Order ➡️ "action"
2. Restaurant server ➡️ "dispatch"
3. Chef ➡️ "reducer"
  
## Connect
### How does connect work?
* Higher-order component
* Pass 2 things
  1. "What parts of the global state does this component want access to?"
  2. "What actions do you want to be able to dispatch from this component?"
* It then returns a function to which you pass the component you want to connect.
* When called, this function creates a new component wrapping yours which passes the global state and "dispatchable" actions to your component via props.
  
![connect](https://user-images.githubusercontent.com/25591390/78986925-5ac32900-7b24-11ea-8381-81485a7dbed4.png)

```js
connect("What parts of state do you want?", "What actions do you want to dispatch") (Component)

connect(mapStateToPropsFunc, mapDispatchToPropsFunc) (Component)
```

#### mapStateToProps
```js
// TodoList.js

function mapStateToProps(state) {
  const { todos } = state
  return { todoList: todos.allIds }
}

export default connect(mapStateToProps)(TodoList)
```
As the first argument passed in to **connect**, **mapStateToProps** is used for selecting the part of the data from the store that the connected component needs. It’s frequently referred to as just **mapState** for short.
* It is called every time the store state changes.
* It receives the entire store state, and should return an object of data this component needs.

#### mapDispatchToProps
```js
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}
```
As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.

# Another option - [React Context API](https://reactjs.org/docs/context.html) 
* Built in state management API.
* Context provides a way to pass data through the component tree without having to pass props down manually at every level.

