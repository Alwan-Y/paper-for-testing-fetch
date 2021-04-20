require('fs')
const path = require('path')
const data = require('../../../src/data/data.json')


const filePath = path.resolve(__dirname, '../../../src/data/data.json')

const username = document.querySelector('#username')
const button = document.querySelector('.buton')

button.addEventListener('click', () => {
    addUser()
})

const addUser = () => {
    data.push(username.value)
    return fs.writeFile(
        filePath,
        JSON.stringify(data)
    )
}
