let express = require('express')
let app = express()

const port = 3000

app.use(express.static(__dirname + '/public'))

app.listen(port, () => {
    console.log(`Activity 1 listening on port ${port}`)
})