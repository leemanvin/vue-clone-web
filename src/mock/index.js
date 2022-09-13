const Mock = require('mockjs');
  
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/coins/list', 'get', require('./coins/list.json'));

Mock.mock('/index/topbar', 'get', require('./index/topbar.json'));
  
// Mock.mock('/index/foodlist2', 'post', require('./json/foodlist2.json'));