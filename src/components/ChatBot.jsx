import { Bubble } from "@typebot.io/react";
import { useEffect } from "react";

const ChatBot = () => {
    useEffect(() => {
        const hasBeenOpened = localStorage.getItem("typebotHasBeenOpened");

        if (!hasBeenOpened) {
            const timeout = setTimeout(() => {
                const bubbleEl = document.querySelector("typebot-bubble");

                if (!bubbleEl) return;

                const shadowRoot = bubbleEl.shadowRoot;
                const button = shadowRoot?.querySelector("button");

                if (button && !localStorage.getItem("typebotHasBeenOpened")) {
                    button.click();
                    localStorage.setItem("typebotHasBeenOpened", "true");
                }
            }, 12000); 

            return () => clearTimeout(timeout);
        }
    }, []);

    return (
        <Bubble
            typebot="open-ai-assistant-chat-1lurnsr"
            apiHost="https://typebot.io"
            onOpen={() => { localStorage.setItem("typebotHasBeenOpened", "true"); }}
            theme={{
                button: {
                    backgroundColor: "#D27A7D",
                },
            }}
        />
    );
};

export default ChatBot;