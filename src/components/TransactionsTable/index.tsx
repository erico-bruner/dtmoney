import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api('transactions')
    .then(response => console.log(response.data))}, []);

 function Categoria() {}
  
 
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title">Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>22/04/2022</td>
          </tr>
          <tr>
            <td className="title">Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>22/04/2022</td>
          </tr>
          <tr>
            <td className="title">Alguel</td>
            <td className="withdraw">- R$700</td>
            <td>Casa</td>
            <td>08/04/2022</td>
          </tr>
          <tr>
            <td className="title">Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>22/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}