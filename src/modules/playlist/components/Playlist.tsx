'use client';

import React from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import Frequency from '@/components/layouts/audio-player/Frequency';
import { musicPlaylist } from '@/common/constants/music';
import { cn, formatTime } from '@/common/lib/utils';
import { useMusic } from '@/stores/music';

const controlClass =
  'flex items-center justify-center border-2 border-mainDark bg-main text-text shadow-[3px_3px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText';

const Playlist = () => {
  const isPlaying = useMusic(state => state.isPlaying);
  const progress = useMusic(state => state.progress);
  const currentTime = useMusic(state => state.currentTime);
  const duration = useMusic(state => state.duration);
  const currentTrackIndex = useMusic(state => state.currentTrackIndex);
  const togglePlay = useMusic(state => state.togglePlay);
  const nextTrack = useMusic(state => state.nextTrack);
  const prevTrack = useMusic(state => state.prevTrack);
  const selectTrack = useMusic(state => state.selectTrack);

  const currentTrack = musicPlaylist[currentTrackIndex] ?? musicPlaylist[0];

  return (
    <div className="w-full text-text dark:text-darkText">
      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12 lg:gap-6">

        <section className="lg:col-span-5 lg:sticky lg:top-6">
          <div className="border-2 border-mainDark bg-main p-5 shadow-[4px_4px_0px_0px_#000] transition-colors duration-300 dark:border-darkBorder dark:bg-secondaryBlack md:p-6">

            <div className="relative mx-auto aspect-square w-full max-w-[240px]">
              <div
                className={cn(
                  'absolute inset-0 rounded-full border-2 border-mainDark bg-mainDark shadow-[4px_4px_0px_0px_#000] dark:border-darkBorder dark:bg-darkBg',
                  isPlaying ? 'animate-[spin_8s_linear_infinite]' : 'animate-none'
                )}
              >
                <div className="absolute inset-4 rounded-full border border-white/15" />
                <div className="absolute inset-8 rounded-full border border-white/10" />

                {currentTrack?.musicCover ? (
                  <img
                    src={currentTrack.musicCover}
                    alt={currentTrack.title}
                    className="absolute inset-0 h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-[36%] flex items-center justify-center rounded-full border-2 border-mainDark bg-shineRed">
                    <span className="h-3 w-3 rounded-full border-2 border-mainDark bg-main" />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 text-center">
              <h2 className="truncate text-lg font-bold">
                {currentTrack?.title.split(' - ')[0] ?? 'Unknown Title'}
              </h2>
              <p className="mt-1 truncate text-xs font-semibold opacity-70">
                {currentTrack?.artist ?? 'Unknown Artist'}
              </p>
            </div>

            <div className="mt-5">
              <div className="h-3 overflow-hidden border-2 border-mainDark bg-bg dark:border-darkBorder dark:bg-darkBg">
                <div
                  className="h-full bg-shineRed transition-[width] duration-150 ease-linear"
                  style={{ width: `${progress || 0}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs font-semibold opacity-70">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                onClick={prevTrack}
                aria-label="Previous track"
                className={cn(controlClass, 'h-10 w-10')}
              >
                <SkipBack size={18} fill="currentColor" />
              </button>

              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                className={cn(controlClass, 'h-12 w-12 bg-shineRed text-mainDark dark:bg-shineRed dark:text-mainDark')}
              >
                {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
              </button>

              <button
                onClick={nextTrack}
                aria-label="Next track"
                className={cn(controlClass, 'h-10 w-10')}
              >
                <SkipForward size={18} fill="currentColor" />
              </button>
            </div>

            <div className="mt-5 h-14 border-2 border-mainDark bg-bg p-1 dark:border-darkBorder dark:bg-darkBg">
              <Frequency className="h-full" />
            </div>
          </div>
        </section>

        <section className="lg:col-span-7">
          <div className="flex flex-col border-2 border-mainDark bg-main shadow-[4px_4px_0px_0px_#000] transition-colors duration-300 dark:border-darkBorder dark:bg-secondaryBlack">
            <div className="flex items-center justify-between border-b-2 border-mainDark px-5 py-4 dark:border-darkBorder">
              <h3 className="text-sm font-black uppercase tracking-[0.2em]">Playlist</h3>
              <span className="border-2 border-mainDark bg-bg px-2 py-0.5 text-xs font-bold dark:border-darkBorder dark:bg-darkBg">
                {musicPlaylist.length} tracks
              </span>
            </div>

            <div className="max-h-[420px] overflow-y-auto lg:max-h-[560px]">
              {musicPlaylist.map((music, index) => {
                const isActive = currentTrackIndex === index;

                return (
                  <button
                    key={index}
                    onClick={() => selectTrack(index)}
                    className={cn(
                      'flex w-full items-center gap-3 border-b border-mainDark/15 px-4 py-3 text-left transition-colors last:border-b-0 dark:border-darkText/10',
                      isActive ? 'bg-shineRed/15' : 'hover:bg-bg dark:hover:bg-darkBg'
                    )}
                  >
                    <span className="flex w-6 shrink-0 items-center justify-center text-xs font-bold">
                      {isActive && isPlaying ? (
                        <span className="flex h-4 items-end gap-[2px]">
                          <span className="h-2 w-[3px] animate-[pulse_0.8s_ease-in-out_infinite] bg-shineRed" />
                          <span className="h-4 w-[3px] animate-[pulse_1s_ease-in-out_infinite_0.15s] bg-shineRed" />
                          <span className="h-3 w-[3px] animate-[pulse_0.9s_ease-in-out_infinite_0.3s] bg-shineRed" />
                        </span>
                      ) : (
                        index + 1
                      )}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold">{music.title.split(' - ')[0]}</span>
                      <span className="block truncate text-xs opacity-60">{music.artist}</span>
                    </span>

                    {isActive && (
                      <span className="h-2 w-2 shrink-0 rounded-full border border-mainDark bg-shineRed" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Playlist;
