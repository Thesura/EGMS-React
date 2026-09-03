
async function FetchRequest(url, method, data = {}) {
    let request = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch(url, request);

    console.log(response);

    if(!response.ok){
        const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
        error.status = response.status;
        error.response = response;
        throw error;
    }

    if(response.status === 204){
        return null;
    }

    return response.json();
};

async function FetchRequestToken(url, method, token) {
    let request = {
        method: method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    };

    const response = await fetch(url, request);

    if(!response.ok){
        const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
        error.status = response.status;
        error.response = response;
        throw error;
    }

    if(response.status === 204){
        return null;
    }

    return response.json();
};

export { FetchRequest, FetchRequestToken };