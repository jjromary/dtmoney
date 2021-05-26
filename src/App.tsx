import React, { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header";
import { NewTransactionModal} from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal}/>
      <Dashboard /> {/*DENTRO DO DASHBOARD ESTÁ O SUMMARY */}  

      <NewTransactionModal  
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />    
      <GlobalStyle />
    </TransactionsProvider>
  );
}