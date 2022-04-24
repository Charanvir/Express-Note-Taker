// this page redirects the browser to the file depending on the URL

const path = require("path")
const router = require("express").Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

// any URL that does not match the ones above, will automatically redirect to this page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

module.exports = router;