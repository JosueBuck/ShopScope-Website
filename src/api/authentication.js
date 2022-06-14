import client from "./client";

const generalPath = "user";

const login = (body, _headers) =>
  client.post(`/${generalPath}/login`, body, {headers: _headers });


  export default {
    login
  }