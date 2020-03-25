// 工具类
// https://stackoverflow.com/questions/34072598/es6-exporting-importing-in-index-file
// https://github.com/gajus/create-index
// https://github.com/leebyron/ecmascript-more-export-from
// https://github.com/tc39/proposal-export-default-from

export * from './copy.js';
export * from './parse.js';
export * from './urlfix.js';
export * from './stringify.js';
export * from './compact.js';
export * from './compactObject.js';

export function decodeQuery(query = {}) {
  const result = {};
  for (const key in query) {
    if (![undefined, ''].includes(query[key])) {
      result[decodeURIComponent(key)] = decodeURIComponent(query[key]);
    }
  }
  return result;
}

// export default {
//   copy,
//   parse,
//   stringify,
//   compact,
//   compactObject,
// }
