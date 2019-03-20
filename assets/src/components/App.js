import React, { useReducer } from 'react'
import AppUI from './AppUI'

function reducer(state, { action, payload }) {
  if (action) {
    return { ...state, [action]: payload }
  }
  return state
}

const CODE = `# this is a demo
defmodule Greeting do
  def hello do
    IO.puts "Hello, world!"
  end
end
`

const INITIAL_STATE = {
  code: CODE,
  parseResult: {},
  mosaic: {
    direction: 'row',
    first: 'elixir',
    second: {
      direction: 'row',
      first: 'tokens',
      second: 'ast',
    },
    splitPercentage: 40,
  }
}

export default function() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <AppUI state={state} dispatch={dispatch} />
  )
}
