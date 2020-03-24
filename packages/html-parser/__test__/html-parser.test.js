import htmlParser from '../src';

const htmlStr = '<p style="color: red; text-align: center;">这是<strong>简单</strong>富文本</p>';

const htmlNodes = [
  {
    "name": "p",
    "attrs": {"style": "color: red; text-align: center;"},
    "children": [
      {
        "type": "text",
        "text": "这是"
      },
      {
        "name": "strong",
        "children": [{
          "type": "text",
          "text": "简单"
        }]
      },
      {
        "type": "text",
        "text": "富文本"
      }
    ]
  }
];

test('html-parser', () => {
  expect(JSON.stringify(htmlParser(htmlStr))).toBe(JSON.stringify(htmlNodes));
})


