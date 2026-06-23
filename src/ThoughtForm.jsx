import { useState } from "react";

export const ThoughtForm = ({ onNewThought }) => {
    const [newThought, setNewThought] = useState("")
    const [category, setCategory] = useState("Random")
    const [name, setName] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()

        if (newThought.length < 5 || newThought.length > 140) {
            alert("Your thought must be between 5 and 140 characters long!")
            return
        }

        fetch(`https://bergalou-project-happy-thoughts-api.onrender.com/thoughts/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                message: newThought,
                category: category,
                name: name 
            }),
        })
        .then((res) => res.json())
        .then((createdThought) => {
            onNewThought(createdThought)
            setNewThought("")
            setName("")
        })
        .catch((err) => console.error("cant save..", err))
    }

    return (
        <form onSubmit={handleSubmit} className="thought-form">
            <p>What's making you happy right now?</p>
            <textarea
            placeholder="Type your happy thought..."
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Random">Random</option>
                <option value="Friends">Friends</option>
                <option value="Family">Family</option>
            </select>

            <input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

            <div className="form-info">
            <p className={newThought.length > 140 ? "red-text" : ""}>
                {140 - newThought.length}</p>
                <button type="submit" disabled={newThought.length < 5 || newThought.length > 140}>
                ❤️ Send Happy Thought ❤️
                </button>
            </div> 
            </form>
    )
}