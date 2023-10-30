export const getIntialSettings = (settings?: VideoPlayer.SDK.Settings): VideoPlayer.SDK.Settings => {
  const defaultSettings: Record<string, boolean | number> = {
    autoplay: false,
    muted: false,
    loop: false,
    allowFullscreen: true,
    nativeFullscreen: false,
    currentTime: 0,
    blockControls: false
  }

  if (!settings) return defaultSettings

  return { ...defaultSettings, ...settings }
}
