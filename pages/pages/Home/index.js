import { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import QuizModal from "../components/QuizModal";
import Leaderboard from "../components/Leaderboard";
import { quizData } from "../utils/quizData";
import { useRouter } from "next/router";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [scores, setScores] = useState([
    { name: "Team 1", score: 0 },
    { name: "Team 2", score: 0 },
    { name: "Team 3", score: 0 },
  ]);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedFlippedCards = JSON.parse(localStorage.getItem("flippedCards")) || [];
    setFlippedCards(storedFlippedCards);
  }, []);

  useEffect(() => {
    localStorage.setItem("flippedCards", JSON.stringify(flippedCards));
  }, [flippedCards]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  const handleCardClick = (id) => {
    if (!flippedCards.includes(id)) {
      setFlippedCards((prev) => [...prev, id]); // Mark card as flipped
    } else {
      setCurrentQuestion(quizData.find((q) => q.id === id));
      setIsModalOpen(true);
    }
  };

  const handleAnswer = (isCorrect) => {
    console.log(isCorrect ? "Correct answer!" : "Incorrect answer.");
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundImage: `url("/images/background-new.jpg")`
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>Command The TRIAD</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(9, 1fr)",
            gap: "53px",
            flex: 3,
          }}
        >
          {quizData.map((question) => (
            <QuestionCard
              key={question.id}
              id={question.id}
              name={question.name}
              titleImage={question.titleimage} // Pass title image
              flipped={flippedCards.includes(question.id)}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {/* Leaderboard and Help Icons */}
      <div
        onClick={() => setIsLeaderboardOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "50%",
          padding: "15px",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        <span>🏆</span>
      </div>
      <div
        onClick={() => router.push("/welcomePage")}
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "50%",
          padding: "15px",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        <span>❓</span>
      </div>

      {isLeaderboardOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              width: "80%",
              height: "80%",
              overflowY: "scroll",
              position: "relative",
            }}
          >
            <div
              onClick={() => setIsLeaderboardOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "24px",
                cursor: "pointer",
                color: "gray",
              }}
            >
              ❌
            </div>
            <Leaderboard scores={scores} setScores={setScores} />
          </div>
        </div>
      )}

      <QuizModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        question={currentQuestion}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
