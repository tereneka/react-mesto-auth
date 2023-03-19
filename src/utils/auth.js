import { authConfig } from "./utils";

class Auth {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getApi(
    endpoint,
    method,
    body,
    optionalHeaders
  ) {
    return fetch(`${this._baseUrl}/${endpoint}`, {
      method,
      headers: {
        ...this._headers,
        ...optionalHeaders,
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  register({ password, email }) {
    return this._getApi("signup", "POST", {
      password,
      email,
    })
      .then((data) => data)
      .catch((err) => err);
  }

  authorize({ password, email }) {
    return this._getApi("signin", "POST", {
      password,
      email,
    })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
        }
        return data;
      })
      .catch((err) => err);
  }

  checkToken() {
    const jwt = localStorage.getItem("jwt");
    return this._getApi("users/me", "GET", null, {
      Authorization: `Bearer ${jwt}`,
    })
      .then((data) => data)
      .catch((err) => err);
  }
}

export const auth = new Auth(authConfig);
