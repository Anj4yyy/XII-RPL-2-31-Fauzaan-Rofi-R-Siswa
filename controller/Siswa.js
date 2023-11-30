const Siswa = require('../models/Siswa')

// let siswa = [
//     {id: 1, nama: "Adhi", nis: "541211006", kelas: "XII RPL 1", umur: "17", email: "adhip@gmail.com"},
//     {id: 2, nama: "Akhtar", nis: "541211014", kelas: "XII RPL 1", umur: "17", email: "akhtarg@gmail.com"},
//     {id: 3, nama: "Arif", nis: "541211022", kelas: "XII RPL 1", umur: "17", email: "arifs@gmail.com"},
//     {id: 4, nama: "Azka", nis: "541211034", kelas: "XII RPL 1", umur: "18", email: "azkaz@gmail.com"},
//     {id: 5, nama: "Fauzan", nis: "541211073", kelas: "XII RPL 2", umur: "17", email: "fauzan@gmail.com"},
//     {id: 6, nama: "Hardiek", nis: "541211083", kelas: "XII RPL 3", umur: "18", email: "hardiekt@gmail.com"},
//     {id: 7, nama: "Zidane", nis: "541211120", kelas: "XII RPL 4", umur: "17", email: "crimson@gmail.com"},
//     {id: 8, nama: "Aldo", nis: "541211146", kelas: "XII RPL 4", umur: "18", email: "aldoa@gmail.com"},
//     {id: 9, nama: "Surya", nis: "541211168", kelas: "XII RPL 5", umur: "17", email: "suryab@gmail.com"}
// ]

module.exports = {
    //get all siswa
    index: async (req, res) => {
        try {
          const siswa = await Siswa.find()
          if(siswa.length > 0){
            res.status(200).json({
              status: true,
              data: siswa,
              method: req.method,
              url: req.url
            })
            
          }else{
            res.json({
              status: false,
              message: "Tidak ada daftar Siswa"
            })
          }
        } catch (error) {
            res.status(400).json({success: false})
        }
        },
        
        //get a Siswa
      show: async (req, res) => {
        try {
           const siswa = await Siswa.findById(req.params.id)
            res.json({
              status: true,
              data: siswa,
              method: req.method,
              url: req.url,
              message: "Data Siswa berhasil didapat"
            })

        } catch (error) {
          res.status(400).json({sucess: false})
        }
      },
        store: async (req, res) => {
            try {
              const siswa = await Siswa.create(req.body)
              // res.json(siswa)
              res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Berhasil menambahkan data Siswa"
              })
            } catch (error) {
                res.status(400).json({success: false})
            }
        },
        update: async (req, res) => {
            try {
               const siswa = await Siswa.findByIdAndUpdate(req.params.id, req.body, {
                  new: true,
                  runValidators: true
               })
                res.json({
                  status: true,
                  data: siswa,
                  method: req.method,
                  url: req.url,
                  message: "Berhasil mengubah data Siswa"
                })
    
            } catch (error) {
              res.status(400).json({sucess: false})
            }
            
            },
            delete: async (req, res) => {
                try {
                    await Siswa.findByIdAndDelete(req.params.id)
                    res.json({
                      status: true,
                      method: req.method,
                      url: req.url,
                      message: "Berhasil menghapus data Siswa"
                    })
                } catch (error) {
                  res.status(400).json({sucess: false})
                }
        
              },
}