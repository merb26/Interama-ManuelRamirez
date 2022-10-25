import { collection, getDocs, getFirestore, query, where } from "firebase/firestore/lite"
import { useEffect, useState } from "react"

import { Item } from "./item/Item"


const ItemList = ({ category }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            const db = getFirestore()
            const queryProd = !category ? collection(db, 'productos')
                : query(collection(db, 'productos'), where('categoria', '==', category))
            getDocs(queryProd)
                .then(resp => setProducts(
                    resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))
                )
                )
                .finally(() => setLoading(false))
        }, 2000)
    }, [category])

    return (
        <>
            {
                loading ?
                    <div className="mt-5 center">
                        <img src="https://i.ibb.co/j6Cv23v/YlWC.gif" alt="YlWC" border="0" />
                    </div>
                    :

                    <div className="row center">
                        {

                            products.map(
                                (product) =>
                                    <Item product={product} category={category} />
                            )
                        }
                    </div>
            }
        </>
    )
}

export default ItemList