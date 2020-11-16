axios.defaults.baseURL = 'https://developer.duyiedu.com/vue/bz';
axios.interceptors.response.use((response) => {
    const { status } = response;
    if(status === 200){
        if(response.config.url === '/video'){
            return{
                count:response.data.count,
                data:response.data.data
            }
        }
        return response.data.data;
    }
    return response;
})