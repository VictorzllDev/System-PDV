import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './routes'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
