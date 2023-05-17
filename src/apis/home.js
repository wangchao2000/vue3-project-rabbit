import httpInstance from '@/utils/http';

// 获取banner

export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}

// 获取新鲜好物

export function getFindNewAPI(){
    return httpInstance({
        url:'/home/new'
    })
}

// 获取人气推荐

export function getFindHotAPI(){
    return httpInstance({
        url:'/home/hot'
    })
}

// 获取所有的商品

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export function getGoodsAPI(){
    return httpInstance({
        url:'/home/goods'
    })
}