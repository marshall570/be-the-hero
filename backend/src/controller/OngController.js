const connection = require('../database/connection')
const GenerateUniqueID = require('../utils/GenerateUniqueID')

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body
        const id = GenerateUniqueID()
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        return response.json({ id })
    },

    async select(request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    }
}
