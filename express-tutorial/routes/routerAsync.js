const { Router } = require("express");


class RouterAsync {
  _router;
  constructor() {
    this._router = Router();
  }

  asyncRouter = () => this._router;

  get = async (route, handler) => {
    await new Promise((resolve, reject) => {
      try {
        this._router.get(route, handler);
      } catch (e) {
        reject(e);
      }
      resolve();
    });
  };

  put = async (route, handler) => {
    await Promise.resolve(this._router.put(route, handler));
  };

  post = async (route, handler) => {
    await Promise.resolve(this._router.post(route, handler));
  };

  delete = async (route, handler) => {
    await Promise.resolve(this._router.delete(route, handler));
  };

  patch = async (route, handler) => {
    await Promise.resolve(this._router.patch(route, handler));
  };
}

module.exports = { RouterAsync };
