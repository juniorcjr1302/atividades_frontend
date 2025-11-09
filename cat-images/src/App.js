import React, { useState, useEffect } from "react";

function App() {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar imagem
  const fetchCatImage = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://api.thecatapi.com/v1/images/search");

      if (!response.ok) {
        throw new Error("Erro ao buscar imagem 😿");
      }

      const data = await response.json();
      setCatImage(data[0].url);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Carrega uma imagem ao iniciar o app
  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1>🐱 Imagens Aleatórias de Gatos</h1>

      {loading && <p>Carregando imagem...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && catImage && (
        <div>
          <img
            src={catImage}
            alt="Gato aleatório"
            style={{
              maxWidth: "90%",
              height: "auto",
              borderRadius: "12px",
              marginTop: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      )}

      <button
        onClick={fetchCatImage}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Próxima imagem 🐾
      </button>
    </div>
  );
}

export default App;
