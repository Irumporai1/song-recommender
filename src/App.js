import React from "react";
import "./styles.css";
import { useState } from "react";

const songDB = {
  English: [
    {
      song: "Believer",
      album: "Evolve"
    },
    {
      song: "Master the Blaster",
      album: "Master"
    }
  ],

  Malayalam: [
    {
      song: "Ezhutha kadha",
      album: "Kumbalangi Nights"
    },
    {
      song: "Appalaale ",
      album: "Nayattu"
    }
  ],
  Tamil: [
    {
      song: "Bujji",
      album: "Jagame Thandhiram"
    },
    {
      song: "Aagasam",
      album: "Soorarai Pottru"
    }
  ]
};

export default function App() {
  const [selectedLanguage, setLanguage] = useState("English");
  function genreClickHandler(language) {
    setLanguage(language);
  }
  return (
    <div className="App">
      <h1> 🎵 Song Recommender </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Select athe language to see the top hits{" "}
      </p>

      <div>
        {Object.keys(songDB).map((language) => (
          <button
            onClick={() => genreClickHandler(language)}
            style={{
              cursor: "pointer",
              background: "#e0e7ff",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {language}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {songDB[selectedLanguage].map((language) => (
            <li
              key={language.song}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {language.song} </div>
              <div style={{ fontSize: "smaller" }}>
                Album: {language.album}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
