import OrdersList from '@/components/orders/OrdersList'
import useOrderList from '@/components/orders/useOrderList'
import { ordersList } from '@/types/orders'
import { APIS } from '@/utils/serviceUrls'
import { Stack, Typography, Container } from '@mui/material'
import axios, { AxiosResponse } from 'axios'
import { useEffect } from 'react'

type Props = {
	data: ordersList[]
}
const Home: React.FC<Props> = ({ data }) => {
	return (
		<Container>
			<Stack spacing={1} alignItems='center'>
				<Typography variant='h3'>Orders</Typography>
				<OrdersList data={data} />
			</Stack>
		</Container>
	)
}

export default Home

export async function getServerSideProps() {
	const response: AxiosResponse<ordersList[]> = await axios.get(
		APIS.ORDERS.LIST
	)

	return { props: { data: response?.data } }
}
