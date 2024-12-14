# React useState Asynchronous Update Bug

This repository demonstrates a common but subtle bug in React related to the asynchronous nature of state updates using `useState`.  The example shows how consecutive calls to `setCount` might not produce the expected result, potentially leading to incorrect values.  A solution is also provided.