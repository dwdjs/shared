/*!
 * @Author: cloudyan <cloudcode@qq.com>
 * @Created at: 2020-03-25 22:04:34
 * 功能说明: 工具库utils
 */


// 防止快速点击
let lastClickTime = 0;
export function blockFastClick(){
  const time = Date.now();
  if (time - lastClickTime < 100) {
    return true;
  }
  lastClickTime = time;
  return false;
}

// 如果详情页主内容全是图片，完全可以匹配出图片后渲染，而非使用复杂的富文本解析组件
// 从html字符串中匹配<img>标签，再匹配src属性
export function regImgs(html = '', isGlobal) {
  // 匹配图片（g表示匹配所有结果i表示区分大小写）
  const imgReg = new RegExp('<img.*?(?:>|\/>)', (isGlobal ? 'ig' : 'i') );
  // 匹配src属性
  const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
  const arr = html.match(imgReg);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const src = arr[i].match(srcReg);
    // 获取图片地址
    if (src[1]) {
      result.push(src[1]);
      // alert('已匹配的图片地址'+(i+1)+'：'+src[1]);
    }
  }

  return result;
}

export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

export const randomString =
  '_~getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ';

export function random(size) {
  const result = [];
  while (0 < size--) {
    result.push(Math.floor(Math.random() * 256));
  }
  return result;
}

export function uuid(size = 21) {
  const url = randomString;
  let id = '';
  let bytes = [];
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    bytes = crypto.getRandomValues(new Uint8Array(size));
    // console.warn(':::uuid crypto:', bytes.join(','));
  } else {
    bytes = random(size);
    // console.warn(':::uuid random:', bytes.join(','));
  }
  while (0 < size--) {
    id += url[bytes[size] & 63];
  }
  return id;
}

export function randomRange(under, over) {
  switch(arguments.length) {
    case 1: return parseInt(Math.random()*under+1);
    case 2: return parseInt(Math.random()*(over-under+1) + under);
    default: return 0;
  }
}

/**
 * 数组去重
 *
 * @export
 * @param {*} tempArray
 * @param {*} key
 * @returns
 */
export function arrayToHeavy(arr = [], key) {
  if (key) {
    const cache = {};
    return arr.filter(item => {
      const val = item[key];
      if (cache[val]) return false;
      return cache[val] = true;
    });
  } else {
    return [...new Set(arr)];
  }
}

// 节流
export function throttle(func, wait, options) {
  /* eslint no-multi-assign: 0 */
  let context;
  let args;
  let result;
  let timeout = null;
  let previous = 0;

  if (!options) options = {};
  const later = () => {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };

  return (...rest) => {
    const now = Date.now();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    args = rest;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

// 防抖
export function debounce(func, wait, immediate) {
  let timeout;
  let args;
  let context;
  let timestamp;
  let result;

  const later = () => {
    const last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return (...rest) => {
    context = this;
    args = rest;
    timestamp = Date.now();
    const callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

export function promisify(fn, receiver) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.apply(receiver, [...args, (err, res) => {
        return err ? reject(err) : resolve(res)
      }])
    })
  }
}

// `sleep` 毫秒后执行resolve
export function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
