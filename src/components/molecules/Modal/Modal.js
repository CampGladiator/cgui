import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'
import Icon from '../../atoms/Icon'
import mods from '../../../utilities/mods'
import Heading from '../../atoms/Heading'

const ModalOpen = memo(({ className, open, ...props }) => (
  <div className={mods('cg-modal', { open }, className)} {...props} />
))

const ModalContainer = memo(props => (
  <div className="cg-modal__container" {...props} />
))

const ModalClose = memo(props => (
  <span className="cg-modal__close" {...props} />
))

const ModalHeader = memo(props => (
  <header className="cg-modal__header" {...props} />
))

const ModalTitle = memo(props => <Heading type="h4" secondary {...props} />)

const ModalSection = memo(props => (
  <section className="cg-modal__content" {...props} />
))

const ModalContent = memo(props => <p className="--left" {...props} />)

const ModalFooter = memo(props => (
  <footer className="cg-modal__footer" {...props} />
))

const Modal = ({
  modalTitle = '',
  modalContent = '',
  children,
  className,
  showModal = false,
  onModalClose,
}) => {
  const modalCloseHandler = e => {
    e.preventDefault()
    if (onModalClose) {
      onModalClose(e)
    }
  }

  if (showModal) {
    return (
      <ModalOpen className={className} open={showModal}>
        <ModalContainer>
          <ModalClose onClick={modalCloseHandler}>
            <Icon name="close" onClick={modalCloseHandler} />
          </ModalClose>
          <ModalHeader>
            <ModalTitle>{modalTitle}</ModalTitle>
          </ModalHeader>
          <ModalSection>
            <ModalContent>{modalContent}</ModalContent>
          </ModalSection>
          <ModalFooter>{children}</ModalFooter>
        </ModalContainer>
      </ModalOpen>
    )
  }
  return null
}

Modal.propTypes = {
  onModalClose: PropTypes.func,
  modalTitle: PropTypes.string,
  modalContent: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  showModal: PropTypes.bool,
}

export default Modal
