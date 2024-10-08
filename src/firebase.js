import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCJU8m3AIJmHjU6h2E5YZnZ5OvNsPwQkdc',
  authDomain: 'productsproject-8e557.firebaseapp.com',
  projectId: 'productsproject-8e557',
  storageBucket: 'productsproject-8e557.appspot.com',
  messagingSenderId: '443064441679',
  appId: '1:443064441679:web:0ebcfec97cb41a7175033a',
  databaseURL:
    'https://productsproject-8e557-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
