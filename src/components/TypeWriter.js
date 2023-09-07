import React, { useState, useEffect } from 'react';
import Button from './Button';

export default function Typewriter({ texts }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [output, setOutput] = useState('');
  const [output2, setOutput2] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (currentLineIndex < texts.length) {
      if (charIndex < texts[currentLineIndex].length) {
        setTimeout(() => {
          if (currentLineIndex === 0) {
            setOutput(
              (prevOutput) =>
                prevOutput + texts[currentLineIndex].charAt(charIndex)
            );
            setCharIndex((prevCharIndex) => prevCharIndex + 1);
          } else {
            setOutput2(
              (prevOutput) =>
                prevOutput + texts[currentLineIndex].charAt(charIndex)
            );
            setCharIndex((prevCharIndex) => prevCharIndex + 1);
          }
        }, 60);
      } else {
        setCurrentLineIndex((prevLineIndex) => prevLineIndex + 1);
        setCharIndex(0);
      }
    }
    setTimeout(() => setFinished(true), 2300);
  }, [charIndex, currentLineIndex, texts]);

  return (
    <>
      <div className="mt-20 lg:mt-48 text-2xl text-complementary4 font-bold tracking-tight md:text-5xl xl:text-5xl">
        {output}
        {currentLineIndex === 0 && charIndex < texts[0].length && (
          <span className="cursor">|</span>
        )}
        <br></br>
        {output2}
        {currentLineIndex === 1 && charIndex < texts[1].length && (
          <span className="cursor">|</span>
        )}
      </div>
      {finished && (
        <div className="mt-6 animate-fadeIn-1">
          <Button
            color="bg-complementary3"
            hoverColor="hover:bg-complementary1"
          >
            Connect
          </Button>
        </div>
      )}
    </>
  );
}