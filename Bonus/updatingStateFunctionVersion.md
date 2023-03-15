# When you are updating state based on the previous value you might want to consider using the function version 
## take the following example. you have a simple counter that you want to implement where a user can click a button to increment the count by one and a button to decrement the count by one 
## you set up the state as follows: const [count, setCount] = useState(0)
## and a button to handle the incrementing of the count: <button onClick={() => setCount(count+1)}>Increment</button> 

## This will work without issue but there is another way to write it 
## <button onClick={() => setCount(prevState => prevState+1)}>Increment</button> 

## So whats the difference and which one should you use 

## the difference is that React handles state updates in 'batches' you can think of it like this. You click the increment button react takes a 'snapshot' of the count state then puts 'update count' on its list of things to do. React will continue to peform some other tasks before it gets to updating that count. ex. console.log something, call another function, etc. Then it gets to update count it looks at the snapshot and says okay count is now equal to count +1 
## Great! so whats the problem? Well if something else was trying to update the state in between React taking that snapshot and React actually updating the state it would not be reflected on the state, it wouldnt work as expected. Because React is just looking at that first snapshot.
## So instead we can use the 'function version' to update state this ensures! that React will take the most up to date snapshot of our state before updating it and that can look like this for simple state like numbers
## setState(prevState => prevState+1)
## your setter for state is a function and that function can take in another function (callback function) as an argument that function can have one argument itself, in this example its prevState, but it could be called whatever you want. React automatically fills the value of that arg with the most up to date value in state, It guarantees it! Problem solved! 
# Its important to note that pretty much everytime the first way will work no problem and even Reacts documentation shows to update state that way I just want you to know whats going on behind the scenes a little bit to hopefully make things easier for you to code and debug as you progress. The first method works pretty much everytime because we dont update state all over the place in our components we usually have one set place (function) that updates the state and thats it.
# The syntax is slightly different for updating data structures. Let me show you 
# updating arrays 
## setState(prevState => [...prevState, newEntry]) <-- This would spread out all the current vals in the array and add a new one at the end and then set state to that new array 
# Updating objects 
## setState(prevState => ({...prevState, [key_name]: newValue})) <-- This would spread out all the current vals in the object and change whatever key name you put in to whatever value you put in 