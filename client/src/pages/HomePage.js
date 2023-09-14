import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/shared/Spinner'
import Layout from '../components/layout/Layout'

const HomePage = () => {
    const {loading}=useSelector(state=>state.alerts)
  return (
    <Layout>
        {
            loading ?<Spinner/>:(
                <>
                <h1>Home Page</h1>
                </>
            )
        }
    </Layout>
  )
}

export default HomePage