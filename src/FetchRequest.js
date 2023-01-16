
function FetchRequest(url, method, data){
    let request = {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      };
  
    const responseData = fetch(url, request)
        .then(response => response.json());

    return responseData;
};

export default FetchRequest;