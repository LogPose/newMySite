import React from 'react'
import Body from './components/body'
import Header from './components/header'
import './style.css'

const App = () => {
    return(
        <div className='app-body'>
            <Header />
            <Body />
        </div>
    )
}

export default App