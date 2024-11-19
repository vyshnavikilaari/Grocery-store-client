import React, { useEffect, useState } from 'react'
import AdminDashboardHomeCards from '../../components/Admin/AdminDashboardHomeCards'
import {  getProductsCount,getBeautyandhygieneCount,getCleaningandhouseholdCount,getDairyproductsCount,getFruitsandvegCount,getSnacksCount, getUsersCount } from '../../api/api'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
const AdminDashboard = () => {
  const [users, setUsers] = useState(0)
  
  const [products, setProducts] = useState(0)
  const [beautyandhygiene, setBeautyandhygiene] = useState(0)
  const [cleaningandhousehold, setCleaningandhousehold] = useState(0)
  const [dairyproducts, setDairyproducts] = useState(0)
  const [fruitsandveg, setFruitsandveg] = useState(0)
  const [snacks, setSnacks] = useState(0)
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    try {
      const userresponse = await getUsersCount()
      if (userresponse.status === 200) {
        setUsers(userresponse.data.count)
      }
      const productresponse = await getProductsCount()
      if (productresponse.status === 200) {
        setProducts(productresponse.data.count)
      }
      const beautyandhygieneresponse = await getBeautyandhygieneCount()
      if (beautyandhygieneresponse.status === 200) {
        setBeautyandhygiene(beautyandhygieneresponse.data.count)
      }
      const cleaningandhouseholdresponse = await getCleaningandhouseholdCount()
      if (cleaningandhouseholdresponse.status === 200) {
        setCleaningandhousehold(cleaningandhouseholdresponse.data.count)
      }
      const dairyproductsresponse = await getDairyproductsCount()
      if (dairyproductsresponse.status === 200) {
        setDairyproducts(dairyproductsresponse.data.count)
      }
      const fruitsandvegresponse = await getFruitsandvegCount()
      if (fruitsandvegresponse.status === 200) {
        setFruitsandveg(fruitsandvegresponse.data.count)
      }
      const snacksresponse = await getSnacksCount()
      if (snacksresponse.status === 200) {
        setSnacks(snacksresponse.data.count)
      }
     
      
    } catch (error) {
      toast.error(error)
    } finally {
      setLoading(false)
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
  return (
    <div className='w-full min-h-[80vh] flex justify-center items-center'>
      <AdminDashboardHomeCards  products={products} beautyandhygiene={beautyandhygiene} cleaningandhousehold={cleaningandhousehold} dairyproducts={dairyproducts} fruitsandveg={fruitsandveg} snacks={snacks}  users={users} />
    </div>
  )
}

export default AdminDashboard