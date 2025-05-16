import { Bubble } from "@typebot.io/react";
import { useEffect } from "react";

const ChatBot = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            const bubbleEl = document.querySelector("typebot-bubble");

            if (!bubbleEl) return;

            const shadowRoot = bubbleEl.shadowRoot;
            const button = shadowRoot?.querySelector("button");

            if (button) {
                button.click(); // 🔥 simulate click to open chat
            }
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Bubble
            typebot="open-ai-assistant-chat-1lurnsr"
            apiHost="https://typebot.io"
            theme={{
                button: {
                    backgroundColor: "#D27A7D",
                },
            }}
        />
    );
};

export default ChatBot;