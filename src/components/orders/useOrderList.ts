import { ordersList } from "@/types/orders"
import { APIS } from "@/utils/serviceUrls";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react"

const useOrderList = () => {
    // ** states
    const [orders, setOrders] = useState<ordersList[]>();

    // ** fetch orders data
    const getAllOrderList = async () => {
        try {
            const response: AxiosResponse<ordersList[]> = await axios.get(APIS.ORDERS.LIST);
            setOrders(response?.data)

        } catch (error) {
            console.log(error)
        }
    }

    // **
    useEffect(() => {
        if (!orders) getAllOrderList()
    }, [orders])

    return {
        orders,
    }
}

export default useOrderList