# Valtio - Global State


Basically this is akin to ContextAPI's simpicity with a mix of Redux 

### TLDR:
 > snap is for reading, state from proxy is for writing - random youtuber


You only need to remember two tings in consideration to Valtio which is 

Proxy and useSnapshot

Proxy is use to allow access and mutation in the state 

useSnapshot is used to read values and presentation in which will be update as they have subscription to the proxy


Syntax is simple as well 

```
import { proxy } from "valtio"; 
import { state } from "../state";
import { useSnapshot } from "valtio";
```
This are the imports you need to call out valtio's functions


## How to make a state


```
import { proxy } from "valtio";

const state = proxy({
    count: 0,
});
 

export state 
```

You're gonna use proxy to make a state in which you will write all the state variables with their initial values, you can add as much as you want and you can make more than one proxies to suit each state to different uses


## How to read and show values

```
import { state } from "../state";
import { useSnapshot } from "valtio";

function Count () {
    const snap = useSnapshot(state) // same as useSelector from react

   return (
    <div>{snap.count}<div>
   )

}

```

Now since we already made a slice using proxy, we will use **useSnapshot** to read values, simply use it as variable and read its values to an element you will use it, that elemetn is now subscribed to the slice


## Adding functions and updating


```
import { state } from "../state";
import { useSnapshot } from "valtio";

function Count () {
    const snap = useSnapshot(state) // same as useSelector from react
   return (
    <button onClick={()=> state.count+=1}><button>
    <div>{snap.count}<div>
   )

}

```
always refer to the state for writing values as someone might confuse for using snap, state is where values get updated, snap simply reads the values


