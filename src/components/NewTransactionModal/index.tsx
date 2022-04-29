import { useState, FormEvent } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import Modal from 'react-modal'

import incomeImg from '../../assets/income.svg' 
import outcomeImg from '../../assets/outcome.svg' 
import closeImg from '../../assets/close.svg'

import { Container, TransactionsTypeContainer, RadioBox } from './styles';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function NewTransactionModal({ isOpen, onRequestClose }:NewTransactionModalProps) {

  const { createTransaction } = useTransactions()
    
  const [ type, setType ] = useState('deposit')
  const [ title, setTitle ] = useState('')
  const [ amount, setAmount ] = useState(0)
  const [ category, setCategory ] = useState('')

  function resetModal() {
    setType('deposit')
    setTitle('')
    setAmount(0)
    setCategory('')
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    await createTransaction({
      type,
      title,
      amount,
      category,
    })

    onRequestClose()
    resetModal()
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          type="text"
          placeholder="Título" 
          value={title} 
          onChange={event => setTitle(event.target.value)}
        />
        <input 
          type="number"
          placeholder="Valor"
          value={amount} 
          onChange={event => setAmount(Number(event.target.value))}
        />
        
        <TransactionsTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            colorActive="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            colorActive="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionsTypeContainer>

        <input 
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}