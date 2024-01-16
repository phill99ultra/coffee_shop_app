import { StyleSheet } from 'react-native';
import React from 'react';

import { HistoryScreenProps } from '../../types/navigation';

import ScreenContainer from '../../hoc/ScreenContainer';
import ContentContainer from '../../hoc/ContentContainer';
import HeaderBar from '../../components/HeaderBar';
import OrderHistoryList from './OrderHistoryList';
import Animation from '../../components/PopUpAnimation';
import DownloadButton from './DownloadButton';

import useOrderHistory from './hooks';

function OrderHistoryScreen({ navigation }: HistoryScreenProps) {
  const {
    orderHistoryList,
    state: { showAnimation },
    handlePressDownload,
  } = useOrderHistory();
  return (
    <ScreenContainer>
      {showAnimation && (
        <Animation
          style={styles.Animation}
          source={require('../../lottie/download.json')}
        />
      )}
      <ContentContainer>
        <HeaderBar title="Order History" />
        <OrderHistoryList
          ordersList={orderHistoryList}
          navigation={navigation}
        />
        {orderHistoryList.length > 0 && (
          <DownloadButton handlePress={handlePressDownload} />
        )}
      </ContentContainer>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  Animation: {
    height: 250,
  },
});

export default OrderHistoryScreen;
