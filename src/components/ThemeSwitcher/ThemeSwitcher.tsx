// src/components/ThemeSwitcher/ThemeSwitcher.tsx

import { useEffect, useState } from 'react'
import './ThemeSwitcher.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const themes = ['midnight', 'iris', 'maize', 'bubblegum', 'nebula', 'pastel-grove', 'retro-terminal', 'cozy-gray', 'luxury-dark', 'ice', 'beach'] as const
type Theme = typeof themes[number]

export function ThemeSwitcher() {
  const [themeIndex, setThemeIndex] = useState(0)
  const currentTheme = themes[themeIndex]

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  return (
    <div className="theme-switcher">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        // loop={true}
        onSlideChange={(swiper) => setThemeIndex(swiper.activeIndex)}
        className="theme-swiper"
      >
        {themes.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="theme-card">
              <h3>{t.charAt(0).toUpperCase() + t.slice(1)} Theme</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="theme-preview">
        <div className="theme-color" />
        <div className="theme-color" />
        <div className="theme-color" />
        <div className="theme-color" />
        <div className="theme-color" />
        <div className="theme-color" />
        <div className="theme-color" />
        <div className="theme-color" />
      </div>
    </div>
  )
}
