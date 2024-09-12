import Box from '@mui/material/Box'


const style = {
    backgroundColor: '#202024',
    borderRadius: '8px',
    overflow: 'hidden',
}

export function Sidebar() {
    return (
        <>
            <Box component='aside' sx={style}>
                <img
                    // className={styles.cover}
                    src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                />
                <div 
                // className={styles.profile}
                >
                    {/* <Avatar src="https://avatars.githubusercontent.com/u/166733735?v=4" /> */}
                    <strong>Carlos Rangel</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="#">
                        {/* <PencilLine size={20} /> */}
                        Editar seu perfil
                    </a>
                </footer>
            </Box>
        </>
    )
}