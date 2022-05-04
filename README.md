## Projeto NLW Return com Diego 02/05/2022 Primeiro dia

instalando projeto

yarn create vite@latest

seleciona react
react-ts

npm install

limpamos os arquivos e tags que nao precisamos

<!--  Para rodar o projeto -->

npm run dev

<!-- Instalando tailwind -->

> Instalando o tailwindcss
> npm i -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

criamos um arquivo global.css
nele comocamos

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

importamos no mais.tsx

```tsx
import "./global.css";
```

> Como usar o tailwindcss

```tsx
<button className="bg-violet-500 px-4 h-10 rounded hover:bg-violet-700 transition-colors text-violet-100">
  Enviar
</button>
```

Criamos uma pasta componentes/Widget.tsx
icones usado no projeto
npm i phosphor-react

usamos o icone ChatTierdropDots importamos ele

```tsx
import { ChatTeardropDots } from "phosphor-react";
//criamos o button e colocamos o icone estillizando ele
//cor
//aredondado full
//padding lateral
//heigth 12
//texto white

<button className="bg-brand-500 rounded-full px-3 h-12 text-white">
  <ChatTeardropDots className="w-6 h-6" />
</button>;

//criamos uma div para colocar o button no canto abaixo direito
//absoluto
//bottom
//right
<div className="absolute bottom-5 right-5"></div>;

//ficando assim
<div className="absolute bottom-5 right-5">
  <button className="bg-brand-500 rounded-full px-3 h-12 text-white ">
    <ChatTeardropDots className="w-6 h-6" />
  </button>
</div>;

// quando passar o mouse
<span>Feedback</span>

//adicionamos o flex e items-center na classe do  button
 <button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center">
    <ChatTeardropDots className="w-6 h-6" />
  </button>
// adicionamos uma classe no span
//colocamos maxwidth
<span className="max-w-0">Feedback</span>
//adicionamos um span dentro do span ao lado feedback e colocamos um padding left de 8px
<span className="max-w-0 overflow-hidden"><span className="pl-2"></span> Feedback</span>

// colocando um hover no botao colocamos um group
<button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
    <ChatTeardropDots className="w-6 h-6" />
</button>
// e no span group-hover:max-w-auto
<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"><span className="pl-2"></span> Feedback</span>

//antes do botao colocamos paragrafo hello world
 <p>Hello World</p>

//vamos criar um estado
 const [isWidgetOpen,setIsWidgetOpen] = useState(false);

//criamos uma funcao
  const toggleWidgetVisibility = () =>{
    setIsWidgetOpen(!isWidgetOpen)
  }

// no button criamos  o onClick
<button
  onClick={toggleWidgetVisibility}
  className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
/>

//quando clicar aparece o p
  {isWidgetOpen && <p>Hello World</p>}

//configurando o nosso projeto tambem para acessibilidade
//headless ui  criada pelo tailwind
npm i @headlessui/react

//importamos o popover
import {Popover} from '@headlessui/react'

//tiramos o useState pq nao precisamos dele mais trocamos as tags e usamos o Popover
  <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>Hello World</Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span> Feedback
        </span>
      </Popover.Button>
    </Popover>


```

## NLW Return Estilizando segundo dia

global.css

```css
body {
  @apply bg-[#09090A] text-zinc-100;
}
```

## criando componente do formulário

components/WidgetForm.tsx

```tsx
<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
  Hello World
</div>
```

vamos no Widget e colocamos o WidgetForm

```tsx

 <Popover className="absolute bottom-5 right-5 flex flex-col items-end md:bottom-10 md:right-10">
```

## cabeçalho e footer

```tsx

<header>
  <span className="text-xl leading-6">Deixe seu feedback</span>
</header>

<footer className="text-xs text-neutral-400">Feito com ♥ pela <a className="underline underline-offset-2" href="https://rockeatseat">Rocketseat</a></footer>

```

Criamos um componente para o button

```tsx
import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Fechar formulário de feedback"
    >
      <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  );
}
```

colocamos ele no WidgetForm

```tsx
import { CloseButton } from "./CloseButton";

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <CloseButton />
      Hello World
    </div>
  );
}
```

## Seleção do tipo de feedback

```tsx
//Criando o corpo
<div className="flex py-8 gap-2 w-full"></div>;
//Criando os botoes que vai ter no corpo com objeto

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: bugImageUrl,
    alt: "imagem de um inseto",
  },
  IDEA: {
    title: "Ideia",
    image: ideaImageUrl,
    alt: "Imagem de uma lampada",
  },
  OTHER: {
    title: "Outro",
    image: throughImageUrl,
    alt: "Imagem de um balão de pensamento",
  },
};

//importamos a imagem como js
import bugImageUrl from "./assets/bug.svg";
import ideaImageUrl from "./assets/idea.svg";
import throughImageUrl from "./assets/through.svg";

//incluindo na div
{
  Object.entries(feedbackTypes).map(([key, value]) => {
    return (
      <button>
        <img src={value.image} alt={value.alt} />
        <span>{value.title}</span>
      </button>
    );
  });
}
```

## Estilizando o botão bug,idea,other

```tsx
// return (
  <button
    key={key}
    className="bg-zinc-800  rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"
    // onClick={}
  //   type={"button"}
  // >
  //   <img src={value.image} alt={value.alt} />
  //   <span>{value.title}</span>
  // </button>
// );
```

## Quando clicar salvar a informação

//criando os estados do botoes

```tsx
const [feedbackType, setFeedbackType] = useState();


 <button
    // key={key}
    // className="bg-zinc-800  rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"
    onClick={()=> setFeedbackType(key)} // key nao e uma string da erro
  //   type={"button"}
   >
  //   <img src={value.image} alt={value.alt} />
  //   <span>{value.title}</span>
   </button>
// );

//tipado os tipos
 type feedbackType = keyof typeof feedbacktypes


   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
     // tipado
    onClick={() => setFeedbackType(key as FeedbackType)}

// mostrando ou nao os botoes

 {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800  rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"
                onClick={() => setFeedbackType(key as FeedbackType)}
                type={"button"}
              >
                <img src={value.image} alt={value.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>Hello world</p>
      )}

```

## implementando o conteúdo do feedback

separando em components os conteúdos
criando a pasta e passando o WidgetForm.tsx para index.tsx

WidgetForm/index.tsx

criando a pasta Widget/index.tsx

criando o CloseButton/index.tsx

Criamos uma pasta nova chamada Steps nela criamos

Steps/FeedbackContentStep.tsx
Steps/FeedbackSuccessStep.tsx
Steps/FeedbackTypeStep.tsx

No Steps/FeedbackTypeStep.tsx movemos o corpo do feedback para ele

```tsx
import { FeedbackType, feedbackTypes } from "../WidgetForm";
//criamos uma interface FeedbackTypeStepProps  que tem o valor de onFeedbackTypeChanged como uma função void
interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}
// passamos a propriedade onFeedbackTypeChanged
export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className="bg-zinc-800  rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"
            //passamos o onFeedbackTypeChanged
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            type={"button"}
          >
            <img src={value.image} alt={value.alt} />
            <span>{value.title}</span>
          </button>
        );
      })}
    </div>
  );
}
```

## Criando o FeedbackContentStep

movendo o header porque ele nao e fixo , movemos ele para o FeedbackTypeStep

```tsx
<>
  <header>
    <span className="text-xl leading-6">Deixe seu feedback</span>
    <CloseButton />
  </header>
  // <div className="flex py-8 gap-2 w-full">
    // {Object.entries(feedbackTypes).map(([key, value]) => {
  //     return (
  //       <button
  //         key={key}
  //         className="bg-zinc-800  rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"
  //         onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
  //         type={"button"}
  //       >
  //         <img src={value.image} alt={value.alt} />
  //         <span>{value.title}</span>
  //       </button>
  //     );
  //   })}
  // </div>
</>
```

incluímos FeedbackContentStep no ternário

```tsx
{
  !feedbackType ? (
    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
  ) : (
    <FeedbackContentStep />
  );
}
```

Copiamos o conteúdo do FeedbackTypeStep e colamos no FeedbackContentStep deixando assim

```tsx
import { CloseButton } from "../CloseButton";

export function FeedbackContentStep() {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
```

selecionando o tipo de feedback que foi escolhido

```tsx
//passamos propriedade
<FeedbackContentStep feedbackType={feedbackType} />;

//criamos a interface
interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}

//passamos a propriedade feedbackType e a interface tipado
export function FeedbackContentStep({
  feedbackType,
}: FeedbackContentStepProps) {
  // return (
  //   <>
  //     <header>
  //       <span className="text-xl leading-6">Deixe seu feedback</span>
  //       <CloseButton />
  //     </header>
  //     <div className="flex py-8 gap-2 w-full"></div>
  //   </>
  // );
}

//agora criamos as informações  pegando apenas o que foi escolhido
const feedbackTypeInfo = feedbackTypes[feedbackType];
//Passamos no header as informações
<header>
  <span className="text-xl leading-6">
    <img
      src={feedbackTypeInfo.image}
      alt={feedbackTypeInfo.alt}
      className="w-6 h-6"
    />
    {feedbackTypeInfo.title}
  </span>
  <CloseButton />
</header>;

//Criando o botão de voltar dentro do header

<button
  type="button"
  className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
>
  <ArrowLeft weight="bold" className="w-4 h-4" />
</button>;

// quando clicar volte a tela anterior

//criando uma função chamada handleRestartFeedback passando o setFeedbackType pra null
function handleRestartFeedback() {
  setFeedbackType(null);
}

// passamos ele na propriedade FeedbackContentStep
<FeedbackContentStep onFeedbackRestartRequested={handleRestartFeedback} />;

//passamos o onFeedbackRestartRequested para interface do FeedbackContentStepProps
interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

//Passamos o onFeedbackRestartRequested na propriedade do FeedbackContentStep
export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {}

//criamos o onClick no button passando a propriedade onFeedbackRestartRequested
<button
  type="button"
  className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
  onClick={onFeedbackRestartRequested}
>
  <ArrowLeft weight="bold" className="w-4 h-4" />
</button>;
```

Criando o fomulário do conteúdo

```tsx
<div className="flex py-8 gap-2 w-full">
  <form className="my-4 w-full">
    <textarea
      className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-400 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:auto-line-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
      placeholder="Conte com detalhes o que está acontecendo..."
    ></textarea>
  </form>
</div>
```

instalando o plugin do tailwindcss formulário
npm i -D @tailwindcss/forms

dentro do tailwind.config.js colocamos no plugins

```js
// module.exports = {
//   content: ["./src/**/*.{html,js,tsx}"],
//   theme: {
//     extend: { colors: { brand: { 500: "#8257e6" } } },
//   },
  plugins: [require("@tailwindcss/forms")],
// };
```

instalando o tailwindscrollbar

npm install --save-dev tailwind-scrollbar

colocamos também no plugins do tailwindcss

```jsx
// module.exports = {
//   content: ["./src/**/*.{html,js,tsx}"],
//   theme: {
//     extend: { colors: { brand: { 500: "#8257e6" } } },
//   },
  plugins: [require("@tailwindcss/forms"), require('tailwind-scrollbar')],
// };
```

Criando os botoes screenshot e enviar feedback

```tsx
<footer>
  <button
    type="submit"
    className="bg-brand-500 rounded-md border-transparent flex felx-1 justify-center items-center text-sm hover:bg-brand-300"
  ></button>
</footer>
```

Criando uma nova cor pro tema

```tsx
// module.exports = {
//   content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: { colors: { brand: { 500: "#8257e6", 300: "#996DFF" } } },
  },
//   plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
// };
```

Finalizado o botão

```tsx
<footer className="flex gap-2 mt-2">
  <button
    type="submit"
    className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
  >
    Enviar feedback
  </button>
</footer>
```

modificando o borderRadius o tamanho dele de 6px para 4px

tailwind.config.js

```tsx

// module.exports = {
//   content: ["./src/**/*.{html,js,tsx}"],
  // theme: {
  //   extend: {
  //     colors: { brand: { 500: "#8257e6", 300: "#996DFF" } },
      borderRadius: { md: "4px" },
    },
  },
//   plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
// };
```

Criando o botão de screenshot

```tsx
<button
  type="button"
  className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
>
  <Camera className="w-6 h-6" />
</button>
```

fazendo os botoes funcionar

criamos um componente para o botão de screenshot

components/WidgetForm/ScreenshotButton.tsx

```tsx
import { Camera } from "phosphor-react";

export function ScreenshotButton() {
  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      <Camera className="w-6 h-6 text-zinc-100" />
    </button>
  );
}
```

> criamos uma funcao chamada handleTakeScreenshot

```tsx
function handleTakeScreenshot() {}
```

> instalamos um pacote npm i html2canvas

```tsx
//passamos a funcao handleTakeScreenshot a ser assíncrona

async function handleTakeScreenshot() {
  // usamos o html2canvas
  const canvas = await html2canvas(document.querySelector("html")!);
  //base64
  const base64Image = canvas.toDataURL("image/png");
}

//adicionamos o handleTakeScreenshot no button usando onClick
// <button
//   type="button"
onClick = { handleTakeScreenshot };
//   className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
// >
//   <Camera className="w-6 h-6 text-zinc-100" />
// </button>;

//criando um estado isTakingScreenshot
const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

//passando se foi tirado ou nao a foto

async function handleTakeScreenshot() {
  setIsTakingScreenshot(true);
  const canvas = await html2canvas(document.querySelector("html")!);
  const base64Image = canvas.toDataURL("image/png");

  setIsTakingScreenshot(false);
}
```

Criando um Loading/index.tsx

```tsx
import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
    </div>
  );
}
```

//No FeedbackContentStep criamos um estado ele vai ser uma string ou nulo

```tsx
const [screenshot, setScreenshot] = useState<string | null>(null);
```

// no ScreenShot button passamos uma funcao onScreenShotTook={ setScreenshot }

```tsx
<ScreenshotButton onScreenShotTook={setScreenshot} />
```

// no ScreenshotButton criamos a interface

```tsx
interface ScreenshotButtonProps {
  setScreenshot: () => void;
}
```

//Passamos ele como propriedade ScreenshotButton

```tsx
export function ScreenshotButton({ onScreenShotTook }: ScreenshotButtonProps) {}
```

// passamos a funcao setScreenshot o base64 tirado

```tsx
setScreenshot(base64Image);
```

//passamos pro ScreenshotButton a foto tirada

```tsx
<ScreenshotButton screenshot={screenshot}>
```

//passamos na interface o screenshot

```tsx
interface ScreenshotButtonProps {
  onScreenShotTook: (screenshot: string) => void;
  screenshot: string | null;
}
```

//passamos o screenshot na propriedade do ScreenshotButton

```tsx
export function ScreenshotButton({
  onScreenShotTook,
  screenshot,
}: ScreenshotButtonProps) {}
```

// quando tiver a foto mostra a fot e nao mais o icone

```tsx
if (screenshot) {
  return (
    <button
      type="button"
      className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      style={{
        backgroundImage: `url(${screenshot})`,
        backgroundPosition: "right bottom",
        backgroundSize: 100,
      }}
    >
      <Trash weight="fill" />
    </button>
  );
}
```

//fazendo o delete do screenshot funcionar

```tsx

  //quando clicar no button da latinha de lixo
  onClick={()=> onScreenshotTook(null)} // nao vai aceitar como nulo passamos nulo na funcao


  interface ScreenshotButtonProps {
  onScreenShotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

```

//fazendo o button do feedback
FeedbackContentStep.tsx

```tsx

//criamos um estado comment
const [comment,setComment] useState('')

//criamos o onChange no textarea
onChange={e=>setComment(e.target.value)}

//completo

<textarea
  onChange={(e) => setComment(e.target.value)}
  value={comment}
  // className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-400 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
  // placeholder="Conte com detalhes o que está acontecendo..."
></textarea>

//criamos a funcao do submit
 function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    console.log({
      screenshot,
      comment,
    });
  }

  //deixar o button desabilitado

  disabled={comment.length === 0}

  //colocando opacidade no button
  <button
    type="submit"
     className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
  >
    Enviar feedback
  </button>
```

## Criando a ultima parte do FeedbackSuccessStep

```tsx
//Criando um estado feedbackSent
const [feedbackSent, setFeedbackSent] = useState(false);

//no FeedbackContentStep passamos propiciado setFeedbackSet

<FeedbackContentStep onFeedbackSent={() => setFeedbackSent(true)} />;

//passamos na interface
interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

//passamos a propriedade

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}:

//e chamamos a funcao
//  function handleSubmitFeedback(e: FormEvent) {
//     e.preventDefault();
//     onFeedbackSent();
//     console.log({
//       screenshot,
//       comment,
//     });

    onFeedbackSent();
  // }


  //colocamos um outro ternário no feedbackType

     {feedbackSent ? (
        <FeedbackSuccessStep />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
```

```tsx
import { CloseButton } from "../CloseButton";

export function FeedbackSuccessStep() {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.5 34C38.5 36.209 36.709 38 34.5 38H6.5C4.291 38 2.5 36.209 2.5 34V6C2.5 3.791 4.291 2 6.5 2H34.5C36.709 2 38.5 3.791 38.5 6V34Z"
            fill="#77B255"
          />
          <path
            d="M31.78 8.36202C30.624 7.61102 29.076 7.94002 28.322 9.09802L17.436 25.877L12.407 21.227C11.393 20.289 9.81103 20.352 8.87403 21.365C7.93703 22.379 7.99903 23.961 9.01303 24.898L16.222 31.564C16.702 32.009 17.312 32.229 17.918 32.229C18.591 32.229 19.452 31.947 20.017 31.09C20.349 30.584 32.517 11.82 32.517 11.82C33.268 10.661 32.938 9.11302 31.78 8.36202Z"
            fill="white"
          />
        </svg>
        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 border-transparent text-sm leading-6 transition-colors hover:bg-zinc-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
```

WidgetForm.tsx

```tsx
function handleRestartFeedback() {
  setFeedbackSent(false);
  setFeedbackType(null);
}

//criamos uma propriedade
onFeedbackRestartRequested = { handleRestartFeedback };

//criamos a interface no FeedbackSuccessSteup
interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

//passamos a propriedade no export function FeedbackSuccessStep({
export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {}

//passamos o onclick no button quando clicar retorna ao começo do feedback

<button
  type="button"
  onClick={() => onFeedbackRestartRequested()}
  className="py-2 px-6 mt-6 bg-zinc-800 border-transparent text-sm leading-6 transition-colors hover:bg-zinc-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
>
  Quero enviar outro
</button>;

#NeverStopLearning
```

## NLW Return Node.js backend Terceiro Dia 

Setup ------- 
 npm init -y 



