import React from "react";

interface LoadingSpinnerProps {
    className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
    return (
        <div className={`spinner ${className}`}>
            <style jsx>{`
                .spinner {
                    border: 4px solid rgba(7, 5, 56, 0.1);
                    border-left-color: #000;
                    border-radius: 50%;
                    width: 36px;
                    height: 36px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default LoadingSpinner;
