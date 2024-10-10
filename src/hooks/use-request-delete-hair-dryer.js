import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteHairDryer = () => {
  const [isDeliting, setIsDeliting] = useState(false);
  const requestDeleteHairDryer = () => {
    setIsDeliting(true);

    const hairDryerDbRef = ref(db, 'products/003');

    remove(hairDryerDbRef)
      .then((response) => {
        console.log('Фен удалён, ответ сервера:', response);
      })
      .finally(() => setIsDeliting(false));
  };
  return {
    isDeliting,
    requestDeleteHairDryer,
  };
};
