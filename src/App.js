import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeliting, setIsDeliting] = useState(false);

  const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

  const refreshProducts = () => {
    setRefreshProductsFlag(!refreshProductsFlag);
  };

  useEffect(() => {
    setIsLoading(true);

    fetch('http://localhost:3005/products')
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
        setIsLoading(false);
      });
  }, [refreshProductsFlag]);

  const requestAddVacuumCleaner = () => {
    setIsCreating(true);
    fetch('http://localhost:3005/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        name: 'Новый пылесос',
        price: 4950,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log('Пылесос добавлен, ответ сервера:', response);
        refreshProducts();
      })
      .finally(() => setIsCreating(false));
  };

  const requestUpdateSmartphone = () => {
    setIsUpdating(true);
    fetch('http://localhost:3005/products/002', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        name: 'Смартфон',
        price: 17900,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log('Смартфон обновлён, ответ сервера:', response);
        refreshProducts();
      })
      .finally(() => setIsUpdating(false));
  };

  const requestDeleteHairDryer = () => {
    setIsDeliting(true);
    fetch('http://localhost:3005/products/003', {
      method: 'DELETE',
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log('Фен удалён, ответ сервера:', response);
        refreshProducts();
      })
      .finally(() => setIsDeliting(false));
  };

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
