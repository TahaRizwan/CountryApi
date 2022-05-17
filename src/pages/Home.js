import { styled, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material'
import { OutlinedInput } from '@mui/material'
import { useState } from 'react'
import CountryCard from '../components/CountryCard'
import { Container } from '@mui/material'
import { useEffect } from 'react'
import { InputLabel } from '@mui/material'

import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Skeleton } from '@mui/material'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    borderColor: '#000',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const Home = () => {
  const [region, setRegion] = useState('')

  const [countries, setCountries] = useState([])

  const [name, setName] = useState('')

  const noCountries = countries.status || countries.message

  const [loading, setLoading] = useState(true)

  const SearchByRegion = (value) => {
    if (value) {
      const fetchRegion = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${value}`
        )
        const data = await response.json()

        if (value === 'all') {
          try {
            fetchData()
          } catch (error) {
            console.log(error)
          }
          return
        }
        setName('')
        setCountries(data)
      }
      try {
        fetchRegion()
      } catch (error) {
        console.log(error)
      }
    } else {
      fetchData()
    }
  }

  const searchCountries = () => {
    if (name) {
      const fetchSearch = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        )
        const data = await response.json()
        setCountries(data)
      }
      try {
        fetchSearch()
      } catch (error) {
        console.log(error)
      }
    } else {
      fetchData()
    }
  }

  const fetchData = async () => {
    const response = fetch(`https://restcountries.com/v3.1/all`)
    const data = await (await response).json()

    if (data.status === 404) {
      setCountries([])
    }

    setCountries(data)
  }
  // Make a request for a user with a given ID
  useEffect(() => {
    try {
      fetchData()
      setLoading(!loading)
    } catch (error) {
      console.log(error)
    }
  }, [loading])

  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: { md: '100px', xs: '75px' },
        }}
      >
        <Grid
          className='gray'
          item
          xs={12}
          sm={4}
          sx={{
            marginLeft: { sm: '6.5rem', xs: '0rem' },
            backgroundColor: 'inherit',
            height: 'fit-content',
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
          }}
        >
          <Search sx={{ margin: 2, padding: 0 }} xs={8}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ padding: 0, maxWidth: '100%' }}
              placeholder='Search for a country…'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                searchCountries()
              }}
              className='w-100'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Grid>
        <Grid
          className='gray'
          item
          xs={6}
          sm={2.25}
          sx={{
            marginRight: { md: '6.5rem', xs: '0rem' },
            height: '100%',
            maxWidth: '100%',
            marginTop: { xs: '1rem' },
            marginLeft: { md: '200px', xs: '0px' },
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
          }}
        >
          <FormControl
            variant='standard'
            sx={{
              position: 'relative',
              m: 1,
              paddingX: '30px',
              padding: '20px',
              backgroundColor: 'inherit',
              color: 'inherit',
              minWidth: '90%',
              height: 'auto',
            }}
          >
            {!region && (
              <InputLabel
                id='demo-select-small'
                sx={{
                  padding: '20px',
                  fontWeight: '600',
                  top: -26,
                  backgroundColor: 'transparent',
                }}
              >
                Filter by Region
              </InputLabel>
            )}
            {region && (
              <InputLabel
                id='demo-select-small'
                sx={{ padding: '20px', fontWeight: '600' }}
                className='gray fs-1'
              >
                {region[0].toUpperCase() + region.slice(1)}
              </InputLabel>
            )}
            <Select
              className='gray'
              sx={{
                fontWeight: '600',
                border: 'none',
                opacity: '0',
                position: 'absolute',
                top: '0',
                left: '0',
              }}
              fullWidth
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              value={region}
              label='Filter By Region'
              onChange={(e) => {
                setRegion(e.target.value)
                SearchByRegion(e.target.value)
              }}
              MenuProps={MenuProps}
              input={<OutlinedInput />}
            >
              <MenuItem value='africa' className='gray'>
                Africa
              </MenuItem>
              <MenuItem value='america' className='gray'>
                America
              </MenuItem>
              <MenuItem value='asia' className='gray'>
                Asia
              </MenuItem>
              <MenuItem value='europe' className='gray'>
                Europe
              </MenuItem>
              <MenuItem value='oceania' className='gray'>
                Oceania
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Container sx={{ marginTop: '2.5rem' }}>
        <Grid container spacing={5}>
          {!noCountries ? (
            countries &&
            countries.map((country, index = 1) => (
              <CountryCard
                key={++index}
                name={country.name}
                flag={country.flags}
                population={country.population}
                region={country.region}
                capital={country.capital}
              ></CountryCard>
            ))
          ) : (
            <p>No countries.......</p>
          )}
          {loading && (
            <Grid item sx={{ width: '100vw' }}>
              <Skeleton />
              <Skeleton animation='wave' />
              <Skeleton animation='wave' />
              <Skeleton animation='wave' />
              <Skeleton animation='wave' />
              <Skeleton animation={true} />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  )
}

export default Home
