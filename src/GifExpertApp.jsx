import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [Categories, setCategories] = useState([ 'naruto' ]);

    const onAddCategory = (newCategory) => {

        if (Categories.includes(newCategory)) return;
            
        
        setCategories( [newCategory, ...Categories] ) 
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            { /* Input */ }
            <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory={ event => onAddCategory(event) }
            //currenCategoriess={ Categories }
            />
            { /* Lista de Gif */ }

                {
                Categories.map( category => 
                    <GifGrid key={category} category={ category }/>
                 )}
                

                {/* Gif Item */}
        </>
    )
}

