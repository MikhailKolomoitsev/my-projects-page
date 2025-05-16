import { Bubble } from "@typebot.io/react";

const ChatBot = () => {
    return (
        <Bubble
            typebot="open-ai-assistant-chat-1lurnsr"
            apiHost="https://typebot.io"
            theme={{ button: { backgroundColor: "#D27A7D" } }}
        />
    );
};

export default ChatBot;