import { Routes, Route } from "react-router-dom"
import { Formik, Form, Field } from "formik"
import { useState } from "react"
import search from '../img/search_64.png'
import './posters.css'

const Posters = () => {
    const [photos, setPhotos] = useState([])
    console.log(photos);
    const open = (url) => {
        window.open(url)
    }
    return (

        <Routes>

            <Route exact path={`/posters`} element={

                <div id="buscar">



                    <Formik
                        initialValues={{ search: '' }}
                        onSubmit={async values => { /*llamar a la api*/
                            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
                                {
                                    headers: { 'Authorization': 'Client-ID 9gB35uJrJMk2BI7n3VJm4eJTLlY7J3wRzENjw48102w' }
                                }
                            )
                            const data = await response.json()
                            setPhotos(data.results);
                        }}

                    >
                        <Form className="form">
                            <div id="borde">
                                <img src={search} alt="" />
                            </div>
                            <Field name="search" id="search" />
                        </Form>


                    </Formik>
                        <div className="container">
                        <div className="center">
                            {photos.map(photo => <article className="article" key={photo.id} onClick={() => open(photo.links.html)}>
                                <img src={photo.urls.regular} />
                                <p>{[photo.description, photo.alt_description].join('-')} </p>
                            </article>)}
                        </div>
                    </div>

                </div>
            } />
        </Routes>
    )
}
export default Posters