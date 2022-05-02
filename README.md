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
