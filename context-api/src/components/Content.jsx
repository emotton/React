import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Home from './Home'
import User from './User'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" exact element={ <Home />} />
            <Route path="/user" element={<User />} />
        </Routes>
    </main>
)

export default Content