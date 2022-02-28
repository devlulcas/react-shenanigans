import "./styles.css";
import raccoon from "../../assets/raccoon.png";
import raccoonEating from "../../assets/raccoon_eating.png";
import nice from "../../assets/nice.mp3";
import { MouseEvent, useRef, useState } from "react";

type Canvas = HTMLCanvasElement | null | undefined;
type Context2d = CanvasRenderingContext2D | null | undefined;

type drawProps = {
  canvas: Canvas;
  image: any;
  event: any;
};

function getMousePosition(canvas: any, event: any) {
  // Tamanho do elemento
  const rect = canvas.getBoundingClientRect();

  return {
    x: ((event.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
    y: ((event.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height,
  };
}

function resize(ctx: Context2d) {
  ctx!.canvas.width = window.innerWidth;
  ctx!.canvas.height = window.innerHeight;
}

function clearCanvas(canvas: Canvas, ctx: Context2d) {
  // Tamanho do canvas para limpeza
  const canvasWidth = canvas?.width || 0;
  const canvasHeight = canvas?.height || 0;

  ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
}

function createText(canvas: Canvas, ctx: Context2d, text: string) {
  ctx!.font = "80px Montserrat";
  ctx!.fillStyle = "#ffecd6";
  ctx!.textAlign = "center";
  const canvasWidth = (canvas?.width || 0) / 2;
  const canvasHeight = (canvas?.height || 0) / 2;
  ctx!.fillText(text, canvasWidth, canvasHeight);
}

function drawRaccoon({ canvas, image, event }: drawProps) {
  const ctx = canvas?.getContext("2d");

  let { x, y } = getMousePosition(canvas, event);

  // Ajustar a imagem
  x = x - image.width * 20;
  y = y - image.height * 20;

  resize(ctx);

  clearCanvas(canvas, ctx);
  createText(canvas, ctx, "404");
  ctx?.drawImage(image, x, y, 404, 404);
}

export default function NotFound() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const sound = useRef<HTMLAudioElement>(null);

  const [src, setSrc] = useState(raccoon);
  const [eating, setEating] = useState(false);

  function shenanigans(event: MouseEvent<HTMLCanvasElement>) {
    const canvasElement = canvas.current;
    const raccoon = image.current;
    drawRaccoon({ canvas: canvasElement, image: raccoon, event });
  }

  function changeRacoon(event: MouseEvent<HTMLCanvasElement>) {
    if (eating) {
      setSrc(raccoonEating);
      setEating(!eating);
      sound.current?.play();
      return;
    }
    setSrc(raccoon);
    setEating(!eating);
  }

  return (
    <>
      <audio src={nice} ref={sound}></audio>

      <img
        className="racoon"
        ref={image}
        width={"11px"}
        src={src}
        alt="guaxinim"
      />

      <canvas
        width="404px"
        height="404px"
        ref={canvas}
        className="canvas"
        onClick={changeRacoon}
        onMouseMove={shenanigans}
      />
    </>
  );
}
