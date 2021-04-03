import * as firebase from "firebase/app"
import "firebase/firestore";

export const addRestaurant = (data) => {
  // chips: restaurantsコレクションに対し、ドキュメントを作成する
  // chips: 因みにドキュメントのデータ構造はオブジェクト型
  const collection = firebase.firestore().collection('restaurants');
  return collection.add(data);
}

export const getAllRestaurants = () => {
  /*
    TODO: Retrieve list of restaurants
  */
}

export const getDocumentsInQuery = (query, renderer) => {
  /*
    TODO: Retrieve list of restaurants
  */
}

export const getRestaurant = (id) => {
  /*
    TODO: Retrieve a single restaurant
  */
}

export const getFilteredRestaurants = (filters) => {
  /*
    TODO: Retrieve filtered list of restaurants
  */
}

export const addRating = (restaurantID, rating) => {
  /*
    TODO: Retrieve add a rating to a restaurant
  */
}

export const getRating = (id) => {
  return firebase.firestore().collection('restaurants').doc(id).collection('ratings').orderBy('timestamp', 'desc');
}
