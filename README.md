# React useState Hook Asynchronous Update
This repository demonstrates a common issue with React's `useState` hook where updates are asynchronous, leading to unexpected results when attempting to update state multiple times within a single `useEffect` call.

## Problem
The problem arises when performing multiple state updates within a single `useEffect` call's function.  Due to the asynchronous nature of these updates, subsequent calls to `setCount` use the updated value set by the previous call, rather than the initial value.

## Solution
To resolve this, accumulate the updates into a single update call using functional update pattern or using `useReducer` hook which provides a more sophisticated state management approach.