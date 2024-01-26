import { useEffect, useRef, useState } from 'react'
import { useAudioPlayer } from '../AudioProvider'
import { ForwardButton } from './ForwardButton'
import { MuteButton } from './MuteButton'
import { PlaybackRateButton } from './PlaybackRateButton'
import { PlayButton } from './PlayButton'
import { RewindButton } from './RewindButton'
import { Slider } from './Slider'
import Link from 'next/link'

function parseTime(seconds: number) {
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds - hours * 3600) / 60)
  seconds = seconds - hours * 3600 - minutes * 60
  return [hours, minutes, seconds]
}

function formatHumanTime(seconds: number) {
  let [h, m, s] = parseTime(seconds)
  return `${h} hour${h === 1 ? '' : 's'}, ${m} minute${
    m === 1 ? '' : 's'
  }, ${s} second${s === 1 ? '' : 's'}`
}

export function AudioPlayer() {
  let player = useAudioPlayer()

  let wasPlayingRef = useRef(false)

  let [currentTime, setCurrentTime] = useState(player.currentTime)

  useEffect(() => {
    setCurrentTime(null)
  }, [player.currentTime])

  if (!player.meta) {
    return null
  }

  return (
    <div className="flex items-center gap-6 px-4 py-4 shadow bg-white/90 shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6">
      <div className="hidden md:block">
        <PlayButton player={player} size="medium" />
      </div>
      <div className="mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1">
        <Link
          href={`/podcast${player.meta.link}`}
          className="text-sm font-bold leading-6 text-center truncate md:text-left"
          title={player.meta.title}
        >
          {player.meta.title}
        </Link>
        <div className="flex justify-between gap-6">
          <div className="flex items-center md:hidden">
            <MuteButton player={player} />
          </div>
          <div className="flex items-center flex-none gap-4">
            <RewindButton player={player} />
            <div className="md:hidden">
              <PlayButton player={player} size="small" />
            </div>
            <ForwardButton player={player} />
          </div>
          <Slider
            label="Current time"
            maxValue={player.duration}
            step={1}
            value={[currentTime ?? player.currentTime]}
            onChange={([v]:any) => setCurrentTime(v)}
            onChangeEnd={(value:any) => {
              player.seek(value)
              if (wasPlayingRef.current) {
                player.play()
              }
            }}
            numberFormatter={{ format: formatHumanTime }}
            onChangeStart={() => {
              wasPlayingRef.current = player.playing
              player.pause()
            }}
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <PlaybackRateButton player={player} />
            </div>
            <div className="items-center hidden md:flex">
              <MuteButton player={player} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
