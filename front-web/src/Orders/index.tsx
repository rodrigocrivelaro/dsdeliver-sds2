import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product, OrderLocationData } from './types';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

    const totalPrice = selectedProducts.reduce((sum, item) => sum + item.price, 0);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                
                <ProductsList 
                    products={products} 
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                
                <OrderLocation 
                    onChangeLocation={location => setOrderLocation(location)} 
                />
                
                <OrderSummary 
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice} 
                />

                <Footer />
            </div>
        </>
    );
}

export default Orders;