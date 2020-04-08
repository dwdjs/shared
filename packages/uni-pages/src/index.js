/*!
 * @Author: cloudyan <cloudcode@qq.com>
 * @Created at: 2020-04-08 10:06:43
 * 功能说明:
 */
const fs = require('fs')
const path = require('path')
const jsonFn = require('@dcloudio/uni-cli-shared/lib/json.js')

const { getJson } = jsonFn;

const pagesJSON = getJson('pages.json', true)

// console.log(JSON.stringify(pagesJSON));

export default pagesJSON;
