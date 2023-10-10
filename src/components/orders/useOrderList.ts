import { ordersList } from "@/types/orders";
import { useRef, useState } from "react";


const useOrderList = () => {
    // ** states
    const [orders, setOrders] = useState<ordersList[]>([])

    // ** refs
    const dragOrder = useRef<any>(null);
    const dragOverOrder = useRef<any>(null);

    // ** drag && sort
    const handleSort = () => {
        //** copy items
        let ordersItems = [...orders];

        const draggedItemContent = ordersItems.splice(dragOrder.current, 1)[0];

        // ** replace the index
        ordersItems.splice(dragOverOrder.current, 0, draggedItemContent);

        dragOrder.current = null;
        dragOverOrder.current = null;

        // ** update order list
        setOrders(ordersItems);
    };

    return {
        orders,
        setOrders,
        handleSort,
        dragOrder,
        dragOverOrder
    }
}

export default useOrderList