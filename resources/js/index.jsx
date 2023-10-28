import React from 'react'
import { createRoot, } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'

import App from './App'
import store from './redux/store'

import './index.css'
import favicon from './favicon.png'

import $ from'jquery/dist/jquery.min.js'
import Popper from'@popperjs/core/dist/cjs/popper'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { PhotoProvider } from 'react-image-previewer'

import './quartz_bootstrap.min.css'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Helmet>
      <link 
        rel="icon" 
        type="image/png"
        href={favicon}
      />
    </Helmet>
    <PhotoProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PhotoProvider>
  </React.StrictMode>
)