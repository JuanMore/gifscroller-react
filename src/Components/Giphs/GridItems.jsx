import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Spinner from "../UI/Spinner"

function GridItems({ catItems, isLoading }) {
    return isLoading ? (<Spinner />) : (
        
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 1000: 4 }}>
            <h3 className="gif-q mb-1">Cats</h3>
            
            <Masonry columnsCount={4} gutter="10px">
                {catItems.map((item) => (
            <img
                key={item.images.fixed_height.size + Math.random()}
                src={item.images.fixed_height.url}
                alt= ""
                style={{width: "100%", display: "block"}}

            />
        ))}
        </Masonry>
      </ResponsiveMasonry>
    )
}

export default GridItems
    