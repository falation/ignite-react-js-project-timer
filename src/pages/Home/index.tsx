import { Play } from 'phosphor-react'

import {
  Container,
  CountdownContainer,
  FormHeader,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <Container>
      <form>
        <FormHeader>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="Dê um nome para o seu projeto" />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            placeholder="00"
            type="number"
          />

          <span>minutos.</span>
        </FormHeader>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          Começar
          <Play size={24} />
        </StartCountdownButton>
      </form>
    </Container>
  )
}
