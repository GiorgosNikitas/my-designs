// App.tsx
import { useState } from 'react'
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/scrollbar'

import { Button3D } from './components/3DButton/Button3D'
import './styles/themes/themes.scss';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher'
import { GlowContainer } from './components/GlowContainer/GlowContainer'
import { SlideContent } from './components/MySwiperSlide/SlideContent'
import DraggableLight from './components/DraggableLight/DraggableLight'
import { DarkModeToggle } from './components/DarkModeToggle/DarkModeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Swiper
      direction="vertical"
      loop={true}
      modules={[Scrollbar, Mousewheel]}
      scrollbar={{ draggable: true }}
      mousewheel={{
        sensitivity: 1
      }}
      allowTouchMove={false}
      className="swiper"
    >
      <SwiperSlide>
        <SlideContent title="Theme Switcher" children={<ThemeSwitcher />} />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContent title="3D Button"
          children={
            <Button3D
              label="Click me"
              onClick={() => setCount(count + 1)}
              disabled={count >= 10}
            />}
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContent title="Glow Container" children={<GlowContainer children={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>} />} />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContent title="Draggable Light" children={<DraggableLight />} />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContent title="Dark Mode Toggle" children={<DarkModeToggle />} />
      </SwiperSlide>
    </Swiper>
  )
}

export default App
