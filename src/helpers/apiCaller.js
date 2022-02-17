const ipApiCaller = async url => {
    const response = await fetch('https://api.ipgeolocation.io/getip');
    const data = await response.json();

    return data;
}

export {
    ipApiCaller
}