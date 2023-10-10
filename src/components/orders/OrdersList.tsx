import React from 'react'
import useOrderList from './useOrderList'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import Image from 'next/image'

const OrdersList = () => {
	const { orders } = useOrderList()
	console.log({ orders })
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
