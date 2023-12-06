import { Routes, Route } from "react-router-dom"
import AlbumInside from "./AlbumsInside"
import SingleInside from "./SingleInside"


const RenderAlbum = () => {

  return (
    <div>

      <Routes>



        <Route exact path={`/thecar`} element={
          <div>
            <AlbumInside name='the car' 
            />
            
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






        <Route exact path={`/body paint`} element={
          <div>
            <SingleInside name='body paint' />
          </div>
        } />
        
        <Route exact path={`/no busses`} element={
          <div>
            <SingleInside name='no busses' />
          </div>
        } />
        
        
        <Route exact path={`/four out of five`} element={
          <div>
            <SingleInside name='four out of five' />
          </div>
        } />
        
        <Route exact path={`/pretty visitors`} element={
          <div>
            <SingleInside name='pretty visitors' />
          </div>
        } />
        
        <Route exact path={`/r u mine`} element={
          <div>
            <SingleInside name='r u mine' />
          </div>
        } />
        
        <Route exact path={`/from the ritz`} element={
          <div>
            <SingleInside name='from the ritz' />
          </div>
        } />
        
      </Routes>
    </div>
  )
}
export default RenderAlbum