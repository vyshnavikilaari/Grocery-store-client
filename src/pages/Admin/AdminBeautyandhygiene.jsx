import React, { useEffect, useRef, useState } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader2, Pencil, Plus, Trash, TriangleAlert, X } from 'lucide-react'
import { getBeautyandhygiene, addBeautyandhygiene, deleteBeautyandhygiene, editBeautyandhygiene } from '../../api/api'
import { toast } from 'sonner'

const AdminBeautyandhygiene = () => {
  //null -> products[] | Store the data
  const [beautyandhygiene, setBeautyandhygiene] = useState(null)
  //true (shows loading screen) -> false(hide loading screen) | Condition Render
  const [loading, setLoading] = useState(true)
  //new
  const [currentBeautyandhygiene, setCurrentBeautyandhygiene] = useState(null)
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const titleRef = useRef('')
  const imgRef = useRef('')
  const priceRef = useRef(0)
  const quantityRef = useRef('')
  const fetchData = async () => {
    try {
      const res = await getBeautyandhygiene()
      if (res.status === 200) {
        // console.log(res.data)
        setBeautyandhygiene(res.data)
      }
    } catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  }
  const handleAdd = async (e) => {
    e.preventDefault()
    const beautyandhygiene = {
      title: titleRef.current.value,
      img: imgRef.current.value,
      price: priceRef.current.value,
      quantity:quantityRef.current.value
    }
    try {
      const response = await addBeautyandhygiene(beautyandhygiene)
      if (response.status === 200) {
        // console.log("Product Added")
        toast.success('Product Added')
        setShowAdd(false)
        fetchData()
      }

    } catch (error) {
      toast.error("Error while Adding")
      console.error(error)
    }

  }
  const editHelper = (beautyandhygiene) => {
    console.log(beautyandhygiene)
    setCurrentBeautyandhygiene(beautyandhygiene)
    setShowEdit(true)
  }
  const handleEdit = async (e) => {
    e.preventDefault()
    const beautyandhygiene = {
      title: titleRef.current.value,
      img: imgRef.current.value,
      price: priceRef.current.value,
      quantity:quantityRef.current.value
    }
    try {
      const response = await editBeautyandhygiene(beautyandhygiene, currentBeautyandhygiene._id)
      if (response.status === 200) {
        setShowEdit(!showEdit)
        fetchData()
        toast.info("Product Updated !")
      }
    } catch (error) {
      toast.error("Error while Updating")
    }
  }
  const handleDelete = async (id) => {
    try {
      const response = await deleteBeautyandhygiene(id)
      if (response.status === 200) {
        // console.log("Product Deleted !")

        toast.success('Product Deleted')
        fetchData()
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-rose-500 h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  if (!beautyandhygiene || beautyandhygiene.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No Products Available !
          </p>
        </div>
      </>
    )
  }
  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
        <AdminPageHeader title='Beauty and hygiene Products' />
        <button className='w-10 h-10 font-bold flex justify-center items-center border-2 border-green-500 rounded-md
         text-green-500 shadow-md hover:text-white hover:bg-green-500 hover:shadow-md
          hover:shadow-green-400'
          onClick={() => setShowAdd(!showAdd)} >
          <Plus className='w-8 h-8' />
        </button>
      </div>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-md font-bold text-rose-700 text-left rounded-md'>
          <tr>
            <th className='p-6'>PID</th>
            <th className='p-6'>Image</th>
            <th className='p-6'>Title</th>
            <th className='p-6'>Price</th>
            <th className='p-6'>Quantity</th>
            <th className='p-6'>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            beautyandhygiene.map((beautyandhygiene, index) => (
              <tr key={index}>
                <td className='p-4'>{beautyandhygiene._id} </td>
                <td className='flex justify-start px-2 items-center'><img src={beautyandhygiene.img} alt={beautyandhygiene.title} className='h-12 w-12 object-cover rounded-full shadow-md bg-rose-500' /></td>
                <td className='p-4'>{beautyandhygiene.title} </td>
                <td className='p-4'>{beautyandhygiene.price}</td>
                <td className='p-4'>{beautyandhygiene.quantity}</td>
                <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
                  <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'
                    onClick={() => { editHelper(beautyandhygiene) }}>
                    <Pencil />
                  </button>
                  <button className='h-15 w-15 border-rose-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-rose-500 hover:text-white hover:shadow-rose-500'
                    onClick={() => { handleDelete(beautyandhygiene._id) }}>
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {showAdd && (
        <>
          <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
            <div className='h-[55%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
              <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                  <h1 className='w-1/2 text-left text-xl mt-12 pt-20 font-bold text-green-500'>Add Beauty and hygiene Product</h1>
                  <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowAdd(!showAdd) }}>
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-blue-600" />
                  </div>
                </div>
                <form className='h-full w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleAdd}>
                  <input ref={titleRef} type="text" name="" id="title" placeholder='Title' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required autoFocus />
                  <input ref={imgRef} type="text" name="" id="img" placeholder='Image URL' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required />
                  <input ref={priceRef} type="number" name="" id="price" placeholder='Price' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required />
                  <input ref={quantityRef} type="text" name="" id="quantity" placeholder='Quantity' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required />
                  <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-green-400 bg-green-500 text-white rounded-sm outline-none">Add</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
      {showEdit && (
        <>
          <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
            <div className='h-[55%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
              <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                  {/* <h1 className='w-1/2 text-left text-xl my-12 font-bold text-blue-500'>Edit Product</h1> */}
                  <h1 className='w-1/2 text-left text-xl mt-12 pt-20 font-bold text-blue-500'>Edit Beauty and Hygiene Product</h1>
                  <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowEdit(!showEdit) }}>
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form className='h-full w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleEdit}>
                  <input ref={titleRef} type="text" name="" id="title" placeholder='Title' defaultValue={currentBeautyandhygiene.title} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-yellow-600 rounded-sm' required autoFocus />
                  <input ref={imgRef} type="text" name="" id="img" placeholder='Image URL' defaultValue={currentBeautyandhygiene.img} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-blue-400 rounded-sm' required />
                  <input ref={priceRef} type="number" name="" id="price" placeholder='Price' defaultValue={currentBeautyandhygiene.price} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-blue-400 rounded-sm' required />
                  <input ref={quantityRef} type="text" name="" id="quantity" placeholder='quantity' defaultValue={currentBeautyandhygiene.quantity} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-blue-400 rounded-sm' required />
                  <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-blue-400 bg-blue-500 text-white rounded-sm outline-none">Save</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AdminBeautyandhygiene