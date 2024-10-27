import React, { useEffect, useState } from "react";

const PitchDetector = () => {
  const [note, setNote] = useState("");
  const [frequency, setFrequency] = useState(0);

  useEffect(() => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 4096; // Augmentez la taille de l'FFT
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const getFrequencyData = () => {
          analyser.getByteFrequencyData(dataArray);
          const detectedFrequency = findPitch(dataArray);
          setFrequency(detectedFrequency);
          const detectedNote = frequencyToNote(detectedFrequency);
          setNote(detectedNote);
          requestAnimationFrame(getFrequencyData);
        };

        getFrequencyData();
      })
      .catch((err) => console.error("Erreur d'accès au microphone:", err));

    const findPitch = (dataArray) => {
      let maxIndex = 0;
      let maxValue = -1;

      for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i] > maxValue) {
          maxValue = dataArray[i];
          maxIndex = i;
        }
      }

      // Convertir l'index en fréquence
      const nyquist = audioContext.sampleRate / 2;
      const frequency = (maxIndex / dataArray.length) * nyquist;

      // Affichez la fréquence brute pour le débogage
      console.log(`Fréquence brute: ${frequency.toFixed(2)} Hz`);

      // On ignore les fréquences en dessous d'un certain seuil
      if (frequency < 100) return 0; // Seuil pour éviter les bruits de fond

      return frequency;
    };

    const frequencyToNote = (frequency) => {
      const noteFrequencies = {
        // Octave 0

        // Octave 1
        Do1: 32.7,
        "Do#1": 34.65,
        Re1: 36.71,
        "Re#1": 38.89,
        Mi1: 41.2,
        Fa1: 43.65,
        "Fa#1": 46.25,
        Sol1: 49.0,
        "Sol#1": 51.91,
        La1: 55.0,
        "La#1": 58.27,
        Si1: 61.74,

        // Octave 2
        Do2: 65.41,
        "Do#2": 69.3,
        Re2: 73.42,
        "Re#2": 77.78,
        Mi2: 82.41,
        Fa2: 87.31,
        "Fa#2": 92.5,
        Sol2: 98.0,
        "Sol#2": 103.83,
        La2: 110.0,
        "La#2": 116.54,
        Si2: 123.47,

        // Octave 3
        Do3: 130.81,
        "Do#3": 138.59,
        Re3: 146.83,
        "Re#3": 155.56,
        Mi3: 164.81,
        Fa3: 174.61,
        "Fa#3": 185.0,
        Sol3: 196.0,
        "Sol#3": 207.65,
        La3: 220.0,
        "La#3": 233.08,
        Si3: 246.94,

        // Octave 4
        Do4: 261.63,
        "Do#4": 277.18,
        Re4: 293.66,
        "Re#4": 311.13,
        Mi4: 329.63,
        Fa4: 349.23,
        "Fa#4": 369.99,
        Sol4: 392.0,
        "Sol#4": 415.3,
        La4: 440.0,
        "La#4": 466.16,
        Si4: 493.88,

        // Octave 5
        Do5: 523.25,
        "Do#5": 554.37,
        Re5: 587.33,
        "Re#5": 622.25,
        Mi5: 659.25,
        Fa5: 698.46,
        "Fa#5": 739.99,
        Sol5: 783.99,
        "Sol#5": 830.61,
        La5: 880.0,
        "La#5": 932.33,
        Si5: 987.77,

        // Octave 6
        Do6: 1046.5,
        "Do#6": 1108.73,
        Re6: 1174.66,
        "Re#6": 1244.51,
        Mi6: 1318.51,
        Fa6: 1396.91,
        "Fa#6": 1479.98,
        Sol6: 1567.98,
        "Sol#6": 1661.22,
        La6: 1760.0,
        "La#6": 1864.66,
        Si6: 1975.53,

        // Octave 7
        Do7: 2093.0,
        "Do#7": 2217.46,
        Re7: 2349.32,
        "Re#7": 2489.02,
        Mi7: 2637.02,
        Fa7: 2793.83,
        "Fa#7": 2959.96,
        Sol7: 3135.96,
        "Sol#7": 3322.44,
        La7: 3520.0,
        "La#7": 3729.31,
        Si7: 3951.07,

        // Octave 8
        Do8: 4186.01,
      };

      let closestNote = "";
      let closestDistance = Infinity;

      for (const [note, noteFreq] of Object.entries(noteFrequencies)) {
        const distance = Math.abs(frequency - noteFreq);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestNote = note;
        }
      }

      return closestNote || "Aucune note détectée";
    };

    // Nettoyage à la désinstallation du composant
    return () => {
      audioContext.close();
    };
  }, []);

  return (
    <div>
      <h1>Tonalité Détectée</h1>
      <h2>{note}</h2>
      <h3>Fréquence: {frequency.toFixed(2)} Hz</h3>
    </div>
  );
};

export default PitchDetector;
