import React from 'react'

const features = [
  {
    title: "Reading Challenges",
    text: "Join exciting monthly and yearly reading challenges designed to keep your reading journey consistent.",
  },
  {
    title: "Discover New Books",
    text: "Find incredible African literature through community recommendations, curated collections, and personalized suggestions.",
  },
  {
    title: "Track Your Progress",
    text: "Log your reads, monitor your reading streaks, and keep your personal library beautifully organized.",
  },
  {
    title: "Join Discussions",
    text: "Connect with fellow readers, participate in book clubs, and share your thoughts on every story.",
  },
];

function Features() {
  return (
    <div>
         <section className="features-section">
      <div className="features-header">
        <span>BUILT FOR AFRICAN READERS</span>

        <h2>Everything your reading journey needs</h2>

        <p>
          Discover books, join communities, track your progress, and celebrate
          African stories—all in one place.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>

            <div className="underline"></div>

            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Features
