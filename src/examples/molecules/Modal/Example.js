import React, { useState } from 'react'
import Modal from '../../../components/molecules/Modal'
import Card from '../../../components/atoms/Card'
import Button from '../../../components/atoms/Button'

const ModalDefault = () => {
  const [show, setShow] = useState(false)

  const toggleModal = () => {
    setShow(!show)
  }
  return (
    <Card style={{ padding: '30px' }}>
      <Button solid primary onClick={toggleModal}>
        Open Modal
      </Button>
      <Modal
        showModal={show}
        modalTitle="modal title"
        modalContent="Lorem ipsum dolor sit amet."
        onModalClose={toggleModal}
      >
        <Button solid primary outline size="large" onClick={toggleModal}>
          Action
        </Button>
      </Modal>
    </Card>
  )
}

export default () => <ModalDefault />
