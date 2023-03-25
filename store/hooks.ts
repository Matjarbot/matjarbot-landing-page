import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { setOrders } from './orders/orderSlice'
import type { RootState, AppDispatch } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
