const mongoose = require('mongoose')

const SiswaSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, 'id'],
        unique: true,
        index:true
    },
    nama: {
        type: String,
        required: [true, "Silahkan masukkan nama"],
        unique: true
    },
    nis: {
        type: String,
        required: [true, "Silahkan masukkan nis"],
        unique: true
    },
    kelas: {
        type: String,
        required: [true, "Silahkan masukkan kelas"],
        unique: true
    },
    umur: {
        type: String,
        required: [true, "Silahkan masukkan umur"],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Silahkan masukkan email valid!"]
    },
})

module.exports = mongoose.model('Siswa', SiswaSchema)