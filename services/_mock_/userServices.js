const Services = jest.genMockFromModule('../userServices')

function createUser(body) {
    const keys = ['name','last_name','email','password']
    const newUser = {
        "is_admin": false,
        "is_active": true,
        "_id": "5f20e5da3561c230e898ffb4",
        "name": "Juan",
        "last_name": "Perez",
        "email": "pep3@gmail.com",
        "password": "$2b$10$G8Hgtvl96aAGSkMQu.uB7uoEehI3iAfe3EnP8AmZoqzio6.uuneD.",
        "phone_number": 445343554,
        "createdAt": "2020-07-29T02:58:34.509Z",
        "updatedAt": "2020-07-29T02:58:34.509Z",
        "__v": 0
    }

    const responseDataBase = new Promise((resolve,reject) => {
        if(keys.every((key) => Object.keys(body).includes(key))){
            resolve(newUser)
        } else {
            reject (new Error("Mongo Error"))
        }
    })

    return responseDataBase
}

function getUsers() {
    const users = [
        {
            _id: "5f20e5da3561c230e898ffb4",
            name: "Juan",
            last_name: "Perez",
            email: "pep3@gmail.com",
            password: "$2b$10$G8Hgtvl96aAGSkMQu.uB7uoEehI3iAfe3EnP8AmZoqzio6.uuneD.",
            phone_number: 445343554,
            is_admin: false,
            is_active: true,
            createdAt: "2020-07-29T02:58:34.509Z",
            updatedAt: "2020-07-29T02:58:34.509Z",
            __v: 0
        }
    ]

    return new Promise((resolve) => {
        resolve(users)
    })
}

Services.createUser = createUser
Services.getUsers = getUsers

module.exports = Services