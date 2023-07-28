import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { Brand } from '../../components/Brand'

import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <Brand />

      <nav>
        <NavLink title="Timer" to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink title="Histórico" to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Container>
  )
}
