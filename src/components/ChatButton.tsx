import { MessageCircle } from "lucide-react";

const ChatButton = () => {
  const handleClick = () => {
    window.open('https://m.me/102493361706173', '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat with Debbie"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl md:px-5 md:py-3"
      style={{
        backgroundColor: '#6e808e',
        color: '#ffffff',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#3c3e4f';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#6e808e';
      }}
    >
      <MessageCircle className="w-5 h-5 md:w-5 md:h-5" />
      <span className="hidden md:inline font-body font-medium text-sm">
        Chat with Debbie
      </span>
    </button>
  );
};

export default ChatButton;
