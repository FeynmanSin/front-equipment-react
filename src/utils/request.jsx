import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';
const service = axios.create({
  baseURL: '',
  timeout: 30000,
});

const httpCodeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。httpStatus：400',
  401: '用户没有权限（令牌、用户名、密码错误）。httpStatus：401',
  403: '权限不足，请联系管理员！httpStatus：403',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。httpStatus：404',
  405: '对于请求所标识的资源，不允许使用请求行中所指定的方法。httpStatus：405',
  406: '请求的格式不可得。httpStatus：406',
  410: '请求的资源被永久删除，且不会再得到的。httpStatus：410',
  422: '当创建一个对象时，发生一个验证错误。httpStatus：422',
  500: '服务器发生错误，请检查服务器。httpStatus：500',
  502: '网关错误。httpStatus：502',
  503: '服务不可用，服务器暂时过载或维护。httpStatus：503',
  504: '网关超时。httpStatus：504',
};


/* 请求拦截 */
service.interceptors.request.use((config) => {
  return config;
}, (error) => {
  message.error(`requestError:${error}`, 5);
  return Promise.reject(error);
});

/* 响应拦截 */
service.interceptors.response.use((response) => {
  return response;
}, (error) => {
  message.error(`responseError:${error}`, 5);
  return Promise.reject(error);
});



/**
 *请求封装
 * *url:完整接口路径
 * *method:get||post
 * *data:请求参数对象
 */
const useRequest = (url, method, data, config) => {
  const [loading, setLoading] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const request = async () => {
    setLoading(true);
    try {
      const result = await service({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: data,
      });
      setResult(result.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    request();
  }, []);

  return {
    loading,
    result,
    error
  }
};
export default useRequest;