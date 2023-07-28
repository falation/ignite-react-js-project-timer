import { Container, Status, TableContainer } from './styles'

export function History() {
  return (
    <Container>
      <h1>Meu histórico</h1>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>10 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>10 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 3</td>
              <td>10 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </Container>
  )
}
