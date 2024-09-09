import React from 'react'

import { verifySession } from '@/lib/actions/authActions'
import NotAuthenticated from '@/components/authRelated/NotAuthenticated';
import MobileDashboard from '@/components/dashboard/MobileDashboard';
import DesktopDashboard from '@/components/dashboard/DesktopDashboard';
import { getUser } from '@/lib/actions/dbActions';
import CompleteSignup from '@/components/authRelated/complete-signup/CompleteSignup';

const page = async () => {

  const { user, isAuthenticated } = await verifySession()


  if (isAuthenticated) {

    const dbUser = await getUser({ email: user?.email })

    // Check if user has completed DB registratory process
    if (dbUser.user) {
      return (
        <div>
          <MobileDashboard user={user} />
          <DesktopDashboard user={user} />
        </div>
      )
    } else {
      return (
        <CompleteSignup user={user} />
      )
    }

  } else {
    return (
      <NotAuthenticated />
    )
  }
}

export default page