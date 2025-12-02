import { MessageCircle } from "lucide-react";

const ChatButton = () => {
  return (
    <a
      href="https://m.me/debbie.welch.realtor?ref=w47618904"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Debbie"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl md:bottom-6 md:right-6"
      style={{
        backgroundColor: '#3c3e4f',
        color: '#ffffff',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#6e808e';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#3c3e4f';
      }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden md:inline font-body font-medium text-sm">
        Chat with Debbie
      </span>
    </a>
  );
};

export default ChatButton;
