import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import Style from './Drawer.module.sass'

import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

const drawer = '/#drawer'
const drawerDirection = 'left'

export function useOpenDrawer() {
    const router = useRouter()
    return () => router.push(drawer)
}

export function useCloseDrawer() {
    const router = useRouter()

    if (router.asPath !== drawer) return () => {}

    return () => router.back()
}

export function Drawer() {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (router.asPath === drawer) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [router.asPath])

    function Content() {
        return (
            <Box
                sx={{
                    width: 250 ?? 'auto'
                }}
                role="presentation"
                onClick={() => console.log('Box onclick')}
                onKeyDown={() => console.log('Box onKeyDown')}
            >
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                        (text, index) => (
                            <ListItem
                                button
                                key={text}
                                onClick={() => console.log('List item onclick')}
                            >
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    )}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        )
    }

    return (
        <div>
            <div>
                <SwipeableDrawer
                    anchor={drawerDirection}
                    open={open}
                    onClose={() => {
                        router.back()
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