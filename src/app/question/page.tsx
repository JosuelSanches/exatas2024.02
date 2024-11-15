'use client'
import React, { useState } from 'react'
import { materiais } from '../questoes'
//import { Button } from '../components/Button';

const page = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(false)
    const [checked, setChecked] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [correction, setCorrection] = useState(false)
    const [notGreenOrRed, setNotGreenOrRed] = useState(true)
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })

    const { questions } = materiais
    const { question, answers, correctAnswer } = questions[activeQuestion]

    /*
        Select and check answer
    */
   const onCorrection =() =>{
    if (selectedAnswer === true){
       setCorrection(true)
       setNotGreenOrRed(false)
    }else{
        setCorrection(false)
        setNotGreenOrRed(false)
    }
    
   }
   const onAnswerSelected = (answer: any, idx: any) => {
        setChecked(true)
        setSelectedAnswerIndex(idx)
        if (answer === correctAnswer){
            setSelectedAnswer(true)
            console.log('true')
            console.log('Tamanho das questões ',questions.length)
            console.log('Questão atual', (activeQuestion + 1))
        }else{
            setSelectedAnswer(false)
            // console.log('false')
        }

   }

  
   // Calculate score and increment to next question
   const nextQuestion = () =>{
    setSelectedAnswerIndex(null)
    setNotGreenOrRed(true)
    setResult((prev) =>
    selectedAnswer ?
        {
            ...prev,
            score: prev.score + 6,
            correctAnswers: prev.correctAnswers + 1
        } : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
        }
    )
        if(activeQuestion !== questions.length-1){
            setActiveQuestion((prev) => prev + 1)
    }   else {
            setActiveQuestion(0)
            setShowResult(true)
    }
            setChecked(false)
           
   }


    return (
        <div className='container'>
            <h1>Questões</h1>
                <div>
                    <h2>
                        Questão: {activeQuestion + 1}
                        <span>/{questions.length}</span>
                    </h2>
                </div>
                <div>
                    {!showResult ? (
                        <div className='questions-container'>
                            <h3>{questions[activeQuestion].question}</h3>
                            {answers.map((answer, idx) => (
                                notGreenOrRed? (
                                    <li 
                                key={idx}
                                onClick={() => onAnswerSelected(answer, idx)}
                                className={
                                    selectedAnswerIndex === idx ? 'bg-gray-700 text-white' : 'li-hover'
                                }
                            >
                                    <span className='font-bold'>{answer}</span>
                                </li>
                                ):(
                                    <li 
                                key={idx}
                                /**onClick={() => onAnswerSelected(answer, idx)}**/
                                className={
                                    selectedAnswerIndex === idx ? 'bg-gray-700 text-white' : 'li-hover'
                                }
                            >
                                    <span className='font-bold'>{answer}</span>
                                </li>
                                )
                            ))}
                            {
                                checked ? 
                                (
                                    <div>
                                        <button onClick={onCorrection} className={notGreenOrRed? 'bg-blue-500' : correction? 'bg-green-500':'bg-red-500'} >
                                            Verificar
                                        </button>
                                        {notGreenOrRed?(
                                                <button onClick={nextQuestion} disabled className='btn-disabled'>
                                                    {' '}
                                                    {activeQuestion === questions.length - 1 ? 'finalizar' : 'Próximo'}
                                                </button>
                                                ):(
                                                        <button onClick={nextQuestion} className='btn'>
                                                            {activeQuestion === questions.length - 1 ? 'Finalizar' : 'Próximo'}
                                                        </button>
                                                   )
                                        }
                                    </div>
                                ) : (
                                        <button onClick={onCorrection} disabled className='btn-disabled'> Verificar </button>
                                )
                            }

                        </div>
                    ) : (
                    <div className='quiz-container'>
                        <h3>Resultado</h3>
                        <h3 className={((result.score /36) * 100) < 50 ? 'bg-red-500': 'bg-green-500'}>Geral {((result.score /36) * 100).toFixed(2)}%</h3>
                        <p>Total de questões: <span>{questions.length}</span></p>
                        <p>Total de pontos: <span>{result.score}</span></p>
                        <p>Respostas corretas: <span>{result.correctAnswers}</span></p>
                        <p>Respostas erradas: <span>{result.wrongAnswers}</span></p>

                        <button onClick={()=> window.location.reload()}>Reiniciar</button>
                    </div>
                    )}
                </div>
        </div>
    )
}

export default page