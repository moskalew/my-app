import { useState } from 'react';
import {
  useRequestAddVacuumCleaner,
  useRequestDeleteHairDryer,
  useRequestGetProducts,
  useRequestUpdateSmartphone,
} from './hooks';
import styles from './App.module.css';

export const App = () => {
  const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
  const refreshProducts = () => {
    setRefreshProductsFlag(!refreshProductsFlag);
  };

  const { isLoading, products } = useRequestGetProducts(refreshProductsFlag);

  const { isCreating, requestAddVacuumCleaner } =
    useRequestAddVacuumCleaner(refreshProducts);

  const { isUpdating, requestUpdateSmartphone } =
    useRequestUpdateSmartphone(refreshProducts);

  const { isDeliting, requestDeleteHairDryer } =
    useRequestDeleteHairDryer(refreshProducts);

  return (
    <div className={styles.App}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        products.map(({ id, name, price }) => (
          <div key={id}>
            {name} - {price} руб
          </div>
        ))
      )}
      <button disabled={isCreating} onClick={requestAddVacuumCleaner}>
        Новый пылесос
      </button>
      <button disabled={isUpdating} onClick={requestUpdateSmartphone}>
        Обновить смартфон
      </button>
      <button disabled={isDeliting} onClick={requestDeleteHairDryer}>
        Удалить фен
      </button>
    </div>
  );
};
