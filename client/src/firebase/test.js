import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('ayW0Lq0SgGudyKQtcznj').collection('cartItems').doc('TUPMAmbIWLHHhdIaLkIK')
firestore.doc('/users/ayW0Lq0SgGudyKQtcznj/cartItems/TUPMAmbIWLHHhdIaLkIK')