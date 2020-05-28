class People {
    api(){
        return fetch('https://randomuser.me/api/?results=10')
        .then((response) => {
            return response.json();
        })
    }
}

export default People;