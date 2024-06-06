'use client'

import Image from 'next/image'
import React, { useState } from 'react'

export default function Home() {
  const getRandomEmoji = () => {
    const emojis = ['😄', '😆', '😂', '🤣', '😊', '😋', '😎']
    const randomIndex = Math.floor(Math.random() * emojis.length)
    return emojis[randomIndex]
  }
  const [jokeInput, setJokeInput] = useState('')
  const [selectedText, setSelectedText] = useState('')
  const [initialJokes, setInitialJokes] = useState([
    {
      id: Math.random().toString(36).substring(2),
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
      highlight: 'make up everything',
    },
    {
      id: Math.random().toString(36).substring(2),
      content:
        "Parallel lines have so much in common. It's a shame they'll never meet.",
      highlight: 'never meet',
    },
    {
      id: Math.random().toString(36).substring(2),
      content:
        'I told my wife she was drawing her eyebrows too high. She looked surprised.',
      highlight: 'looked surprised',
    },
  ])

  const handleJokeInputChange = (event) => {
    setJokeInput(event.target.value)
  }

  const handleMouseUp = () => {
    const selection = window.getSelection().toString()
    if (selection) {
      setSelectedText(selection)
    }
  }

  const handleAddJoke = () => {
    if (jokeInput) {
      const newJoke = {
        id: Math.random().toString(36).substring(2),
        content: jokeInput,
        highlight: selectedText,
      }

      setInitialJokes([...initialJokes, newJoke])
      setJokeInput('')
      setSelectedText('')
    }
  }

  const highlightText = (text, highlight) => {
    if (!highlight) return text
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span
          key={index}
          className="highlight rotate- relative inline-block -rotate-12"
          style={{
            border: '2px dashed',
            borderColor: '#ff69b4',
            borderRadius: '5px',
            padding: '2px',
            position: 'relative',
          }}
        >
          {part}
          <span className="absolute -right-2 -top-3 -rotate-12">
            {getRandomEmoji()}
          </span>
        </span>
      ) : (
        part
      ),
    )
  }

  return (
    <main className="animate-rotate flex min-h-screen flex-col items-center space-y-8 bg-gray-900 p-24">
      <style jsx global>{`
        @keyframes rotate {
          0% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
          100% {
            transform: rotate(-3deg);
          }
        }
        .animate-rotate {
          animation: rotate 4s infinite alternate;
        }
      `}</style>
      <h1 className="animate-rotate relative z-30 overflow-hidden rounded-md bg-rose-400 px-8 py-4 font-sans text-2xl font-semibold text-white transition-all duration-700">
        The Notebook for{' '}
        <span className="animate-rotate rounded-md bg-yellow-400 px-2">
          a chuckle 😆
        </span>
      </h1>
      <div className="animate-rotate group relative z-0 m-auto h-[8em] w-[15em] overflow-hidden rounded-[1em] bg-white p-2">
        <div className=" absolute bottom-full left-0 z-[-1] h-full w-[20%] bg-[#FDEE00] duration-[400ms] group-hover:translate-y-full"></div>
        <div className="absolute left-[20%] top-full z-[-1] h-full w-[20%] bg-[#7CFC00] delay-[50ms] duration-[400ms] group-hover:-translate-y-full"></div>
        <div className=" absolute bottom-full left-[40%] z-[-1] h-full w-[20%] bg-[#007FFF] delay-[100ms] duration-[400ms] group-hover:translate-y-full"></div>
        <div className=" absolute left-[60%] top-full z-[-1] h-full w-[20%] bg-[#FF5800] delay-[150ms] duration-[400ms] group-hover:-translate-y-full"></div>
        <div className=" absolute bottom-full left-[80%] z-[-1] h-full w-[20%] bg-[#FF66CC] delay-[200ms] duration-[400ms] group-hover:translate-y-full"></div>

        <h1 className="animate-rotate font-Poppin z-20 text-[1.4em] font-bold duration-100 group-hover:text-white">
          Do You like the jokes? Be honest!
        </h1>
      </div>
      <label className="relative inline-flex cursor-pointer items-center">
        <input className="peer sr-only" value="" type="checkbox" />
        <div className="peer h-14 w-28 rounded-br-2xl rounded-tl-2xl bg-blue-300 outline-none duration-100 after:absolute after:left-1 after:top-1 after:flex after:h-12 after:w-12 after:items-center after:justify-center after:rounded-br-xl after:rounded-tl-xl after:bg-white after:font-bold after:text-sky-800 after:outline-none after:duration-500 after:content-['No'] peer-checked:after:translate-x-14 peer-checked:after:border-white peer-checked:after:content-['Yes'] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500"></div>
      </label>
      <Image
        src="/jokes.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="animate-rotate"
      />
      <div className="space-y-4">
        {initialJokes.map((joke) => (
          <div
            key={joke.id}
            className="animate-rotate rounded-lg bg-gray-100 p-4"
          >
            <p className="text-gray-800">
              {highlightText(joke.content, joke.highlight)}
            </p>
          </div>
        ))}
      </div>
      <div className="animate-rotate relative w-3/4 overflow-hidden rounded-full bg-white shadow-xl">
        <input
          type="text"
          name="text"
          placeholder="Enter here a joke"
          className="input w-full border-none bg-transparent py-5 pl-6 pr-10 font-sans text-lg font-semibold outline-none"
          onChange={handleJokeInputChange}
          onMouseUp={handleMouseUp}
          value={jokeInput}
        />
        <div className="absolute right-2 top-[0.4em]">
          <button
            onClick={handleAddJoke}
            className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-violet-500 shadow-xl"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              <path
                d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                fill="white"
                fillOpacity="0.01"
              ></path>
              <path
                d="M42.8496 18.7067L21.0628 44.6712"
                stroke="white"
                strokeWidth="3.76603"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                stroke="white"
                strokeWidth="3.76603"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="absolute left-[32%] top-[32%] h-full w-full rotate-45 bg-black duration-1000 group-hover:-left-[100%] group-hover:-top-[100%]"></div>
            <div className="absolute -left-[32%] -top-[32%] h-full w-full -rotate-45 bg-black duration-1000 group-hover:left-[100%] group-hover:top-[100%]"></div>
          </button>
        </div>
      </div>
      {jokeInput && (
        <div className="rotate-5 animate-rotate bg-gray-100 p-4">
          <p className="text-red-800">
            {highlightText(jokeInput, selectedText)}
          </p>
        </div>
      )}
    </main>
  )
}
