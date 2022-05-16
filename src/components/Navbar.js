import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Button } from '@mui/material'
import { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const IconButton = styled('div')(({ theme }) => ({}))

const Navbar = () => {
  const [tic, setTic] = useState(false)
  return (
    <AppBar
      position='absolute'
      sx={{ backgroundColor: 'inherit', color: 'inherit' }}
    >
      <StyledToolbar>
        <Typography
          variant='h6'
          component='h6'
          sx={{ margin: { md: 2, xs: 0 }, fontWeight: 900 }}
        >
          Where in the world?
        </Typography>
        <IconButton sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'inherit',
              color: 'inherit',
            }}
            onClick={() => {
              document.body.classList.toggle('theme')
              setTic(!tic)
            }}
          >
            <Typography
              sx={{
                color: 'inherit',
                margin: { md: 1, xs: 0 },
                fontSize: { xs: '13px' },
              }}
            >
              {tic ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
            </Typography>
            <Typography
              sx={{
                fontWeight: { xs: 900, md: 600 },
                fontSize: { xs: '11px', md: '1rem' },
              }}
            >
              {!tic ? 'DarK Mode' : 'Light Mode'}
            </Typography>
          </Button>
        </IconButton>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
