import OrdersList from '@/components/orders/OrdersList'
import { Stack, Typography, Container } from '@mui/material'

const Home = () => {
	return (
		<Container>
			<Stack spacing={1} alignItems='center'>
				<Typography variant='h3'>Orders</Typography>
				<OrdersList />
			</Stack>
		</Container>
	)
}

export default Home
