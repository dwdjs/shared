/*!
 * @Author: cloudyan <cloudcode@qq.com>
 * @Created at: 2020-05-26 09:56:12
 * 功能说明: 封装 storage，同步取，异步存
 */

let storageData = {};
let allData = {};

// 小程序的 storage 方法使用方式不完全一致，统一处理
const {
  setStorage,
  // setStorageSync,
  // getStorage,
  getStorageSync,
  removeStorage,
  // removeStorageSync,
  clearStorage,
  // clearStorageSync,
  getStorageInfo,
  // getStorageInfoSync,
} = typeof my !== 'undefined' ? my : typeof wx !== 'undefined' ? wx : {};

// 不要使用常用的 KEY, 避免冲突
const STORAGE_KEY = 'uni_global'
try {
  allData = uni.getStorageSync(STORAGE_KEY) || {};
} catch (err) {
  // error
  console.error(err);
  allData = {};
}

export class Storage {
  constructor(store = STORAGE_KEY, time = 3600) {
    this.store = store;
    this._time = time && time > 0 ? time : 600;

    let data = {};
    try {
      if (typeof my !== 'undefined') {
        // aliapp
        data = getStorageSync({ key: this.store }).data || {};
      } else if (typeof wx !== 'undefined') {
        // wxapp
        data = getStorageSync(this.store) || {};
      }
    } catch(err) {
      console.error(err);
      data = {};
    }
    storageData[this.store] = data;
  }

  set(key, value, time = 3600) { // time 单位秒，默认1h
    // if (!time) time = 86400 * 365;
    const timeout = Date.now() + time * 1000;
    const data = {
      value,
      timeout,
    };
    Object.assign(storageData[this.store], {
      [`${key}`]: data,
    });
    setStorage({
      key: this.store,
      data: storageData[this.store],
      success(res) {
        // console.log('数据缓存成功');
        // console.log(res);
      },
    });
  }

  get(key) {
    if (!key) return; // undefined
    const temp = storageData[this.store][key] || {};
    if (!temp.timeout) return;
    if (typeof temp.value === 'undefined') return;
    const now = Date.now();
    if (temp.timeout < now) {
      this.remove(key);
      return;
    }
    return temp.value;
  }

  remove(key) {
    if (!key) return;
    delete storageData[this.store][key];
    this.setAllData();
  }

  clear(bool) { //
    allData = {};
    if (!bool) {
      this.setAllData();
    } else {
      // 传 true 异步清除所有类型的缓存
      clearStorage();
    }
  }

  setAllData() {
    removeStorage({
      key: this.store,
      success: function () {
        // console.log('success');
      }
    });
  }
}

export const storage = new Storage();
