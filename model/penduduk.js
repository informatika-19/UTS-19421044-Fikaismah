const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pendudukSchema = new Schema({
    Nama: {
        type: String
    },
    TempatTanggallahir: {
        type: String
    },
    Alamat: {
        type: String
    },
    JenisKelamin: {
        type: String
    },
    RtRw: {
        type: String
    },
    KecDesa: {
        type: String
    },
    Agama: {
        type: String
    },
    Status: {
        type: String
    },
    Perkerjaan: {
        type: String
    },
    Kewarganegaraan: {
        type: String
    }
    
}) 

module.exports = mongoose.model('penduduk', pendudukSchema)