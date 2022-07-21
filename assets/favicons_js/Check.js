import * as React from "react";
import Svg, { Path } from "react-native-Svg";

const SvgCheck = (props) => (
  <Svg xmlns="http://www.w3.org/2000/Svg" viewBox="0 0 512 512" {...props}>
    <Path
      d="M254.3 1.2c10.8-.1 24.1.3 29.4.9 5.4.5 16.3 2.3 24.3 3.9s20.6 4.9 28 7.4c7.4 2.4 18.4 6.7 24.5 9.3 6.1 2.7 15.9 7.8 22 11.2 6.1 3.5 13.7 8.2 16.9 10.5 4 2.7 6.7 5.6 8.3 8.6 1.6 3.1 2.3 6.2 2.3 9.8 0 3.1-.8 6.7-1.9 8.9-1 2.1-3 4.8-4.3 6-1.2 1.2-4 2.9-6.1 3.7-2 .9-5.6 1.6-8 1.6-2.5 0-6-.9-8.7-2.3-2.5-1.3-8.8-5-14-8.2-5.2-3.2-14.2-8.1-20-10.8-5.8-2.7-16.4-6.9-23.5-9.2-7.1-2.4-17.5-5.2-23-6.4-5.5-1.1-14.1-2.5-19-3.1-4.9-.6-16.6-1.1-26-1.1-9.6 0-21.6.7-27.5 1.5-5.8.8-13.9 2.2-18 3.1-4.1.8-11.3 2.7-16 4.1-4.7 1.4-13.4 4.6-19.5 7.1-6.1 2.4-14.8 6.5-19.5 9-4.7 2.5-12.8 7.4-18 10.9-5.2 3.4-13.8 9.8-19 14.2-5.2 4.3-13.5 12.1-18.4 17.3-4.8 5.2-11.9 13.4-15.6 18.4-3.7 4.9-9.8 13.9-13.4 20-3.6 6.1-8.7 15.7-11.2 21.5-2.6 5.8-6.3 15.7-8.4 22-2.1 6.3-4.7 16.2-5.9 22-1.1 5.8-2.5 14.3-3.1 19-.6 4.7-1.1 15.9-1.1 25s.5 20.3 1.1 25c.6 4.7 2 13.2 3.1 19 1.2 5.8 3.8 15.7 5.9 22 2.1 6.3 5.8 16.2 8.4 22 2.5 5.8 7.6 15.4 11.2 21.5 3.6 6.1 9.8 15.3 13.7 20.5 3.9 5.2 12.8 15.1 19.7 22 6.9 6.9 16.8 15.8 22 19.6 5.2 3.9 14.7 10.2 21 14 6.3 3.9 16.9 9.3 23.5 12.1 6.6 2.8 15.8 6.3 20.5 7.7 4.7 1.5 12.6 3.6 17.5 4.7s13.7 2.7 19.5 3.5c6.1.9 17.9 1.5 28 1.5 9.6 0 21.1-.5 25.5-1.1 4.4-.5 12.7-1.9 18.5-3.1 5.8-1.1 16.6-4.1 24-6.6 7.4-2.4 18.4-6.9 24.5-9.8 6.1-3 13.9-7 17.5-9 5.2-2.9 7.6-3.5 12-3.5 3.8 0 6.9.7 10 2.3 2.8 1.5 5.5 4 7.3 6.8 2.1 3.3 2.8 5.7 2.9 9.9q.1 5.5-1.9 10c-1.6 3.3-3.7 5.6-8 8.5-3.2 2.1-10.5 6.3-16.3 9.2-5.8 2.9-16.4 7.6-23.5 10.4-7.1 2.8-19.8 6.8-28 8.9-8.3 2.1-19.7 4.6-25.5 5.4-7.7 1.2-18.4 1.6-39.5 1.6-24.1 0-31-.3-41-2-6.6-1-17.2-3.2-23.5-4.9-6.3-1.6-16.7-4.8-23-7.1-6.3-2.3-17.4-7-24.5-10.5-7.2-3.5-17.7-9.4-23.5-13-5.8-3.7-14.8-9.9-20-13.9-5.2-3.9-14.8-12.3-21.4-18.6-6.5-6.3-15.5-15.8-19.8-21-4.4-5.2-11.9-15.4-16.7-22.5-4.7-7.1-11.9-19.5-15.8-27.5-3.9-8-9.2-20.1-11.6-27-2.5-6.9-5.9-18.1-7.5-25-1.7-6.9-3.9-17.4-4.9-23.5C.9 286.8.5 278.8.5 257s.4-29.8 1.8-38.5c1-6.1 3.2-16.6 4.9-23.5 1.6-6.9 5-18.1 7.5-25 2.4-6.9 7.7-19 11.6-27 3.9-8 10.9-20.1 15.5-27 4.6-6.9 10.9-15.7 14-19.5 3.1-3.8 10.4-11.9 16.2-17.9 5.8-5.9 14.8-14.4 20-18.8 5.2-4.4 15.3-11.9 22.5-16.7 7.1-4.7 19.5-11.9 27.5-15.8 8-3.9 20.1-9.2 27-11.6 6.9-2.5 18.1-5.9 25-7.5 6.9-1.7 17.2-3.8 23-4.6 5.8-.9 12.1-1.7 14-1.9 1.9-.2 12.4-.5 23.2-.5zm238.9 41c4.9.2 7.4.9 10 2.6 1.9 1.3 4.5 4 5.9 6 2.1 3 2.5 4.7 2.5 11.3 0 6.6-.4 8.2-2.4 11.1-1.4 1.8-50.2 62.7-108.5 135.2-76.2 94.8-107.6 133.2-111.6 136.3-3 2.4-8.4 5.5-12 6.9-5.1 2.1-8.7 2.8-17 3.2-8.8.4-11.6.1-17.5-1.6-3.9-1.2-9.3-3.6-12.2-5.4-2.8-1.8-24.7-21.7-48.5-44.3-23.8-22.6-48.8-46.4-55.7-53-6.8-6.6-13-13.5-13.7-15.3-.8-1.7-1.4-5.5-1.4-8.2 0-2.8.5-6.2 1.1-7.8.5-1.5 2.5-4.2 4.2-6.1 1.8-1.8 4.7-4 6.4-4.7 1.8-.8 5.5-1.4 8.3-1.4 2.7 0 6.5.6 8.2 1.3 1.9.8 25.3 22.2 53.3 48.7 27.5 26 52 49.3 54.5 51.6 2.5 2.4 5.8 4.8 7.5 5.2 1.6.5 4.5.5 6.2 0 2.8-.7 18.3-19.4 109.5-133 58.5-72.7 107.2-133.1 108.3-134.1 1.1-1.1 3.4-2.6 5-3.3 1.9-.9 5.5-1.3 9.6-1.2zM484.3 178c3.8 0 7.1.7 9.5 1.9 2.1 1 4.8 3 6 4.3 1.2 1.2 2.8 3.9 3.7 5.8.8 1.9 2.6 9.3 3.9 16.5 1.4 7.1 3 17.4 3.6 22.7.6 5.4 1.1 18 1.1 28 0 10.5-.7 23.6-1.5 30.8-.9 6.9-2.5 16.8-3.6 22-1.2 5.2-3.7 14.7-5.6 21-1.9 6.3-5.4 16.2-7.7 22-2.4 5.8-6 13.9-8.1 18-2 4.1-6.6 12.2-10 18-3.5 5.8-8.1 12.2-10.4 14.2-2.5 2.4-5.5 4-7.9 4.4-2 .4-5.7.5-8.2.3-2.6-.3-6.1-1.5-8.2-2.9-2-1.4-4.7-4-6-5.9-1.9-2.9-2.3-4.7-2.3-11 0-7.4.1-7.8 4.8-15.1 2.7-4.1 8.2-14.3 12.2-22.5 4.1-8.3 8.8-19.3 10.5-24.5 1.7-5.2 4.2-14 5.6-19.5 1.3-5.5 3.1-14.9 3.9-21 .9-6.4 1.6-18.1 1.6-28 0-9.4-.5-21.1-1.1-26-.6-4.9-2-13.3-3.1-18.5-1.1-5.2-2.3-11.1-2.6-13-.3-1.9 0-5.3.7-7.5s2.3-5.5 3.5-7.3c1.2-1.7 4-4.1 6.1-5.2 2.5-1.2 6-1.9 9.6-2z"
      style={{
        fill: "#126760",
      }}
    />
  </Svg>
);

export default SvgCheck;
