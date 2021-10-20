import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

import Style from './Drawer.module.sass'

const drawer = '#drawer'
const drawerDirection = 'left'

export function useOpenDrawer() {
    const router = useRouter()

    // if true, it means that Drawer page is open
    if (router.asPath.includes(drawer)) return () => {}

    return () => router.push(router.asPath + drawer)
}

export function useCloseDrawer() {
    const router = useRouter()

    // if false, it means that Drawer page is close
    if (!router.asPath.includes(drawer)) return () => {}

    return () => router.back()
}

export function Drawer() {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const closeDrawer = useCloseDrawer()

    useEffect(() => {
        if (router.asPath.includes(drawer)) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [router.asPath])

    return (
        <div>
            <div>
                <SwipeableDrawer
                    id="drawer"
                    anchor={drawerDirection}
                    open={open}
                    disableSwipeToOpen={true}
                    onClose={() => {
                        closeDrawer()
                        setOpen(false)
                    }}
                    onOpen={() => setOpen(true)}
                >
                    <Content />
                </SwipeableDrawer>
            </div>
        </div>
    )
}

function Content() {
    return (
        <Box
            className={Style.drawer_container}
            sx={{
                width: 250 ?? 'auto'
            }}
            role="presentation"
            onClick={() => {}}
            onKeyDown={() => {}}
        >
            <img
                src="/assets/logo.svg"
                alt="logo"
                className={Style.drawer_container_logo}
            />

            <List className={Style.drawer_container_listText}>
                {[
                    { name: 'Inicio', url: '/' },
                    { name: 'posts', url: '/' },
                    { name: 'proyectos', url: '/' },
                    { name: 'referencias', url: '/' },
                    { name: 'Sobre mi', url: '/about' },
                    { name: 'tecnologías', url: '/' }
                ].map((text, index) => (
                    <ListItem button key={text.name} onClick={() => {}}>
                        <Link href={text.url}>
                            <a className={Style.drawer_container_text}>
                                {text.name}
                            </a>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
