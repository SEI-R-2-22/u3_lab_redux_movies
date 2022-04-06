import Axios from 'axios'

const Client = Axios.create({ baseURL: 'http://localhost:3001/api' })

export default Client


// import Client from './'

// export const GetMovies = async () => {
//   try {
//     const res = await Client.get('/movies')
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

// export const GetDepartmentProducts = async (departmentId) => {
//   try {
//     const res = await Client.get(`/departments/${departmentId}`)
//     return res.data.Products
//   } catch (error) {
//     throw error
//   }
// }