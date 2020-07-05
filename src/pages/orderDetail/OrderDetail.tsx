import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components/macro';
import { ItemDetail } from './components/ItemDetail';
import { ItemDetailsHeader } from './components/ItemDetailsHeader';
import { ItemDetailsFooter } from './components/ItemDetailsFooter';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { displayedOrderSelector, fetchOrder } from '../../features/orderSlice';
import { format } from 'date-fns';
import { useTitle, useScrollToTop } from '../../hook';

type Props = {};

function OrderDetail(): ReactElement {
  useTitle('Order Detail');
  useScrollToTop();
  const { orderId } = useParams<{ orderId: string | undefined }>();
  const dispatch = useDispatch();
  const order = useSelector(displayedOrderSelector);

  useEffect(() => {
    if (orderId) dispatch(fetchOrder({ orderId }));
  }, [dispatch, orderId]);

  return (
    <Container>
      <Header>Order's Detail</Header>
      {order ? (
        <>
          <SubHeader>
            {format(new Date(order.createdDate), 'MMMM do, yyyy')}
          </SubHeader>

          <ItemDetails>
            <ItemDetailsHeader />

            {Object.values(order.items).map(({ name, quantity, price, id }) => (
              <ItemDetail
                key={id}
                name={name}
                quantity={quantity}
                price={price}
              />
            ))}

            <ItemDetailsFooter
              total={order.total}
              subtotal={order.subtotal}
              shipping={order.shipping}
              tip={order.tip}
            />
          </ItemDetails>
        </>
      ) : (
        'Order not found'
      )}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  max-width: 50rem;
  margin-right: auto;
  padding: 2rem;
`;

type HeaderProps = {};
const Header = styled.h2<HeaderProps>``;

type SubHeaderProps = {};
const SubHeader = styled.h3<SubHeaderProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
`;

type ItemDetailsProps = {};
const ItemDetails = styled.div<ItemDetailsProps>`
  display: grid;
  grid-template-columns: 1fr auto auto;
  row-gap: 1rem;
  column-gap: 2rem;

  margin-top: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dotted ${(p) => p.theme.black};
`;

export { OrderDetail };
