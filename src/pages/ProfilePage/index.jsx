import Header from 'comman/components/Header'
import { SubHeader } from 'comman/components/SubHeader'
import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { ProfileEdit } from './components/ProfileEdit'
import { ProfileHeader } from './components/ProfileHeader'

export const ProfilePage = () => {
    return (
        <>
        <Header/>
        <SubHeader/>
        <ProfileHeader/>
        <ProfileEdit />
        </>
    )
    
}
