const getData = async (url, payload) => {
    const searchPeopleUrl = `${url}?search=${payload}`;

    const res = await fetch(searchPeopleUrl);
    const resJson = await res.json();

    console.log(resJson.results)
    return resJson.results
}

export {getData}