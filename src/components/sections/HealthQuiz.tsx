"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, RotateCcw, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/lib/hooks/useInView";
import { scrollToProducts } from "@/lib/utils/scroll";

interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    text: string;
    score: number;
  }[];
}

interface Result {
  title: string;
  badgeColor: string;
  badgeText: string;
  message: string;
  ctaText: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "How often do you experience unexplained fatigue or brain fog?",
    options: [
      { label: "A", text: "Rarely", score: 0 },
      { label: "B", text: "Sometimes (1-2x/week)", score: 1 },
      { label: "C", text: "Frequently (most days)", score: 2 },
      { label: "D", text: "Almost always", score: 3 },
    ],
  },
  {
    id: 2,
    question: "When was your last comprehensive blood test (more than basic CBC)?",
    options: [
      { label: "A", text: "Within the last 6 months", score: 0 },
      { label: "B", text: "6-12 months ago", score: 1 },
      { label: "C", text: "1-3 years ago", score: 2 },
      { label: "D", text: "Never or can't remember", score: 3 },
    ],
  },
  {
    id: 3,
    question: "How would you describe your current supplement routine?",
    options: [
      { label: "A", text: "I take targeted supplements based on test results", score: 0 },
      { label: "B", text: "I take a few general supplements", score: 1 },
      { label: "C", text: "I take whatever's popular", score: 2 },
      { label: "D", text: "I don't take any", score: 3 },
    ],
  },
  {
    id: 4,
    question: "Have you been told your labs are 'normal' but still don't feel your best?",
    options: [
      { label: "A", text: "No, I feel great", score: 0 },
      { label: "B", text: "Occasionally", score: 1 },
      { label: "C", text: "Yes, multiple times", score: 2 },
      { label: "D", text: "Yes, and I'm frustrated by it", score: 3 },
    ],
  },
  {
    id: 5,
    question: "What best describes your health goal?",
    options: [
      { label: "A", text: "General wellness maintenance", score: 0 },
      { label: "B", text: "Solve a specific health concern", score: 1 },
      { label: "C", text: "Optimize performance (athletic/cognitive)", score: 2 },
      { label: "D", text: "Understand my body better before issues arise", score: 3 },
    ],
  },
];

const getResult = (totalScore: number): Result => {
  if (totalScore <= 4) {
    return {
      title: "Health Conscious",
      badgeColor: "bg-green-500",
      badgeText: "0-4 Points",
      message: "You're on the right track! A comprehensive blood test can help you fine-tune what's already working.",
      ctaText: "Optimize Your Health",
    };
  } else if (totalScore <= 9) {
    return {
      title: "Room for Improvement",
      badgeColor: "bg-amber-500",
      badgeText: "5-9 Points",
      message: "Your body may be sending signals you're missing. A comprehensive blood test could reveal the hidden factors affecting how you feel.",
      ctaText: "Discover What's Hidden",
    };
  } else {
    return {
      title: "Time for Answers",
      badgeColor: "bg-red-500",
      badgeText: "10-15 Points",
      message: "You deserve real answers about your health. Comprehensive blood testing can uncover what standard tests miss and give you a clear path forward.",
      ctaText: "Get Your Answers Now",
    };
  }
};

export function HealthQuiz() {
  const { ref, isInView } = useInView();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number, optionIndex: number) => {
    setSelectedOption(optionIndex);

    setTimeout(() => {
      const newAnswers = [...answers, score];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }, 500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResults(false);
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const result = getResult(totalScore);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section
      id="health-quiz"
      className="snap-section bg-card py-10 sm:py-12 lg:py-16 scroll-mt-16"
      ref={ref}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            How Well Do You <span className="text-primary">Really Know</span> Your Health?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            Take this quick assessment to see if comprehensive blood testing could help you
          </p>
        </div>

        <div className={`max-w-3xl mx-auto ${isInView ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          {!showResults ? (
            <Card className="border-2">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-6">
                    {questions[currentQuestion].question}
                  </h3>

                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option.score, index)}
                        disabled={selectedOption !== null}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          selectedOption === index
                            ? "border-primary bg-primary/10 scale-[0.98]"
                            : "border-border hover:border-primary/50 hover:bg-accent"
                        } ${selectedOption !== null && selectedOption !== index ? "opacity-50" : ""}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center font-semibold text-sm">
                              {option.label}
                            </span>
                            <span className="text-base sm:text-lg">{option.text}</span>
                          </div>
                          {selectedOption === index && (
                            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-2">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="text-center">
                  {/* Result Badge */}
                  <div className="flex justify-center mb-6">
                    <div className={`${result.badgeColor} text-white px-6 py-2 rounded-full font-semibold text-sm`}>
                      {result.badgeText}
                    </div>
                  </div>

                  {/* Result Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 rounded-full ${result.badgeColor} bg-opacity-10 flex items-center justify-center`}>
                      <Activity className={`w-10 h-10 ${result.badgeColor.replace('bg-', 'text-')}`} />
                    </div>
                  </div>

                  {/* Result Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    {result.title}
                  </h3>

                  {/* Result Message */}
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                    {result.message}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      onClick={scrollToProducts}
                      className="group"
                    >
                      {result.ctaText}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={resetQuiz}
                      className="group"
                    >
                      <RotateCcw className="mr-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                      Retake Quiz
                    </Button>
                  </div>

                  {/* Score Breakdown */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Your Score: <span className="font-semibold text-foreground">{totalScore} out of 15 points</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Additional Context */}
        {!showResults && (
          <div className={`text-center mt-8 ${isInView ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            <p className="text-sm text-muted-foreground">
              Your responses are private and not stored
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
