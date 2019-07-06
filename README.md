# react-hooks-context
 simple react context wrapper with hooks
# usage
```
npm i -S react-hooks-context
```
Wrap your Root app and give your value
```jsx
import React, { useState } from 'react'
import { ContextProvider } from 'react-hooks-context'

const App = () => {
  const [state, setState] = useState(0);
  const action = () => {
      console.log('your action');
  }
  return (
      <ContextProvider value={{ state, action }}>
        <div> Your React Root <div>
        // <View>Your React Native Root</View>
      </ContextProvider>
  );
};
export default App;
```
Get value back in your View
```jsx
import { useValue } from 'react-hooks-context';

const YourView = () => {
    const { state, action } = useValue();
    return (
        <div>{state}<div>
    )
}
export default YourView;
```