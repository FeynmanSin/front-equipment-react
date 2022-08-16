/**
 * @description: 侧边栏配置
 * @param {String} label
 * @param {String,Number} key
 * @param {Component} icon
 * @param {Array} children
 * @return {Object}
 */
export const getItem = (label, key, icon, children) => {
  return { key, icon, children, label }
}
