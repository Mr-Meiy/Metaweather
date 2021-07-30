async function fetchText() {
    let response = await fetch('https://www.metaweather.com/api/location/search/?query=san', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
    });
    let json = await response.json();
    console.log(json);
}

fetchText();