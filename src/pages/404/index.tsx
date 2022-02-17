import "./styles.css";
import raccoon from "../../assets/raccoon.png";
import { useRef } from "react";

type drawProps = {
  canvas: HTMLCanvasElement | null | undefined;
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

function drawRaccoon({ canvas, image, event }: drawProps) {
  const ctx = canvas?.getContext("2d");

  let { x, y } = getMousePosition(canvas, event);

  // Ajustar a imagem
  x = x - image.width * 2;
  y = y - image.height;

  // Tamanho do canvas para limpeza
  const canvasWidth = canvas?.width || 0;
  const canvasHeight = canvas?.height || 0;

  ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx?.drawImage(image, x, y, 40, 40);
}

export default function NotFound() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const image = useRef<HTMLImageElement>(null);

  return (
    <>
      <img ref={image} width={"11px"} src={raccoon} alt="guaxinim" />
      <canvas
        ref={canvas}
        className="canvas"
        onMouseMove={(event) => {
          const canvasElement = canvas.current;
          const raccoon = image.current;
          drawRaccoon({ canvas: canvasElement, image: raccoon, event });
        }}
      />
    </>
  );
}
