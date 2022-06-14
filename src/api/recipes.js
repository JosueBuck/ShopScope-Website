import client from "./client";

const generalPath = "recipes";

const getSimplifiedUserRecipes = (userId) =>
  client.get(`/${generalPath}/getLatestSimplifiedUserRecipes/${userId}`);


  export default {
    getSimplifiedUserRecipes
  }