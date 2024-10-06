import { useState } from 'react';
export const useRequestDeleteHairDryer = (refreshProducts) => {
  const [isDeliting, setIsDeliting] = useState(false);
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
  return {
    isDeliting,
    requestDeleteHairDryer,
  };
};
