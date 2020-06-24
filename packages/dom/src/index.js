/*!
 * @Author: cloudyan <cloudcode@qq.com>
 * @Created at: 2020-03-25 22:03:00
 * 功能说明: dom 相关操作
 */

// 获取元素距离顶部高度
export function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset
}

// 设置滚动高度
export function setScrollTop(element, value) {
  'scrollTop' in element ? (element.scrollTop = value) : element.scrollTo(element.scrollX, value)
}

// 获取元素距离顶部高度
export function getElementTop(element) {
  return (element === window ? 0 : element.getBoundingClientRect().top) + getScrollTop(window)
}

export function getVisibleHeight(element) {
  return element === window ? element.innerHeight : element.getBoundingClientRect().height
}

/* 找到最近的触发滚动事件的元素
 * @param {Element} element
 * @param {Element} rootElement
 * @return {Element | window}
 */
export function getScrollEventTarget(element, rootParent = window) {
  let currentNode = element
  // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and
  // http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
  while (
    currentNode &&
    currentNode.tagName !== 'HTML' &&
    currentNode.tagName !== 'BODY' &&
    currentNode.nodeType === 1 &&
    currentNode !== rootParent
  ) {
    const { overflowY } = this.getComputedStyle(currentNode)
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode
    }
    currentNode = currentNode.parentNode
  }
  return rootParent
}

// 判断元素是否被加入到页面节点内
export function isAttached(element) {
  let currentNode = element.parentNode
  while (currentNode) {
    if (currentNode.tagName === 'HTML') {
      return true
    }
    if (currentNode.nodeType === 11) {
      return false
    }
    currentNode = currentNode.parentNode
  }
  return false
}

export let supportsPassive = false

try {
  const opts = {}
  Object.defineProperty(opts, 'passive', {
    get() {
      supportsPassive = true
    },
  })
  window.addEventListener('test-passive', null, opts)
} catch (e) {
  // do nothing
}

// 移动端Web界面滚动性能优化: Passive event listeners
// https://blog.csdn.net/shenlei19911210/article/details/70198771
// passive 设置为true时，表示 listener 永远不会调用 preventDefault() 来优化性能
export function on(target, event, handler, passive = false) {
  target.addEventListener(event, handler, supportsPassive ? { capture: false, passive } : false)
}

export function off(target, event, handler) {
  target.removeEventListener(event, handler)
}

export function once(el, event, fn) {
  const listener = function () {
    if (fn) {
      fn.apply(this, arguments)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}

export function hasClass(el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
};

export function addClass(el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
};

export function removeClass(el, cls) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
};
