/* eslint-disable react/jsx-key */
import './App.css'
import Entry from './components/Entry'
import Header from './components/Header'
import entries from './entry'

function App() {
  const items = entries.map((entry) =>{
    return <Entry 
              key={entry.id}
              //entry={entry}
              {...entry}
            />
  })

  return (
    <>
      <Header />
      {items}
    </>
  )
}

export default App
