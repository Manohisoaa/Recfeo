import React, { useState, useEffect, useRef } from "react";
import Meyda from "meyda";
import { Sun, Moon, FileDown, Play, Pause } from "lucide-react";

const KeyDetector = () => {
  const [file, setFile] = useState();
  const [key, setKey] = useState(null);
  const [error, setError] = useState("");
  const [audioContext, setAudioContext] = useState(null);
  const [sourceNode, setSourceNode] = useState(null);
  const [analyzerNode, setAnalyzerNode] = useState(null);
  const [meydaAnalyzer, setMeydaAnalyzer] = useState(null);
  const [chromaData, setChromaData] = useState([]); // Pour accumuler les données chroma
  const [songName, setSongName] = useState('')
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState(null);
  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [audioContext]);

  const handleFileChange = (event) => {
    setFile(null);
    setKey(null);
    setError("");
    setChromaData([]); // Réinitialise les données chroma accumulées
    setSourceNode(null);
    setMeydaAnalyzer(null);
    const selectedFile = event.target.files[0];
    setSongName(selectedFile.name)
    if (selectedFile) {
      // Réinitialisation des états avant de commencer une nouvelle analyse
      if (sourceNode) {
        sourceNode.stop();
      }
      if (meydaAnalyzer) {
        meydaAnalyzer.stop();
      }
      setChromaData([]); // Réinitialise les données chroma accumulées

      // Début de la nouvelle analyse
      setFile(URL.createObjectURL(selectedFile));

      analyzeAudio(selectedFile);
    }
  };

  const analyzeAudio = async (audioFile) => {
    try {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      setAudioContext(audioContext);

      const sourceNode = audioContext.createBufferSource();
      setSourceNode(sourceNode);

      const audioBuffer = await fetch(URL.createObjectURL(audioFile))
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer));

      sourceNode.buffer = audioBuffer;

      const analyzerNode = audioContext.createAnalyser();
      sourceNode.connect(analyzerNode);
      setAnalyzerNode(analyzerNode);
      analyzerNode.fftSize = 2048;

      sourceNode.connect(audioContext.destination);
      sourceNode.start();

      const chromaAccumulator = [];

      // Création de l'analyseur Meyda
      const meydaAnalyzer = Meyda.createMeydaAnalyzer({
        audioContext: audioContext,
        source: analyzerNode,
        bufferSize: 2048,
        featureExtractors: ["chroma"],
        callback: (features) => {
          if (features && features.chroma) {
            // Accumule les données chroma
            chromaAccumulator.push(features.chroma);
          }
        },
      });

      meydaAnalyzer.start();
      setMeydaAnalyzer(meydaAnalyzer);

      // Arrêter l'analyse une fois la lecture terminée et calculer la tonalité
      sourceNode.onended = () => {
        meydaAnalyzer.stop();
        const averageChroma = calculateAverageChroma(chromaAccumulator);
        const keyDetected = identifyKeyFromChroma(averageChroma);
        setKey(keyDetected);
      };
    } catch (err) {
      setError("Erreur lors de l'analyse de la chanson.");
      console.error(err);
    }
  };

  // Fonction pour calculer la moyenne des chromas
  const calculateAverageChroma = (chromaData) => {
    const total = chromaData.reduce(
      (acc, chroma) => acc.map((val, index) => val + chroma[index]),
      new Array(12).fill(0)
    );
    return total.map((val) => val / chromaData.length);
  };

  const identifyKeyFromChroma = (chroma) => {
    if (!chroma) {
      return "Tonalité inconnue";
    }

    const majorScales = [
      [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1], // C major
      [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0], // C# major / Db major
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0], // D major
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0], // D# major / Eb major
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], // E major
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0], // F major
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0], // F# major / Gb major
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1], // G major
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0], // G# major / Ab major
      [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0], // A major
      [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1], // A# major / Bb major
      [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0], // B major
    ];

    const minorScales = [
      [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], // A minor
      [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], // A# minor / Bb minor
      [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], // B minor
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1], // C minor
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0], // C# minor / Db minor
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0], // D minor
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0], // D# minor / Eb minor
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], // E minor
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0], // F minor
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0], // F# minor / Gb minor
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1], // G minor
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0], // G# minor / Ab minor
    ];

    const keyMapMajor = [
      "Do majeur",
      "Do majeur",
      "Ré majeur",
      "Ré majeur",
      "Mi majeur",
      "Fa majeur",
      "Fa majeur",
      "Sol majeur",
      "Sol majeur",
      "La majeur",
      "La majeur",
      "Si majeur",
    ];

    const keyMapMinor = [
      "La mineur",
      "La mineur",
      "Si mineur",
      "Do mineur",
      "Do mineur",
      "Ré mineur",
      "Ré mineur",
      "Mi mineur",
      "Fa mineur",
      "Fa mineur",
      "Sol mineur",
      "Sol mineur",
    ];

    const bestMatchMajor = findBestMatch(chroma, majorScales);
    const bestMatchMinor = findBestMatch(chroma, minorScales);

    return bestMatchMajor.correlation > bestMatchMinor.correlation
      ? keyMapMajor[bestMatchMajor.index]
      : keyMapMinor[bestMatchMinor.index];
  };

  const findBestMatch = (chroma, scales) => {
    let bestMatch = { index: 0, correlation: 0 };
    scales.forEach((scale, index) => {
      const correlation = scale.reduce(
        (sum, val, i) => sum + val * chroma[i],
        0
      );
      if (correlation > bestMatch.correlation) {
        bestMatch = { index, correlation };
      }
    });
    return bestMatch;
  };

  return (
    <>
      <div>
        <input type="file" accept="audio/*" onChange={handleFileChange} id="importSong" style={{ display: "none" }} />
        {key && <p>Tonalité détectée : {key}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className=" h-5/6 items-center justify-center gap-44 flex">
        <div className="m-36 flex cursor-pointer rounded-full border-4 border-[#D5DAF3] bg-[#D5DAF3] p-10 dark:border-white dark:bg-white/5">
          <button
            onClick={() => document.getElementById("importSong").click()}
          >

            <FileDown size={100} color="#0A132D" strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex h-2/4 w-1/5 flex-col items-center justify-center gap-20 rounded-xl bg-[#0A132D] dark:border-4 dark:border-white">
          {songName ? (
            <div>
              <p className="mt-15 text-white dark:text-white"> {songName}</p>
              {key && <p className="mt-15 text-white dark:text-white">Tonalité détectée : {key}</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          ) : (
            <p className="mt-15 text-white dark:text-white"> ici le titre</p>
          )}

        </div>
      </div>
    </>
  );
};

export default KeyDetector;
