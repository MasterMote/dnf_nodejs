const template = require('art-template');
const dbData = require('../http/db')
const url = require('url')
template.defaults.root = './'

module.exports = {
    getAll: function(req, res) {
        dbData.getAll().then(datas => {
            res.render('index.html', { data: datas })
        })
    },
    getOne: function(req, res) {
        let urls = req.url
        let id = url.parse(urls, true).query
        dbData.getOne(id.hero_id).then(datas => res.send(datas))
    },
    updateOne: function(req, res) {
        let id = url.parse(req.url, true).query
        dbData.updateOne(id.hero_id).then(datas => {
            res.render('updateHero.html', { data: datas })
        })
    },
    updateOnePost: function(req, res) {
        dbData.updateOnePost(req.body).then(result => {
            if (result >= 1) {
                let str = "<script>alert('修改成功');window.location.href = '/'</script>"
                res.send(str)
            }
        })
    },
}