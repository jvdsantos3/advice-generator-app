import {
  AdviceBox,
  AdviceBoxTexts,
  AdviceContainer,
  AdviceDiceButton,
  AdviceDivider,
} from './styles'

import dice from '../../assets/icon-dice.svg'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface Advice {
  id: number | null
  advice: string | null
}

export function Advice() {
  const [adviceData, setAdviceData] = useState<Advice>({
    id: null,
    advice: null,
  })
  const [loading, setLoading] = useState(false)

  const { id, advice } = adviceData

  useEffect(() => {
    if (!advice) {
      getRandomAdvice()
    }
  }, [advice])

  useEffect(() => {
    setLoading(false)
  }, [])

  async function getRandomAdvice() {
    setLoading(true)
    setAdviceData({
      id: null,
      advice: null,
    })

    await api.get('advice').then((response) => {
      setAdviceData(response.data.slip)
      setTimeout(() => setLoading(false), 1000)
    })
  }

  return (
    <AdviceContainer>
      <AdviceBox>
        <AdviceBoxTexts>
          <span>ADVICE #{id || '000'}</span>

          <h1>{`"${advice || 'Loading...'}"`}</h1>

          <AdviceDivider />
        </AdviceBoxTexts>
        <AdviceDiceButton disabled={loading} onClick={getRandomAdvice}>
          <img src={dice} alt="Dice" />
        </AdviceDiceButton>
      </AdviceBox>
    </AdviceContainer>
  )
}
