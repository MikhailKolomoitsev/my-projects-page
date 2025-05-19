import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                background: { color: "#0d0d0d" },
                fpsLimit: 120,
                detectRetina: true,
                particles: {
                    number: { value: 80, density: { enable: true, area: 800 } },
                    color: {
                        value: ["#ff6b6b", "#feca57", "#1dd1a1", "#54a0ff", "#5f27cd"]
                    },
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.25,
                        random: true,
                        anim: { enable: true, speed: 0.4, opacity_min: 0.1, sync: false }
                    },
                    size: {
                        value: { min: 1, max: 4 },
                        random: true
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "none",
                        outModes: { default: "bounce" },
                        random: true,
                        straight: false
                    },
                    links: {
                        color: "#00ffe0",
                        distance: 120,
                        enable: true,
                        opacity: 0.4,
                        width: 1,
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: ["bubble", "grab"],
                            parallax: { enable: true, smooth: 15, force: 80 } // 👈 optional for "depth"
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 300,   
                            duration: 1.5,
                            size: 8,
                            opacity: 0.9,
                            speed: 2,
                            color: {
                                value: ["#ff9ff3", "#f368e0", "#48dbfb", "#00d2d3", "#c8d6e5"]
                            }
                        },
                        grab: {
                            distance: 10,
                            links: {
                                opacity: 0.5
                            }
                        }
                    }
                }
            }}
        />
    );
};

export default ParticlesBackground;