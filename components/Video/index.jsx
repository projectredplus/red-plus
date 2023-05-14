import React, { useCallback, useState } from 'react';
import YoutubeIframe, { PLAYER_STATES } from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';
import { ActivityIndicator } from 'react-native';
import { View } from 'native-base';


export function Video({ videoId }) {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  const onFullScreenChange = useCallback((isFullScreen) => {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }, [])

  const onStateChange = useCallback((state) => {
    if (state === PLAYER_STATES.ENDED) {
      setPlaying(false);
    }
  }, []);

  const height = 220;

  return (
    <View height={height} justifyContent={"center"}>
      <YoutubeIframe
        onChangeState={onStateChange}
        onFullScreenChange={onFullScreenChange}
        contentScale={0.75}
        webViewStyle={{
          opacity: 0.99,
          height: height
        }}
        webViewProps={{
          javaScriptEnabled: true
        }}
        play={playing}
        height={ready ? height : 0}
        videoId={videoId}
        onReady={() => setReady(true)}
      />
      {!ready && <ActivityIndicator color="orange" />}
    </View>
  );
}