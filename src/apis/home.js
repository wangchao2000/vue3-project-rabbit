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