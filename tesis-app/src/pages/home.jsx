import React from 'react'
import { HeaderDash } from '../dashboard/HeaderDash'
import { MenuDash } from '../dashboard/MenuDash'
import { ContentDash } from '../dashboard/ContentDash'
import { FooterDash } from '../dashboard/FooterDash'

export const home = () => {
    return (
        <div>
            <HeaderDash />
            <MenuDash />
            <ContentDash />
            <FooterDash />
        </div>
    )
}

export default home