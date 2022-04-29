import { useState } from "react";

import { TransactionProvider } from "./hooks/useTransactions";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/Index";

import { GlobalStyle } from "./styles/global";

export function App() {

  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionMod() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionMod}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}

