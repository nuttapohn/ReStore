import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, UseAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";

function Catalog() {
    const products = UseAppSelector(productSelectors.selectAll)
    const { productsLoaded, status } = UseAppSelector(state => state.catalog)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync())
    }, [productsLoaded, dispatch]);

    if (status.includes('pending')) return <LoadingComponent message='Loading product...' />;

    return (
        <>
            <ProductList products={products} />
        </>
    );
}

export default Catalog;
