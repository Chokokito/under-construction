import { useState } from 'react'
import TechText from './TechText'
import './App.css'

const PHRASES = [
  'bought the domain at 2am. still figuring out the rest.',
  "yes, i bought the domain. no, i don't know what i'm doing yet.",
  'it started with a domain. it always starts with a domain.',
  "i own this domain. that's the most progress i've made today.",
  'the domain is paid for. the rest is coming soon.',
  'the easiest part was picking the domain. downhill from here.',
  'coming soon. (i also said that last month.)',
  'i have 47 unfinished projects. this is number 48.',
  "i told myself i'd finish this by the weekend. that was three weekends ago.",
  "yes, this is my website. no, there's nothing here yet. yes, i'm aware.",
  "i know enough to build this. i just haven't started yet.",
  "yes, this is a website. no, it doesn't do anything yet. thank you for visiting.",
  "loading... just kidding, there's nothing to load.",
  "you found it. congratulations. there's nothing here.",
  'this domain cost more per year than my coffee budget. worth it.',
  'welcome to my website. please ignore the lack of website.',
  'i could tell you what this site is about. but that would require knowing myself.',
  'site under construction since the dawn of time. updates: never.',
  "you've reached guelito.me. the person responsible is currently procrastinating.",
  'this is fine. everything is fine. the site will be ready soon. this is fine.'
]

function getRandomPhrase() {
  const lastIndex = Number(sessionStorage.getItem('lastPhraseIndex'))
  let nextIndex = Math.floor(Math.random() * PHRASES.length)
  if (PHRASES.length > 1 && nextIndex === lastIndex) {
    nextIndex = (nextIndex + 1) % PHRASES.length
  }
  sessionStorage.setItem('lastPhraseIndex', String(nextIndex))
  return PHRASES[nextIndex]
}

function App() {
  const [phrase] = useState(getRandomPhrase)

  return (
    <main className="waiting-page">
      <div className="hero-text">
        <TechText
          text="guelito.me"
          fontFamily="'JetBrains Mono', monospace"
          fontSize={84}
          fontWeight={700}
          color="#ffffff"
          accentColor="#ffffff"
          intro="assemble"
          introDuration={1.4}
        />
      </div>
      <p className="subtitle">{phrase}</p>
      <span className="easter-egg">um "abraço pro eunapio petterssen"</span>
    </main>
  )
}

export default App
