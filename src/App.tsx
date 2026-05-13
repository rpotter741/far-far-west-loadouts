import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Paper,
  Typography,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { decrement, increment, reset } from './store/counterSlice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          Far Far West Loadouts
        </Typography>

        <Paper elevation={4} sx={{ p: 4, textAlign: 'center', width: '100%' }}>
          <Typography variant="h6" gutterBottom color="text.secondary">
            Redux Counter Demo
          </Typography>
          <Typography variant="h2" component="p" sx={{ my: 2 }}>
            {count}
          </Typography>
          <ButtonGroup variant="contained" size="large">
            <Button onClick={() => dispatch(decrement())}>−</Button>
            <Button onClick={() => dispatch(reset())} color="secondary">
              Reset
            </Button>
            <Button onClick={() => dispatch(increment())}>+</Button>
          </ButtonGroup>
        </Paper>

        <Typography variant="body2" color="text.secondary">
          Built with Vite · React · TypeScript · MUI · Redux Toolkit
        </Typography>
      </Box>
    </Container>
  )
}

export default App
