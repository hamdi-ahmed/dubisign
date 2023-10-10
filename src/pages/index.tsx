import OrdersList from '@/components/orders/OrdersList'
import { ordersList } from '@/types/orders'
import { APIS } from '@/utils/serviceUrls'
import { Stack, Typography, Container } from '@mui/material'
import axios, { AxiosResponse } from 'axios'

type Props = {
	orders: ordersList[]
}
const Home: React.FC<Props> = ({ orders }) => {
	return (
		<Container>
			<Stack spacing={1} alignItems='center'>
				<Typography variant='h3'>Orders</Typography>
				<OrdersList orders={orders} />
			</Stack>
		</Container>
	)
}

export default Home

export async function getServerSideProps() {
	const response: AxiosResponse<ordersList[]> = await axios.get(
		APIS.ORDERS.LIST
	)

	return { props: { orders: response?.data } }
}
