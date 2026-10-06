import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Toast = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'error':
        return <AlertCircle size={20} color="#FF6B6B" />;
      case 'info':
        return <Info size={20} color="#8FA89B" />;
      default:
        return <CheckCircle2 size={20} color="#C59B4D" />;
    }
  };

  return (
    <div className="toast-container" role="alert" aria-live="polite">
      <div className={`toast-box toast-${toast.type || 'success'}`}>
        {getIcon()}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};
