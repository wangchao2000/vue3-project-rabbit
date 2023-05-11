import httpInstance from '@/utils/http';

export function getApitest() {
    return httpInstance({
        url: 'home/category/head'
    })
}