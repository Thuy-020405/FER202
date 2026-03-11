import React, { useReducer, useState } from 'react';
import { Container, Button, Alert, ProgressBar } from 'react-bootstrap';
import { quizData } from '../data/quizData';
import { quizReducer, initialState } from '../reducers/quizReducer';
import Question from '../components/Question';
import { SharedModal, SharedToast } from '../components/SharedComponents';

const Quiz = () => {
    const [state, dispatch] = useReducer(quizReducer, initialState);

    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleAnswer = (selectedOption) => {
        const currentQ = quizData[state.currentQuestion];
        const isCorrect = selectedOption === currentQ.correctAnswer;

        // 1. Nếu là câu hỏi cuối cùng, hiển thị thông báo trước
        if (state.currentQuestion + 1 === quizData.length) {
            setShowModal(true);
            setShowToast(true);
        
            setTimeout(() => {
                dispatch({ type: 'ANSWER', isCorrect, total: quizData.length });
            }, 1500); 
        } else {
            // 2. Nếu chưa phải câu cuối, chỉ chuyển câu hỏi
            dispatch({ type: 'ANSWER', isCorrect, total: quizData.length });
        }
    };

    const progress = ((state.currentQuestion) / quizData.length) * 100;

    // Màn hình kết quả sau khi hoàn thành
    if (state.isFinished) {
        return (
            <Container className="mt-5 text-center">
                <Alert variant="success" className="shadow-lg p-5 border-0">
                    <h2 className="text-danger fw-bold">🍕 KẾT QUẢ THỬ THÁCH</h2>
                    <hr />
                    <p className="display-4 my-4">Đúng: {state.score} / {quizData.length}</p>
                    <Button variant="danger" size="lg" className="px-5 rounded-pill" onClick={() => dispatch({ type: 'RESTART' })}>
                        Làm lại bài Quiz
                    </Button>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-4" style={{ maxWidth: '750px' }}>
            <h2 className="text-center text-danger fw-bold mb-4">🍕 PIZZA QUIZ CHALLENGE</h2>
            
            <ProgressBar now={progress} variant="danger" animated className="mb-4 shadow-sm" style={{height: '12px'}} />

            <div className="d-flex justify-content-between mb-3 fw-bold text-muted">
                <span>Câu hỏi: {state.currentQuestion + 1} / {quizData.length}</span>
                <span className="text-success">Điểm số: {state.score}</span>
            </div>

            <Question 
                data={{
                    question: quizData[state.currentQuestion].question,
                    options: quizData[state.currentQuestion].answers
                }} 
                onAnswer={handleAnswer} 
            />

            {/* Modal hiển thị thông tin khi nhấn đáp án cuối */}
            <SharedModal 
                show={showModal}
                handleClose={() => setShowModal(false)}
                title="Chúc mừng!"
                body={`Bạn đã hoàn thành câu hỏi cuối cùng về chủ đề Pizza. Đang tính toán điểm số...`}
            />

            {/* Toast nhắn nhủ góc màn hình */}
            <SharedToast 
                show={showToast}
                onClose={() => setShowToast(false)}
                message="Đã ghi nhận câu trả lời cuối!"
            />
        </Container>
    );
};

export default Quiz;