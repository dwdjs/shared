/*!
 * @Author: cloudyan
 * @Created at: 2020-02-29 23:23:07
 * 功能说明: 下拉刷新 pullDown
 */

// TODO: wxapp 支持同组件内 vm.$emit 与 vm.$on 的消息机制，aliapp 不行
// 对比发现 aliapp this.$scope 下无 triggerEvent 方法
export const pullDown = {
  data() {
    return {
      pageStatus: 'complete', // loading over
    };
  },
  onLoad() {
    // console.log(111);
  },
  onUnload() {
    // this.$off('page:complete');
  },
  // 用户触发下拉刷新
  onPullDownRefresh(e = {}) {
    // aliapp 返回 { from: 'manual' }
    if (this.pageStatus === 'loading') {
      uni.stopPullDownRefresh();
      return;
    }
    this.pageStatus = 'loading';
    this.refreshPage();

    // 暂时无法使用 $on 等待 ajax 完成之后 stop
    uni.stopPullDownRefresh();
  },

  methods: {
    // 刷新页面，需要自定义
    refreshPage() {
      // this.resetList();
    },
  },
}
