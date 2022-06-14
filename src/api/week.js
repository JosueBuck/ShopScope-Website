import client from "./client";

const generalPath = "weeks";

const getUserWeek = (userId) =>
  client.get(`/${generalPath}/getUserWeek/${userId}`);


  export default {
    getUserWeek
  }