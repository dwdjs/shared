/*!
 * @Author: cloudyan
 * @Created at: 2020-02-29 23:08:04
 * 功能说明: 上拉/滚动加载 pullUp
 */

// FIX: 关于 goNext入参 item 为什么时好时坏，什么规律什么原因？解决方案是 :key 不存在或不唯一的问题
// https://ask.dcloud.net.cn/question/74465
import { deepCopy } from '@deepjs/qs';

const PAGE_LIMIT = 'page_limit';
const PAGE_NUM = 'page_num';
const NEED_PAGINATION = 'need_pagination';
const PAGE_SERIAL = 'page_serial';
const TOTAL_PAGE = 'total_page';

// 默认参数
const listParamsDefault = {
  [`${PAGE_NUM}`]: 1,           // 每页条数
  [`${PAGE_LIMIT}`]: 10,        // 当前页
  [`${NEED_PAGINATION}`]: 1,    // 是否需要分页
  [`${PAGE_SERIAL}`]: '',       // 分页序列号
};

export const pullUp = {
  data() {
    return {
      listData: [],
      listStatus: 'more',
      listParams: {
        // [`${PAGE_LIMIT}`]: 10, // 可以修改默认值
      },  // 接口参数
    };
  },
  // 上拉触底事件 默认 onReachBottomDistance=50
  onReachBottom(e) {
    this.loadNextPage()
  },
  methods: {
    resetList() {
      this.listStatus = 'more';
      this.listData = [];
      this.listParams[`${PAGE_NUM}`] = 1;
      this.listParams[`${PAGE_SERIAL}`] = '';
    },
    loadNextPage() {
      // 加载下一页
      if (this.listStatus !== 'more') return; // 正在 loading 或 over 了
      this.listStatus = 'loading';

      this.listParams = {
        ...listParamsDefault,
        ...this.listParams,
      };
      this.listModel(
        this.listParams,
        res => {
          this.dealListRes(res);
        },
        err => {
          this.dealListErr(res);
          this.listStatus = 'more';
        },
      )
    },
    // 统一数据调用，需外部覆写，也可以这里 mock 数据
    listModel() {},
    dealListRes(res) {
      // 处理完去渲染数据后再将 loading 状态变更掉

      // 预处理数据，
      if (typeof this.preDealListRes === 'function') {
        res = this.preDealListRes(res);
        if (!res) {
          this.$showToast('preDealListRes 必须要返回 res');
          return;
        }
      }

      const { data = {} } = deepCopy(res);
      let { list = [] } = data;
      const pageNum = this.listParams[`${PAGE_NUM}`] || 1;
      const hasMore = data[`${TOTAL_PAGE}`] > pageNum;
      // TIP: 不允许存在这种情况，还有下页数据，但当前页却条数不足

      if (typeof this.dealList === 'function') {
        list = this.dealList(list);
        if (!list) {
          this.$showToast('dealList 必须要返回 list');
          return;
        }
      }

      this.listData = this.listData.concat(deepCopy(list));
      // console.log(this.listData);

      if (hasMore) {
        this.listParams[`${PAGE_SERIAL}`] = data[`${PAGE_SERIAL}`] || '';
        this.listParams[`${PAGE_NUM}`]++;
        this.listStatus = 'more';
      } else {
        this.listStatus = 'over';
      }

      // 最后无需数据参数
      if (typeof this.afterDealListRes === 'function') {
        this.afterDealListRes();
      }

      // TODO: aliapp $emit 一个非绑定的事件，会报错 这会影响其他组件的 change或 input 的$emit 操作吗？
      // this.$emit('list:complete');
    },
  },
}
