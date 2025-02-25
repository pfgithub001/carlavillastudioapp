import Image from "next/image";

//** INTERFACES */
import { ConfiguringProduct } from "../interfaces/ConfiguringProduct";

interface ProductConfiguratorProps {
  configuringProduct: ConfiguringProduct;
  setConfiguringProduct: React.Dispatch<React.SetStateAction<ConfiguringProduct | null>>;
  addProductToOrderBasket: () => void;
}
//** INTERFACES */

export default function ProductConfigurator({
  configuringProduct,
  setConfiguringProduct,
  addProductToOrderBasket,
}: ProductConfiguratorProps) {
  const hasFillingButtonClicked = (auxHasFilling: boolean) => {
    const updatedConfiguringProduct = {
      ...configuringProduct,
      hasFilling: auxHasFilling,
    };
    updatedConfiguringProduct.finalPrice = calculateConfiguringFinalPrice(updatedConfiguringProduct);
    setConfiguringProduct(updatedConfiguringProduct);
  };

  const fillingButtonClicked = (index: number) => {
    const updatedConfiguringProduct = {
      ...configuringProduct,
      fillingIndex: index,
    };
    setConfiguringProduct(updatedConfiguringProduct);
  };

  const paxButtonClicked = (index: number) => {
    const updatedConfiguringProduct = {
      ...configuringProduct,
      paxIndex: index,
    };
    updatedConfiguringProduct.finalPrice = calculateConfiguringFinalPrice(updatedConfiguringProduct);
    setConfiguringProduct(updatedConfiguringProduct);
  };

  const configuringQuantityButtonClicked = (change: number) => {
    const newQuantity = (configuringProduct.quantity || 1) + change;
    const updatedConfiguringProduct = {
      ...configuringProduct,
      quantity: newQuantity > 0 ? newQuantity : 1,
    };
    updatedConfiguringProduct.finalPrice = calculateConfiguringFinalPrice(updatedConfiguringProduct);
    setConfiguringProduct(updatedConfiguringProduct);
  };

  const calculateConfiguringFinalPrice = (configuringProduct: ConfiguringProduct): number => {
    const {
      isUnitarian,
      isFillingOptional,
      hasFilling,
      paxIndex = 0,
      priceList,
      price,
      noFillingPriceList,
      quantity,
    } = configuringProduct;

    if (isUnitarian) {
      return (price || 0) * quantity;
    } else {
      if (isFillingOptional && !hasFilling) {
        return (noFillingPriceList?.[paxIndex] || 0) * quantity;
      } else {
        return (priceList?.[paxIndex] || 0) * quantity;
      }
    }
  };

  

  return (
    <div className="ProductConfigurator">
      <Image
        width={500}
        height={500}
        src={`/images/products/${configuringProduct.image}`}
        alt={`${configuringProduct.name} confeccionado en Sther, repostería hojaldrada`}
      />
      <h2 className="text-4xl mt-5">{configuringProduct.name}</h2>
      {configuringProduct.isFillingOptional && (
        <ul className="mt-5">
          <li>
            <button
              onClick={() => hasFillingButtonClicked(true)}
              className={`${
                configuringProduct.hasFilling ? "hasFillingButtonActive" : ""
              } largeButton`}
            >
              Con Relleno
            </button>
          </li>
          <li>
            <button
              onClick={() => hasFillingButtonClicked(false)}
              className={`${
                !configuringProduct.hasFilling ? "hasFillingButtonActive" : ""
              } largeButton`}
            >
              Sin Relleno
            </button>
          </li>
        </ul>
      )}
      {configuringProduct.hasFilling && configuringProduct.hasFillingOptions && (
        <>
          <h3 className="mt-5">Relleno</h3>
          <ul className="mt-2">
            {configuringProduct.fillingList?.map((filling, index) => (
              <li key={filling}>
                <button
                  onClick={() => fillingButtonClicked(index)}
                  className={`${
                    index === configuringProduct.fillingIndex ? "fillingButtonActive" : ""
                  } largeButton`}
                >
                  {filling}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      {!configuringProduct.isUnitarian && (
        <>
          <h3 className="mt-5">Raciones</h3>
          <ul className="mt-2">
            {configuringProduct.paxList?.map((pax, index) => (
              <li key={pax}>
                <button
                  onClick={() => paxButtonClicked(index)}
                  className={`${
                    index === configuringProduct.paxIndex ? "paxButtonActive" : ""
                  }`}
                >
                  {pax}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      <h3 className="mt-5">Cantidad</h3>
      <div className="quantitySelector mt-2">
        <button className="removeButton" onClick={() => configuringQuantityButtonClicked(-1)}>
          <span></span>
          <span></span>
        </button>
        <span className="text-4xl">{configuringProduct.quantity}</span>
        <button className="addButton" onClick={() => configuringQuantityButtonClicked(1)}>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="bottom mt-10">
        <button className="myButton01" onClick={addProductToOrderBasket}>
          Añadir al pedido
        </button>
        <span className="text-xl">
          {configuringProduct
            ? configuringProduct.finalPrice.toFixed(2).replace(".", ",") + "€"
            : "N/A"}
        </span>
      </div>
    </div>
  );
}