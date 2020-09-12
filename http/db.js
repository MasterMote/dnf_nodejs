var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mdj960728',
    database: 'dnf_list'
})

connection.connect()

//取到修改的id值
let wh_id = undefined

module.exports = {
    getAll: function() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * from dnf_hero_list', function(err, data) {
                if (!err) {
                    resolve(data)
                    // connection.end()
                } else {
                    reject(err)
                }
            })
        })
    },
    getOne: function(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * from dnf_hero_list where hero_id = ' + id
            connection.query(sql, function(err, data) {
                if (!err) {
                    resolve(data)
                    // connection.end()
                } else {
                    reject(err)
                }
            })
        })
    },
    updateOne: function(id) {
        wh_id = id
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * from dnf_hero_list where hero_id = ' + id
            connection.query(sql, function(err, data) {
                if (!err) {
                    resolve(data)
                    // connection.end()
                } else {
                    reject(err)
                }
            })
        })
    },
    updateOnePost: function(obj) {
        return new Promise((resolve, reject) => {
            let sql = "UPDATE dnf_hero_list SET hero_class = '" + obj.hero_class + "',hero_level = '" + obj.hero_level + "',hero_skills = '" + obj.hero_skills + "' where hero_id = " + wh_id
            connection.query(sql, function(err, data) {
                console.log(sql)
                if (!err) {
                    resolve(data.changedRows)
                } else {
                    reject(err)
                }
            })
        })
    }
}