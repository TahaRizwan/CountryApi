import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

const CountryCard = (props) => {
  return (
    <Grid
      item
      key={props.index}
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Link to={`/detail/${props.name.common}`}>
        <Card
          className='gray'
          key={props.id}
          sx={{
            backgroundColor: 'inherit',
            color: 'inherit',
            maxWidth: 250,
            marginBottom: 5,
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow:
                ' 0px 10px 10px -1px rgb(0 0 0 / 20%), 0px 10px 20px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
              cursor: 'pointer',
            },
          }}
        >
          <CardMedia
            component='img'
            image={props.flag.png}
            alt='Flag Image'
            sx={{ width: '250px', height: '180px' }}
          />
          <CardContent>
            <Box>
              <Typography
                gutterBottom
                variant='h5'
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
                component='div'
              >
                {props.name.common}
              </Typography>
              <Typography
                component='span'
                sx={{ fontWeight: 900 }}
                variant='p'
                color='inherit'
              >
                Population:
              </Typography>
              <Typography
                component='span'
                variant='p'
                color='inherit'
                sx={{ marginLeft: 1 }}
              >
                {props.population.toLocaleString()}
              </Typography>
            </Box>
            <Box>
              <Typography
                component='span'
                sx={{ fontWeight: 900 }}
                variant='p'
                color='inherit'
              >
                Region:
              </Typography>
              <Typography
                component='span'
                variant='p'
                color='inherit'
                sx={{ marginLeft: 1 }}
              >
                {props.region}
              </Typography>
            </Box>
            <Box>
              <Typography
                component='span'
                sx={{ fontWeight: 900 }}
                variant='p'
                color='inherit'
              >
                Capital:
              </Typography>
              <Typography
                component='span'
                variant='p'
                color='inherit'
                sx={{ marginLeft: 1 }}
              >
                {props.capital}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

export default CountryCard
