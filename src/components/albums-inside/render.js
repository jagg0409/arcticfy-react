import { Routes, Route } from "react-router-dom"
import AlbumInside from "./AlbumsInside"


const RenderAlbum = () => {
  
  return (
    <div>

      <Routes>

        <Route exact path={`/thecar`} element={
          <div>
            <AlbumInside name='thecar' />
          </div>
        } />

        <Route exact path={`/am`} element={
          <div>
            <AlbumInside name='am' />
          </div>
        } />

        <Route exact path={`/tranquility base`} element={
          <div>
            <AlbumInside name='tranquility base' />
          </div>
        } />

      </Routes>
    </div>
  )
}
export default RenderAlbum