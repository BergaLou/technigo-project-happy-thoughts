export const ThoughtList = ({ thoughts, setThoughts }) => {
    const formatRelativeTime = (dateString) => {
        const now = new Date()
        const then = new Date(dateString)
        const secondsAgo = Math.floor((now - then) / 1000)

        if (isNaN(then.getTime())) return "Unkown time"
        if (secondsAgo < 5) return "Just now"
        if (secondsAgo < 60) return `${secondsAgo} seconds ago`

        const minutesAgo = Math.floor(secondsAgo / 60)
        if (minutesAgo < 60) return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`

        const hoursAgo = Math.floor(minutesAgo / 60)
        if (hoursAgo < 24) return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`

        const daysAgo = Math.floor(hoursAgo / 24)
        if (daysAgo < 365) return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`

        const yearsAgo = Math.floor(daysAgo / 365)
        return `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`
    }

    const handleLike = (thoughtId) => {
        fetch(`https://happy-thoughts-api-4ful.onrender.com/thoughts/${thoughtId}/like`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then(() => {
            setThoughts((prevThoughts) =>
            prevThoughts.map((thought) => {
                if (thought._id === thoughtId) {
                    return { ...thought, hearts: thought.hearts + 1 }
                }
                return thought
            })
        )
    })
    .catch((err) => console.error("Cant like..", err))
    }
    return (
        <section className="thought-list">
            {thoughts.map((thought) => (
                <div key={thought._id} className="thought-card">
                    <p className="thought-message">{thought.message}</p>

                    <div className="thought-footer">
                        <div className="like-section">
                            <button
                            onClick={() => handleLike(thought._id)}
                            className={thought.hearts > 0 ? "has-hearts" : "no-hearts"}
                            >
                                ❤️
                            </button>
                            <span>      x    {thought.hearts}</span>
                        </div>
                        <span className="thought-date">
                            {formatRelativeTime(thought.createdAt)}
                        </span>
                    </div>
                </div>
            ))}
        </section>
    )
}