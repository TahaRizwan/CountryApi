import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  CardMedia,
} from '@mui/material'
import { useRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CircularProgress } from '@mui/material'

const DetailPage = () => {
  const [country, setCountry] = useState([])
  let { name } = useParams()
  const hasFetchedData = useRef(false)

  const [status, setStatus] = useState(false)

  const history = useNavigate()

  useEffect(() => {
    if (!hasFetchedData.current) {
      const getData = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        )
        const data = await response.json()

        if (data.status === 404) {
          setCountry([])
        }
        setCountry(data)
        setStatus(!status)
      }
      getData()
      hasFetchedData.current = true
    }
  }, [name, status])
  return (
    <>
      {!status && (
        <Grid
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {' '}
          <CircularProgress />{' '}
        </Grid>
      )}
      {status && (
        <Container sx={{ marginTop: '6rem' }}>
          <Grid container>
            <Grid item xs={5} md={2}>
              <Paper elevation={3}>
                <Button
                  className='gray'
                  variant=''
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: '900',
                    width: '100%',
                  }}
                >
                  <ArrowBackIcon />
                  <Typography
                    sx={{ marginLeft: '0.5rem', fontWeight: '900' }}
                    component='h6'
                    variant='subtitle1'
                    onClick={() => {
                      history('/')
                    }}
                  >
                    Go Back
                  </Typography>
                </Button>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component='img'
                image={country[0].flags.png}
                alt='Flag Image'
                sx={{
                  width: '100%',
                  height: 'auto',
                  boxShadow:
                    ' 0px 10px 10px -1px rgb(0 0 0 / 20%), 0px 10px 20px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
                }}
              ></CardMedia>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ paddingX: { md: '4rem' }, paddingY: '2rem' }}>
                <Typography
                  component='h5'
                  sx={{ fontWeight: '900' }}
                  variant='h5'
                >
                  {country[0].name.common}
                </Typography>
              </Box>
              <Grid container>
                <Grid item xs={6}>
                  <Box item sx={{ paddingLeft: { md: '4rem' } }}>
                    <Typography
                      component='span'
                      variant='subtitle1'
                      sx={{ fontWeight: '600' }}
                    >
                      Native Name:
                    </Typography>
                    <Typography
                      component='span'
                      variant='p'
                      sx={{ marginLeft: '10px' }}
                    >
                      {country[0].name.official}
                    </Typography>
                  </Box>
                  <Box item sx={{ paddingLeft: { md: '4rem' } }}>
                    <Typography
                      component='span'
                      variant='subtitle1'
                      sx={{ fontWeight: '600' }}
                    >
                      Population:
                    </Typography>
                    <Typography
                      component='span'
                      variant='p'
                      sx={{ marginLeft: '10px' }}
                    >
                      {country[0].population.toLocaleString()}
                    </Typography>
                  </Box>
                  <Box item sx={{ paddingLeft: { md: '4rem' } }}>
                    <Typography
                      component='span'
                      variant='subtitle1'
                      sx={{ fontWeight: '600' }}
                    >
                      Region:
                    </Typography>
                    <Typography
                      component='span'
                      variant='p'
                      sx={{ marginLeft: '10px' }}
                    >
                      {country[0].region}
                    </Typography>
                  </Box>
                  <Box item sx={{ paddingLeft: { md: '4rem' } }}>
                    <Typography
                      component='span'
                      variant='subtitle1'
                      sx={{ fontWeight: '600' }}
                    >
                      Subregion:
                    </Typography>
                    <Typography
                      component='span'
                      variant='p'
                      sx={{ marginLeft: '10px' }}
                    >
                      {country[0].subregion}
                    </Typography>
                  </Box>
                  <Box item sx={{ paddingLeft: { md: '4rem' } }}>
                    <Typography
                      component='span'
                      variant='subtitle1'
                      sx={{ fontWeight: '600' }}
                    >
                      Capital:
                    </Typography>
                    <Typography
                      component='span'
                      variant='p'
                      sx={{ marginLeft: '10px' }}
                    >
                      {country[0].capital[0]}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box item sx={{ paddingLeft: { md: '4rem' } }}>
                    <Typography
                      component='span'
                      variant='subtitle1'
                      sx={{ fontWeight: '600' }}
                    >
                      Top Level Domain:
                    </Typography>
                    <Typography
                      component='span'
                      variant='p'
                      sx={{ marginLeft: '10px' }}
                    >
                      {country[0].capital[0]}
                    </Typography>
                  </Box>
                  <Box item sx={{ paddingLeft: { md: '4rem' } }}>
                    <Typography
                      component='span'
                      variant='subtitle1'
                      sx={{ fontWeight: '600' }}
                    >
                      Currencies:
                    </Typography>
                    <Typography
                      component='span'
                      variant='p'
                      sx={{ marginLeft: '10px' }}
                    >
                      {Object.keys(country[0].currencies).map((cur) => cur)}
                    </Typography>
                  </Box>
                  <Box item sx={{ paddingLeft: { md: '4rem' } }}>
                    <Typography
                      component='span'
                      variant='subtitle1'
                      sx={{ fontWeight: '600' }}
                    >
                      Language:
                    </Typography>
                    <Typography
                      component='span'
                      variant='p'
                      sx={{ marginLeft: '10px' }}
                    >
                      {Object.keys(country[0].languages).map((lang) => lang)}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      paddingLeft: { md: '4rem' },
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      component='span'
                      variant='subtitle1'
                      sx={{ fontWeight: '600' }}
                    >
                      Border Countries:
                    </Typography>
                    <Paper
                      className='gray'
                      elevation={3}
                      sx={{
                        marginX: '1rem',
                        paddingX: '1.5rem',
                      }}
                    >
                      {country[0].borders[0]}
                    </Paper>
                    <Paper
                      className='gray'
                      elevation={3}
                      sx={{
                        marginX: '1rem',
                        paddingX: '1.5rem',
                      }}
                    >
                      {country[0].borders[1]}
                    </Paper>
                    <Paper
                      className='gray'
                      elevation={3}
                      sx={{
                        marginX: '1rem',
                        paddingX: '1.5rem',
                      }}
                    >
                      {country[0].borders[2]}
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default DetailPage
