import React from 'react'
import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { ordersList } from '@/types/orders'

type Props = {
	orders: ordersList[]
}

const OrdersList: React.FC<Props> = ({ orders }) => {
	return (
		<>
			{orders &&
				orders.length &&
				orders.map((order) => (
					<Stack
						sx={{
							background: '#b61b1b',
							color: '#FFF',
							width: '20%',
							padding: 1,
							cursor: 'move'
						}}
						key={order.id}
						spacing={3}
						direction='row'
						alignItems='center'
					>
						<Image alt='Menu' src='/assets/menu.svg' width={20} height={20} />
						<Typography variant='subtitle1'>{order?.order}</Typography>
					</Stack>
				))}
		</>
	)
}

export default OrdersList
