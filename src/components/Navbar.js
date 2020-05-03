import React from "react"
import { AmplifySignOut } from '@aws-amplify/ui-react';


export default () => {
    return <div class="navbar">
        <div className="logoContainer">
            <h1 class="heading">School Gold</h1>
            <p class="description">The financial literacy plaftorm for the little ones.</p>
        </div>
        <div className="authContainer">
            <AmplifySignOut />

        </div>

    </div>
}