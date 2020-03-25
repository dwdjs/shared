/*!
 * @Author: cloudyan
 * @Created at: 2020-02-21 19:24:12
 * 功能说明: 封装 storage，同步取，异步存
 */

let allData = {};

// 不要使用常用的 KEY, 避免冲突
const STORAGE_KEY = 'uni_global'
try {
  allData = uni.getStorageSync(STORAGE_KEY) || {};
} catch (err) {
  // error
  console.error(err);
  allData = {};
}

export const storage = {
  set(key, value, time = 3600) { // time 单位秒，默认1h
    // if (!time) time = 86400 * 365;
    const timeout = Date.now() + time * 1000;
    const data = {
      value,
      timeout,
    };
    Object.assign(allData, {
      [`${key}`]: data,
    });
    uni.setStorage({
      key: STORAGE_KEY,
      data: allData,
      success: function () {
        // console.log('success');
      }
    });
  },
  get(key) {
    if (!key) return; // undefined
    const temp = allData[key] || {};
    if (!temp.timeout) return;
    if (typeof temp.value === 'undefined') return;
    const now = Date.now();
    if (temp.timeout < now) {
      this.remove(key);
      return;
    }
    return temp.value;
  },
  remove(key) {
    if (!key) return;
    delete allData[key];
    this.setAllData();
  },
  clear(bool) { //
    allData = {};
    if (!bool) {
      this.setAllData();
    } else {
      // 传 true 异步清除所有类型的缓存
      uni.clearStorage();
    }
  },
  setAllData() {
    uni.removeStorage({
      key: STORAGE_KEY,
      success: function () {
        // console.log('success');
      }
    });
  }
}
