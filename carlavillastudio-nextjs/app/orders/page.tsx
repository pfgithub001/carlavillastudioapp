"use client";

import productData from "../json/products.json";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import SvgTrash from "../ui/svg/trash";
import SvgCart from "../ui/svg/cart";
import ProductConfigurator from "./product-configurator";

//**   INTERFACES  *//
import { Product } from "../interfaces/Product";
import { ConfiguringProduct } from "../interfaces/ConfiguringProduct";
import { OrderedProduct } from "../interfaces/OrderedProduct";
import { OrderBasket } from "../interfaces/OrderBasket";
//** INTERFACES  *//

export default function OrdersPage() {
  const { products }: { products: Product[] } = productData;
  const [configuringProduct, setConfiguringProduct] = useState<ConfiguringProduct | null>(null);
  const [order, setOrder] = useState<OrderedProduct[]>([]);
  const [orderBasket, setOrderBasket] = useState<OrderBasket>({
    orderedProducts: [],
    totalPrice: 0
  })
  const [isProductConfiguratorActive, setIsProductConfiguratorActive] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  //** OVERLAY ACTIONS */
  const toggleOverlay = () => {
    if (isOverlayActive) {
      hideAllOverlayContents();
    }
    setIsOverlayActive(!isOverlayActive);
  }

  const hideAllOverlayContents = () => {
    setIsProductConfiguratorActive(false);
  }
  //** OVERLAY ACTIONS */

  //** PRODUCT CATALOG ACTIONS */
  const onProductSelected = (product: Product) => {
    initializeConfiguringProduct(product);
    toggleOverlay();
    toggleProductSelector();
  }

  const toggleProductSelector = () => {
    setIsProductConfiguratorActive(!isProductConfiguratorActive);
  };

  const initializeConfiguringProduct = (product: Product) => {
    let auxConfiguringProduct: ConfiguringProduct = {
      id: product.id,
      name: product.name,
      isFillingOptional: product.isFillingOptional,
      ...(product.isFillingOptional && { hasFilling: true }),
      hasFillingOptions: product.hasFillingOptions,
      ...(product.hasFillingOptions && { fillingList: product.fillingList, fillingIndex: 0}),
      isUnitarian: product.isUnitarian,
      ...(!product.isUnitarian && { paxList: product.paxList, paxIndex: product.defaultPaxIndex, priceList: product.priceList}),
      ...(product.isUnitarian && { price: product.price }),
      ...(product.isFillingOptional && { noFillingPriceList: product.noFillingPriceList}),
      quantity: 1,
      image: product.image,
      finalPrice: 0
    }
    auxConfiguringProduct.finalPrice = calculateConfiguringProductFinalPrice(auxConfiguringProduct);
    setConfiguringProduct(auxConfiguringProduct);
    console.log(configuringProduct);
  }
  //** PRODUCT CATALOG ACTIONS */

  
  //** ORDER BASKET ACTIONS */
  const initializeOrderBasket = () => {

  }

  const updateBasketProductQuantity = (index: number, isIncrement: boolean) => {
    setOrderBasket((prevOrderBasket) => {
      // Crea una copia profunda de orderedProducts
      const updatedOrderedProducts = [...(prevOrderBasket?.orderedProducts || [])];

      // Encuentra el producto a modificar
      const targetProduct = updatedOrderedProducts[index];
      if (!targetProduct) return prevOrderBasket;

      // Incrementa o decrementa según el valor de `isIncrement`
      const newQuantity = isIncrement
        ? targetProduct.quantity + 1/2
        : targetProduct.quantity - 1/2;

      if (newQuantity > 0) {
        // Actualiza la cantidad y recalcula el precio final
        targetProduct.quantity = newQuantity;
        targetProduct.finalPrice = targetProduct.quantity * targetProduct.price;
      } else {
        // Si la cantidad es 0 o menor, elimina el producto del carrito
        updatedOrderedProducts.splice(index, 1);
      }

      // Calcula el nuevo totalPrice
      const newTotalPrice = updatedOrderedProducts.reduce(
        (total, product) => total + product.finalPrice,
        0
      );

      // Retorna el nuevo estado actualizado
      return {
        orderedProducts: updatedOrderedProducts,
        totalPrice: newTotalPrice,
      };
    });
  };

  const deleteProductFromOrderBasket = (index: number) => {
    setOrderBasket((prevOrderBasket) => {
      // Crear una copia del estado anterior
      const updatedOrderedProducts = [...(prevOrderBasket?.orderedProducts || [])];

      // Eliminar el producto en el índice especificado
      updatedOrderedProducts.splice(index, 1);

      // Recalcular el precio total del carrito
      const newTotalPrice = calculateOrderBasketTotalPrice(updatedOrderedProducts);

      // Actualizar el estado del carrito
      return {
        orderedProducts: updatedOrderedProducts,
        totalPrice: newTotalPrice,
      };
    });
  };

  const calculateOrderBasketTotalPrice = (orderedProducts: OrderedProduct[]): number => {
    return orderedProducts.reduce((total, product) => total + product.finalPrice, 0);
  };
  //** ORDER BASKET ACTIONS */


  //** CONFIGURING PRODUCT ACTIONS */
  const calculateConfiguringProductFinalPrice = (configuringProduct: ConfiguringProduct): number => {
    if (!configuringProduct) return 0;

    const { 
      isUnitarian, 
      isFillingOptional, 
      hasFilling, 
      paxIndex = 0, 
      priceList, 
      price, 
      noFillingPriceList, 
      quantity 
    } = configuringProduct;

    if (isUnitarian) {
      // Precio único multiplicado por la cantidad
      return (price || 0) * quantity;
    } else {
      // Precio basado en el índice de porciones
      if (isFillingOptional && !hasFilling) {
        // Si no tiene relleno y hay precios para esa opción
        return (noFillingPriceList?.[paxIndex] || 0) * quantity;
      } else {
        // Si tiene relleno o no es opcional
        return (priceList?.[paxIndex] || 0) * quantity;
      }
    }
  };

  const addProductToOrderBasket = () => {
    if (!configuringProduct) return;

    const {
      id,
      name,
      isFillingOptional,
      hasFilling,
      fillingList,
      fillingIndex,
      paxList,
      paxIndex,
      isUnitarian,
      price,
      priceList,
      quantity,
    } = configuringProduct;

    // Obteniendo valores necesarios desde configuringProduct
    const auxPax = paxIndex !== undefined ? paxList?.[paxIndex] : undefined;
    const auxFilling = hasFilling && fillingIndex !== undefined ? fillingList?.[fillingIndex] : undefined;
    const auxPrice = isUnitarian ? price : paxIndex !== undefined ? priceList?.[paxIndex] : undefined;

    // Crear el objeto OrderedProduct
    const orderedProduct: OrderedProduct = {
      id,
      name,
      pax: auxPax,
      isFillingOptional,
      filling: auxFilling,
      price: auxPrice || 0, // Asegurarse de que el precio no sea `undefined`
      quantity,
      finalPrice: configuringProduct.finalPrice,
    };

    // Actualizar orderBasket
    setOrderBasket((prevOrderBasket) => {
      const updatedOrderedProducts = [
        ...(prevOrderBasket?.orderedProducts || []), // Mantener los productos existentes
        orderedProduct, // Añadir el nuevo producto
      ];

      // Calcular el nuevo precio total
      const newTotalPrice = updatedOrderedProducts.reduce(
        (total, product) => total + product.finalPrice,
        0
      );

      // Devolver el nuevo estado de orderBasket
      return {
        orderedProducts: updatedOrderedProducts,
        totalPrice: newTotalPrice,
      };
    });

    // Cambiar de vista
    toggleProductSelector();
  };
  //** CONFIGURING PRODUCT ACTIONS */  


  return (
    <section className="orders-page">
      <div className="Container">
      {/* PRODUCT CATALOG */}
        <div className="Products m-10 flex flex-wrap gap-5">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="Product w-[100%] md:w-[300px] h-auto md:h-[450px]"
              onClick={() => onProductSelected(product)}>
              <div className="top">
                <Image
                  width={500}
                  height={500}
                  src={`/images/products/${product.image}`}
                  alt={`${product.name} confeccionado en Sther, repostería hojaldrada`}
                />
                <h2 className="text-xl mt-5">{product.name}</h2>
                <p className="text-[1rem] mt-5">{product.description}</p>
              </div>
              <div className="bottom mt-5">
                {product.isUnitarian ? (
                  <h2 className="text-[1rem]">{product.price?.toFixed(2).replace(".", ",")}€</h2>
                ) : (
                  <h2 className="text-[1rem]">
                  {
                    product.defaultPaxIndex !== undefined && product.priceList?.[product.defaultPaxIndex] 
                      ? `${product.priceList[product.defaultPaxIndex].toFixed(2).replace(".", ",")}€` 
                      : "N/A"
                  }
                  </h2>
                )}
                <button className="addButton">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* PRODUCT CATALOG */}

        {/* ORDER BASKET */}
        <div className="OrderBasket hidden md:inline">
          <div className="OrderBasketContainer">
            <div className="Order">
              <h2 className="text-3xl">TU PEDIDO</h2>
              <div className="ProductList mt-5">
              {orderBasket.orderedProducts.map((orderedProduct, index) => (
                <div key={index} className="ProductItem mb-10">
                  <div className="left">
                    <h2>{orderedProduct.name} {orderedProduct.pax!==undefined ? `de ${orderedProduct.pax}` : ""}</h2>
                    {orderedProduct.isFillingOptional && (
                      <span>{orderedProduct.filling==undefined ? "Sin relleno" : "Relleno de " + orderedProduct.filling}</span>
                    )}
                    <div className="quantitySelector mt-2">
                      <button className="removeButton" onClick={() => updateBasketProductQuantity(index,false)}>
                        <span></span>
                        <span></span>
                      </button>
                      <span className="text-2xl">{orderedProduct.quantity}</span>
                      <button className="addButton" onClick={() => updateBasketProductQuantity(index,true)}>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                    <span className="itemTotal mt-5">{orderedProduct.finalPrice.toFixed(2).replace(".", ",") + "€"}</span>
                  </div>
                  <div className="right cursor-pointer" onClick={() => deleteProductFromOrderBasket(index)}>
                    <SvgTrash />
                  </div>
                </div>
              ))}
              </div>
              {orderBasket.orderedProducts.length === 0 && (
              <div className="EmptyBasket">
                <SvgCart />
                <h2 className="text-1xl">TU PEDIDO ESTÁ VACÍO</h2>
              </div>
              )}
            </div>
            <div className="Checkout">
              <div className="Total text-2xl">
                <span>TOTAL</span><span>{orderBasket.totalPrice.toFixed(2).replace(".", ",") + "€"}</span><br/>
              </div>
              <button className="myButton01 mt-5">Tramitar Pedido</button>
            </div>
          </div>
        </div>
        {/* ORDER BASKET */}
      </div>

      {/* OVERLAY */}
      <div className={`Overlay ${
          isOverlayActive ? "OverlayActive" : ""
        }`} onClick={toggleOverlay}>
        <div className="OverlayContent max-w-[90%]" onClick={(event) => event.stopPropagation()}>
        {/* PRODUCT CONFIGURATOR */}
        {configuringProduct !== null && isProductConfiguratorActive && (
          <ProductConfigurator 
            configuringProduct={configuringProduct} 
            setConfiguringProduct={setConfiguringProduct} 
            addProductToOrderBasket={addProductToOrderBasket}
            />
        )}
        {/* PRODUCT CONFIGURATOR */}
        </div>
      </div>
      {/* OVERLAY */}
    </section>
  );
}
