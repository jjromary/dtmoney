import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

    return(
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
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Trabalho</td>
                        <td>19/12/1992</td>
                    </tr>
                    <tr>
                        <td>Pagamento aluguel</td>
                        <td className="withdraw">-R$ 1200</td>
                        <td>Conta Fixa</td>
                        <td>05/12/1992</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}