const ar = require('../../langs/ar/ar.json')
export const createSuccessMessage = ({ title }: { title: any }) => ({
    type: 'success',
    content: ar[title]
})

export const createDangerMessage = ({ title }: { title: any }) => ({
    type: 'danger',
    content: ar[title]
})

export const createWarningMessage = ({ title }: { title: any }) => ({
    type: 'warning',
    content: ar[title]
})

export const notificationsMessageCreator: any = {
    'orders/accept/fulfilled': createSuccessMessage({ title: 'order_accepted_message_text' }),
    'orders/complete/fulfilled': createSuccessMessage({ title: 'order_completed_message_text' }),
    'orders/pay/fulfilled': createSuccessMessage({ title: 'order_paid_message_text' }),
    'orders/reject/fulfilled': createDangerMessage({ title: 'order_rejected_message_text' }),
    'orders/delay/fulfilled': createWarningMessage({ title: 'delaiyed_message_text' }),
    'product/quantity/update/fulfilled': createSuccessMessage({
        title: 'update_product_quantity_message'
    })
}