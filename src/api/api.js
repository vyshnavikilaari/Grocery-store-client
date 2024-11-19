
import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)
const getProductsCount = () => axios.get(`${API}/products/count`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)
const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`)

const getBeautyandhygiene = () => axios.get(`${API}/Beautyandhygiene/all`)
const getBeautyandhygieneCount = () => axios.get(`${API}/Beautyandhygiene/count`)
const addBeautyandhygiene = (Beautyandhygiene) => axios.post(`${API}/Beautyandhygiene/add`, Beautyandhygiene)
const editBeautyandhygiene = (Beautyandhygiene, id) => axios.put(`${API}/Beautyandhygiene/edit/${id}`, Beautyandhygiene)
const deleteBeautyandhygiene= (id) => axios.delete(`${API}/Beautyandhygiene/delete/${id}`)

const getCleaningandhousehold = () => axios.get(`${API}/Cleaningandhousehold/all`)
const getCleaningandhouseholdCount = () => axios.get(`${API}/Cleaningandhousehold/count`)
const addCleaningandhousehold = (Cleaningandhousehold) => axios.post(`${API}/Cleaningandhousehold/add`, Cleaningandhousehold)
const editCleaningandhousehold = (Cleaningandhousehold, id) => axios.put(`${API}/Cleaningandhousehold/edit/${id}`, Cleaningandhousehold)
const deleteCleaningandhousehold= (id) => axios.delete(`${API}/Cleaningandhousehold/delete/${id}`)

const getDairyproducts = () => axios.get(`${API}/Dairyproducts/all`)
const getDairyproductsCount = () => axios.get(`${API}/Dairyproducts/count`)
const addDairyproducts = (Dairyproducts) => axios.post(`${API}/Dairyproducts/add`, Dairyproducts)
const editDairyproducts = (Dairyproducts, id) => axios.put(`${API}/Dairyproducts/edit/${id}`, Dairyproducts)
const deleteDairyproducts= (id) => axios.delete(`${API}/Dairyproducts/delete/${id}`)

const getFruitsandveg = () => axios.get(`${API}/Fruitsandveg/all`)
const getFruitsandvegCount = () => axios.get(`${API}/Fruitsandveg/count`)
const addFruitsandveg = (Fruitsandveg) => axios.post(`${API}/Fruitsandveg/add`, Fruitsandveg)
const editFruitsandveg = (Fruitsandveg, id) => axios.put(`${API}/Fruitsandveg/edit/${id}`, Fruitsandveg)
const deleteFruitsandveg= (id) => axios.delete(`${API}/Fruitsandveg/delete/${id}`)

const getSnacks = () => axios.get(`${API}/Snacks/all`)
const getSnacksCount = () => axios.get(`${API}/Snacks/count`)
const addSnacks = (Snacks) => axios.post(`${API}/Snacks/add`, Snacks)
const editSnacks = (Snacks, id) => axios.put(`${API}/Snacks/edit/${id}`, Snacks)
const deleteSnacks= (id) => axios.delete(`${API}/Snacks/delete/${id}`)

//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)
const getUsersCount = () => axios.get(`${API}/users/count`)
const addUser = (user) => axios.post(`${API}/users/add`, user)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)
const resetPassword = (password, id) => axios.put(`${API}/users/resetpassword/${id}`, password)
//AuthEndponts
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)

export {
    Login,
    Register,
    getProducts,
    getProductsCount,
    addProduct,
    editProduct,
    deleteProduct,
    
    getBeautyandhygiene,
    getBeautyandhygieneCount,
    addBeautyandhygiene,
    editBeautyandhygiene,
    deleteBeautyandhygiene,

    getCleaningandhousehold,
    getCleaningandhouseholdCount,
    addCleaningandhousehold,
    editCleaningandhousehold,
    deleteCleaningandhousehold,

    getDairyproducts,
    getDairyproductsCount,
    addDairyproducts,
    editDairyproducts,
    deleteDairyproducts,

    getFruitsandveg,
    getFruitsandvegCount,
    addFruitsandveg,
    editFruitsandveg,
    deleteFruitsandveg,

    getSnacks,
    getSnacksCount,
    addSnacks,
    editSnacks,
    deleteSnacks,

    getUsers,
    getUsersCount,
    addUser,
    editUser,
    deleteUser,
    resetPassword,
    
}