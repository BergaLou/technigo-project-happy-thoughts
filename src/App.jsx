import { useState, useEffect } from "react";
import { ThoughtForm } from "./ThoughtForm";
import { ThoughtList } from "./ThoughtList";

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [category, setCategory] = useState('Project')
  const [name, setName] = useState('')
  
  const fetchThoughts = () => {
    setLoading(true)
    fetch(`https://bergalou-project-happy-thoughts-api.onrender.com/thoughts`)
    .then((res) => res.json())
    .then((data) => {
      setThoughts(data)
      setLoading(false)
    })
    .catch((err) => console.error("Cant pick up it..", err))
  }

  useEffect(() => {
    fetchThoughts()
  }, [])

  const handleFormSubmit = (newIncomingThought) => {
    setThoughts((previousThoughts) => [newIncomingThought, ...previousThoughts])
  }

  return (
    <div className="main-container">
      <ThoughtForm onNewThought={handleFormSubmit} />

      {loading ? (
        <h2> Loading happy thoughts ... 🌸 </h2>
      ) : (
        <ThoughtList thoughts={thoughts} setThoughts={setThoughts} />
      )}
    </div>
  )
}
