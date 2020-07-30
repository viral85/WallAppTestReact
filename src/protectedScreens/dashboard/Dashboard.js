import React from 'react'
import { useSelector } from 'react-redux'

import DashboardPage from './components/DashboardPage'

export default function Dashboard() {
  const usersName = useSelector(state => state.auth.user.fullname)

  return <DashboardPage usersName={usersName} />
}
