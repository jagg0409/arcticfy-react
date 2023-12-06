import { Route, Routes } from "react-router-dom"
import './legal.css'

const Text = () =>{
    return(
        <Routes>
        <Route exact path={'/legal'} 
        element={
            <aside className="containerTerms">
                
                <article className="textTerms">
                <h2>Terms and Conditions of Use</h2>
            
            <p>
            
                This document outlines the terms and conditions under which users may access and use the services provided by Arcticfy. By using the Website, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you may not use the Website.
            <br/>
            <br/>1. Acceptance of Terms
            <br/>
            <br/>By accessing or using the Website, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions, you may not access the Website or use any services.
            <br/>
            <br/>2. Use of the Website
            <br/>
            <br/>a. The content provided on the Website is for general information and entertainment purposes only. It is subject to change without notice.
            <br/>
            <br/>b. You may not use the Website in any way that is unlawful, illegal, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
            <br/>
            <br/>c. Users are responsible for maintaining the confidentiality of their account information and password and for restricting access to their account.
            <br/>
            <br/>3. Intellectual Property
            <br/>
            <br/>a. All content on the Website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Arcticfy or its content suppliers and protected by international copyright laws.
            <br/>
            <br/>b. Users may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, disassemble, decompile, or otherwise exploit the Website's content without the express written consent of Arcticfy.
            <br/>
            <br/>4. User-Generated Content
            <br/>
            <br/>a. Users may submit content, including but not limited to comments, reviews, and messages. By submitting content, users grant Arcticfy a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
            <br/>
            <br/>b. Arcticfy reserves the right to remove any content that violates these Terms and Conditions or is otherwise objectionable.
            <br/>
            <br/>5. Limitation of Liability
            <br/>
            <br/>a. Arcticfy makes no representations or warranties of any kind, express or implied, as to the operation of the Website or the information, content, materials, or products included on the Website.
            <br/>
            <br/>b. Arcticfy shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the Website.
            <br/>
            <br/>6. Governing Law
            <br/>
            <br/>These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction].
            <br/>
            <br/>7. Changes to Terms and Conditions
            <br/>
            Arcticfy reserves the right to update, change, or replace any part of these Terms and Conditions at any time. It is the responsibility of users to check this page periodically for changes.
            </p>
        </article>
        </aside>
        } />
        </Routes>
        )
    }
    export default Text