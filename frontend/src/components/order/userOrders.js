import { Fragment, useEffect } from 'react';
import MetaData from '../layouts/MetaData';
import { MDBDataTable } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { userOrders as userOrdersAtion } from '../../actions/orderActions';
import { Link } from 'react-router-dom';

export default function UserOrders() {
    const { userOrders = [] } = useSelector(state => state.orderState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userOrdersAtion)
    }, [dispatch])

    const setOrders = () => {
        const data = {
            columns: [
                {
                    label: 'Order Id',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Number of Items',
                    field: 'numOfItems',
                    sort: 'asc'
                },
                {
                    label: 'Amount',
                    field: 'amount',
                    sort: 'asc'
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                },
            ],
            rows: []
        }

        userOrders.forEach(userOrder => {
            const getStatusColor = (status) => {
                switch (status) {
                    case 'Cancelled':
                        return 'red';
                    case 'Delivered':
                        return 'green';
                    case 'Processing':
                        return 'orange';
                    default:
                        return 'black';
                }
            };
        
            data.rows.push({
                id: userOrder._id,
                numOfItems: userOrder.orderItems.length,
                amount: `₹ ${userOrder.totalPrice}`,
                status: (
                    <p style={{ color: getStatusColor(userOrder.orderStatus) }}>
                        {userOrder.orderStatus}
                    </p>
                ),
                actions: (
                    <Link to={`/order/${userOrder._id}`} className='btn btn-primary'>
                        <i className='fa fa-eye'> </i>
                    </Link>
                )
            });
        });
        
        return data
    }


    return (
        <Fragment>
            <MetaData title='my Orders' />
            <h1 className='mt-5'>My Orders</h1>
            <MDBDataTable
                className='px-3'
                responsive
                responsiveSm
                responsiveMd
                responsiveLg
                responsiveXl
                bordered
                striped
                small
                hover
                data={setOrders()}
            />
        </Fragment>
    )
}