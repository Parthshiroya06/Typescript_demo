import {
  StyleSheet,
  Text,
  Modal as DefaultModal,
  Pressable,
  View,
} from 'react-native';
import React, {FunctionComponent, ReactNode, useState} from 'react';

type ModalProps = {
  activator?: FunctionComponent<{handleOpen: () => void}>;
  children: ReactNode;
};

const Modal = ({activator: Activator, children}: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DefaultModal
        visible={isModalOpen}
        transparent={false}
        animationType="none">
        <View style={styles.centerView}>
          {children}
          <Pressable onPress={() => setIsModalOpen(false)}>
            <Text>{'Close'}</Text>
          </Pressable>
        </View>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={() => setIsModalOpen(true)} />
      ) : (
        <Pressable onPress={() => setIsModalOpen(true)}>
          <Text>{'On Press'}</Text>
        </Pressable>
      )}
    </>
  );
};

export {Modal};
const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
