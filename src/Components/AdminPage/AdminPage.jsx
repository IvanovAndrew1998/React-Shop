import React, { useState } from 'react'
import './AdminPage.css'
import ACatalogue from './Components/AdminCatalogue/ACatalogue'
import AdminOrders from './Components/AdminOrders/AdminOrders';
import AList from './Components/List/AList'
import ProductEdit from './Components/ProductEdit/ProductEdit';

const AdminPage = () => {

  const [adminPageContent, setAdminPageContent] = useState("orders")

  return (
    <div className='adminPage'>
      <div className="inner">
        {adminPageContent === "catalogue" && (
          <>
            <ACatalogue />
            <AList />
          </>
        )}
        {adminPageContent === "productEdit" && (
          <ProductEdit />
        )}
        {adminPageContent === "orders" && (
          <AdminOrders/>
        )}
      </div>
    </div>
  )
}

export default AdminPage