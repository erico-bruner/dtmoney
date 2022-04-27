import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      'transactions': [
        {
          id: 1,
          title: 'Trabalho Unifique',
          amount: 1650,
          type: 'deposit',
          category: 'Salário',
          createdAt: new Date('2022-04-26 09:00:00'),
        },
        {
          id: 2,
          title: 'Compra do mês',
          amount: 600,
          type: 'withdraw',
          category: 'Mercado',
          createdAt: new Date('2022-04-30 09:00:00'),
        }
    ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

