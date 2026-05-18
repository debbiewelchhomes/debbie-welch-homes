import { useEffect } from "react";

const ChatButton = () => {
  useEffect(() => {
    if (document.getElementById("jivosite-widget")) return;
    const script = document.createElement("script");
    script.id = "jivosite-widget";
    script.src = "//code.jivosite.com/widget/rIV3GuN2Kf";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatButton;
