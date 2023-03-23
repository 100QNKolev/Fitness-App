export const requester = async (method, url, data) => {
    const options = {};
    
    if(method !== 'GET')
    {
        options.method = method;

        if(data)
        {
            options.header = {
                'content-type': 'application/json'
            };

            options.body = JSON.stringify(data);
        }
    }

    const response = await fetch(url, options);

    try {
        const result = await response.json();
        
        return result;
    }
    catch (err) {
        return {};
    }
};


export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');