"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Shuffle } from "lucide-react"

const emojis = ["🌟", "🍕", "🚀", "🎸", "🌈", "🍦", "🐶", "🎨"]

type Card = {
  id: number
  emoji: string
  isFlipped: boolean
  isMatched: boolean
}

export default function MemoryMatch() {
  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [matches, setMatches] = useState(0)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }))
    setCards(shuffledCards)
    setFlippedCards([])
    setMoves(0)
    setMatches(0)
  }

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return
    if (cards[id].isMatched) return

    const newCards = [...cards]
    newCards[id].isFlipped = true
    setCards(newCards)

    setFlippedCards([...flippedCards, id])

    if (flippedCards.length === 1) {
      setMoves((prev) => prev + 1)
      if (cards[flippedCards[0]].emoji === newCards[id].emoji) {
        newCards[flippedCards[0]].isMatched = true
        newCards[id].isMatched = true
        setCards(newCards)
        setFlippedCards([])
        setMatches((prev) => prev + 1)
      } else {
        setTimeout(() => {
          newCards[flippedCards[0]].isFlipped = false
          newCards[id].isFlipped = false
          setCards(newCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4">
      <h1 className="mb-6 text-3xl font-bold text-white">Memory Match</h1>
      <div className="mb-4 flex justify-between gap-4">
        <p className="text-lg text-white">Moves: {moves}</p>
        <p className="text-lg text-white">
          Matches: {matches}/{emojis.length}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`h-20 w-20 rounded-lg text-4xl transition-all duration-300 ${
              card.isFlipped || card.isMatched ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"
            }`}
            disabled={card.isFlipped || card.isMatched}
          >
            {card.isFlipped || card.isMatched ? card.emoji : ""}
          </button>
        ))}
      </div>
      <Button onClick={initializeGame} className="mt-6 bg-blue-600 hover:bg-blue-700">
        <Shuffle className="mr-2 h-4 w-4" />
        Reset Game
      </Button>
    </div>
  )
}

