import React, { useEffect } from 'react'
import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { ordersList } from '@/types/orders'
import useOrderList from './useOrderList'

type Props = {
	data: ordersList[]
}
const OrdersList: React.FC<Props> = ({ data }) => {
	const { orders, setOrders, handleSort, dragOrder, dragOverOrder } =
		useOrderList()

	useEffect(() => {
		setOrders(data)
	}, [data, setOrders])

	return (
		<>
			{orders &&
				orders.length &&
				orders.map(({ id, order }, idx: number) => (
					<Stack
						sx={{
							background: '#b61b1b',
							color: '#FFF',
							width: '20%',
							padding: 1,
							cursor: 'move'
						}}
						key={id}
						spacing={3}
						direction='row'
						alignItems='center'
						draggable
						onDragStart={(e) => (dragOrder.current = idx)}
						onDragEnter={(e) => (dragOverOrder.current = idx)}
						onDragEnd={handleSort}
						onDragOver={(e) => e.preventDefault()}
					>
						<Image alt='Menu' src='/assets/menu.svg' width={20} height={20} />
						<Typography variant='subtitle1'>{order}</Typography>
					</Stack>
				))}
		</>
	)
}

export default OrdersList
