import React from 'react'
import Footer from '../../containers/Footer/Footer'
import {Form} from '../../containers/Form/Form'

import './Layout.scss'

const Layout = ({children}) => {
    return (
        <div className = "app-layout">
            <main className = "app-main-content">
                <Form />
            </main>
            <Footer />
        </div>
        );
}

export default Layout;