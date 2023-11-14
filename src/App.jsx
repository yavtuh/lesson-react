import cards from './mock/card'
import Card from './components/Card/Card'

function App() {
  
  return (
    <>
      {cards.map(card => (
          <Card key={card.id} card={card} />
      ))}
    </>
  )
}

export default App
