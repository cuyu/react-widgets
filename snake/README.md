## Snake Game

These factors can be adjusted dynamically:
- matrix width
- matrix height
- snake initial length
- game difficulty

Some technical notes:
- When snake moves, only corresponding cells are re-rendered.
- Use the `redux-thunk` middleware to get the whole state tree in the action.