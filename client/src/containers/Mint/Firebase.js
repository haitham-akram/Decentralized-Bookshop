import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH_Kq47GFcLBjgpqTwWhF5ALIOS1MH87w",
  authDomain: "book-shop-2644c.firebaseapp.com",
  databaseURL: "https://book-shop-2644c-default-rtdb.firebaseio.com",
  projectId: "book-shop-2644c",
  storageBucket: "book-shop-2644c.appspot.com",
  messagingSenderId: "967641231450",
  appId: "1:967641231450:web:42608e80862c80f964e863",
  measurementId: "G-RPVM3SL5M6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
const storageRef = storage.ref();
const booksRef = storageRef.child("books");

export const upload = (book, image, setBookURL, setImageURL) => {
  const bookRef = booksRef.child(`${book.name}`);
  const imageRef = booksRef.child(`${image.name}`);

  bookRef.put(book).then(function (snapshot) {
    snapshot.ref.getDownloadURL().then(function (downloadURL) {
      console.log("Book available at", downloadURL);
      setBookURL(downloadURL);
    });
  });

  imageRef.put(image).then(function (snapshot) {
    snapshot.ref.getDownloadURL().then(function (downloadURL) {
      console.log("Image available at", downloadURL);
      setImageURL(downloadURL);
    });
  });
};
