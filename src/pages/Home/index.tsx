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

          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>

          <MinutesAmountInput
            id="minutesAmount"
            min={5}
            max={60}
            placeholder="00"
            step={5}
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
