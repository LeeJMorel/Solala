import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Path
      fillRule="evenodd"
      d="M255.8.1c.1-.1 7.1 5.6 15.4 12.5 8.4 7 18 15.3 27.3 24.4l7-1c3.9-.5 18.4-1 57.5-1l-.3 30.8c-.3 30.1-.4 30.9-3 38.7-1.4 4.4-4.8 11.4-7.5 15.5-2.6 4.1-7.6 10-10.9 13-3.3 3-8.7 6.9-11.9 8.7-3.2 1.8-8.6 4.2-11.9 5.4-5.4 2-8.5 2.3-53 3.4l-.3 11.7c-.1 7.4.2 11.8.8 11.8.5 0 2.5-.9 4.2-1.9 1.8-1.1 6-2.7 9.3-3.7 4.2-1.1 8.1-1.5 13-1.2 3.9.3 9.7 1.6 13 2.9q6 2.3 12 8c3.3 3.1 7.3 8.1 8.8 11 1.5 3 3.3 8.6 5 19.4l5.1 1.2c2.8.7 8.2 2.8 12.1 4.7 3.9 1.9 9.5 5.7 12.5 8.4 3 2.6 7.4 7.8 9.7 11.5 2.4 3.7 5.3 9.5 6.5 12.9 1.7 4.9 2.2 8.6 2.3 16.8 0 5.8-.3 12.2-.8 14.2-.7 3.7-.6 3.8 2.3 3.8 1.6 0 4.8.9 7 2 2.3 1.1 5 3.6 6.2 5.8 1.9 3.1 2.3 5.5 3 24.7l9.1.5c7.6.4 10.3 1.1 15.7 3.7 3.6 1.7 8.7 5.3 11.4 7.9 2.7 2.7 5.9 6.7 7.2 8.9 1.3 2.2 3.1 6.9 4 10.5 1.2 4.6 1.5 8.6 1.1 13.5-.5 5.1-1.6 8.9-4.1 14-2.2 4.6-5.2 8.7-8.8 12-2.9 2.8-7.5 6-10.1 7.3-2.6 1.2-6.6 2.6-9 3.2-2.3.5-7 1-16.7 1v5c0 2.8-.5 9.4-1.1 14.8-.6 5.3-2.1 13.3-3.4 17.7-1.3 4.4-3.8 11.1-5.5 15-1.7 3.9-5.5 10.6-8.5 15-2.9 4.4-8.9 11.5-13.2 15.8-4.3 4.3-11.2 10.1-15.3 13-4.1 2.8-11.1 6.8-15.5 8.9-4.4 2-13.4 5.1-32 9.8h-91l-12-3.1c-6.6-1.6-15.4-4.6-19.5-6.5-4.1-1.9-11.1-5.9-15.5-8.9-4.4-2.9-11.5-8.9-15.8-13.2-4.4-4.3-10.3-11.4-13.2-15.8-3-4.4-6.8-11.1-8.5-15-1.7-3.9-4.2-10.6-5.5-15-1.2-4.4-2.8-12.1-3.4-17-.6-4.9-1.1-11.5-1.1-20l-8.7-.6c-7-.4-10.2-1.2-15.6-3.7-3.7-1.8-9-5.3-11.8-8-3.3-3-6.4-7.3-8.7-12.1-3.4-7-3.7-8.1-3.7-16.5 0-6 .6-10.8 1.7-14.1 1-2.8 3.5-7.5 5.6-10.5 2.4-3.4 6.3-7.2 10.3-9.8 3.5-2.4 8.6-5 11.4-5.8 2.7-.8 8.3-1.4 19.5-1.4l.3-10.8c.2-9 .6-11.3 2.5-14.5 1.2-2.1 3.9-4.6 6.2-5.7 2.2-1.1 5.3-2 7-2 2.9 0 3-.1 2.2-3.8-.4-2-.7-8.4-.7-14.2 0-8.6.4-11.7 2.4-17 1.3-3.6 4.1-9.2 6.1-12.5 2.1-3.3 6.4-8.4 9.6-11.4 3.3-2.9 9-6.8 12.9-8.7 3.8-1.9 9.3-4 17.2-5.9l1.1-7c.6-3.8 2.4-9.4 3.9-12.4 1.5-2.9 5.5-7.9 8.8-11q6-5.7 12-8c3.3-1.3 9.1-2.6 13-2.9 4.9-.3 8.8.1 13 1.2 3.3 1 7.5 2.6 9.2 3.7 1.8 1 3.7 1.9 4.3 1.9.6 0 .9-4.4.5-23.5l-23.5-.6c-21-.5-24.1-.8-29.5-2.8-3.3-1.2-8.7-3.6-12-5.4-3.3-1.8-9.4-6.6-13.6-10.7-4.5-4.4-9-10.2-11.2-14-1.9-3.6-4.5-9.7-5.8-13.5-2.1-6.6-2.3-9-2.9-68.5h25.2c13.9 0 28.4.5 39.3 2l5-4.9c2.7-2.8 12.2-11.1 21-18.5S255.6.1 255.7.1zm-29.3 47.5c-1.7 2.1-4.3 6.3-5.8 9.2-1.4 2.8-3.3 7.8-4.1 11-.8 3.1-1.5 8.6-1.5 12.2 0 3.6.7 9.2 1.5 12.5.9 3.3 2.6 8.3 3.9 11 1.3 2.8 4.8 7.7 7.8 10.9 2.9 3.3 8 7.7 11.3 9.8 3.3 2.1 6.6 3.8 7.2 3.8.9 0 1.3-2.2 1.3-7.7v-7.8l-22-22L237.6 79c7 7 9.3 9 9.7 9 .5 0 .8-8.1.8-18V52h16c0 14.3.3 18.8.7 19.3.5.4 2.9-1.4 5.6-4l4.7-4.8L286.6 74l-22.5 22.5c0 27.7.3 31.5 1.2 31.5.7 0 4-1.7 7.3-3.8 3.3-2.1 8.4-6.5 11.3-9.8 3-3.2 6.5-8.1 7.8-10.9 1.3-2.7 3-7.7 3.9-11 .8-3.3 1.5-8.9 1.5-12.5 0-3.6-.7-9.1-1.5-12.2-.8-3.2-2.7-8.2-4.1-11-1.5-2.9-4.3-7.3-6.3-9.7-2-2.5-9.1-9.1-15.9-14.8-6.7-5.7-12.6-10.3-13-10.3-.4 0-6.6 4.9-13.7 10.8-7.2 6-14.4 12.6-16.1 14.8zm-60.4 24.7c0 17.3.2 21.1 1.9 26.7 1.1 3.6 3.7 9.2 5.9 12.5 2.1 3.3 5.6 7.5 7.8 9.4 2.1 1.9 5.5 4.4 7.4 5.6 1.9 1.2 6.2 3.2 9.5 4.4 4.1 1.6 9.2 2.5 16 2.8l10 .6c-12-12.6-15.4-17.4-18.3-23.3-2.4-4.7-4.3-9.2-4.3-10 0-.8-5.7-7.2-12.7-14.3L176.6 74l11.5-11.5L198.6 73c3.3-12.8 4.5-17.5 4.9-18.7l.6-2.3h-38zm142.5-18c.4 1.2 1.7 6 2.9 10.5l2.1 8.3 10.5-10.5L335.6 74c-19.7 19.8-25.4 26.2-25.4 27.1 0 .8-1.9 5.3-4.3 9.9-2.9 6-6.3 10.8-11.2 15.9l-7.1 7.4c16.8-.9 22-1.8 26-3.3 3.3-1.2 8.3-3.7 11-5.5 2.8-1.8 6.6-5 8.5-7.1 1.8-2.1 4.7-5.9 6.2-8.4 1.6-2.4 3.8-7.4 4.9-11 1.7-5.5 2-9.3 1.9-26.7V52h-38.3zm-96.9 132c-1.7.9-4.5 3.1-6.2 5-1.8 1.8-4 5.1-4.9 7.3-1 2.3-1.6 6.5-1.6 10 .1 3.7.9 7.5 2.1 10 1 2.2 3.6 5.5 5.7 7.4 2.1 1.9 5.4 4.1 7.4 4.9 1.9.7 6.2 1.4 9.5 1.5l6 .2c3.1 11.2 3.6 14.8 3.1 15.2-.4.5-4.9.8-10 .8-8.1 0-9.9-.4-15.6-3.1-3.6-1.6-8.7-5-11.4-7.4-2.7-2.5-6.1-6.5-7.5-8.9-2.5-4.1-2.8-4.3-6.1-3.6-2 .3-6.2 1.9-9.5 3.4s-8.1 4.8-10.6 7.2c-2.5 2.4-5.7 6.4-7.2 8.9s-3.4 7.4-4.3 11c-1.2 4.7-1.5 8.3-1 13 .4 3.6 1.3 8 2.1 9.7 1.4 3.2 1.6 3.3 7.7 3.3h6.3c.8-7.4 2-11.5 3.2-14 1.2-2.5 4.1-6.5 6.4-8.9 2.4-2.4 6.6-5.4 9.4-6.7 2.7-1.3 6.9-2.7 9.2-3.1l4.3-.8c0 17.2-.1 17.5-2.3 17.5-1.2 0-3.8 1-5.7 2.2-1.8 1.3-4.2 3.4-5.2 4.8s-2.2 4-2.6 5.8l-.7 3.2h66.5c-.5-79.2-.6-80.6-2.7-84.5-1.2-2.2-3.4-5.3-5-6.9-1.6-1.5-4.4-3.6-6.3-4.6-2-1-5.8-2.1-8.5-2.4-2.8-.3-6.4-.1-8 .3-1.7.4-4.4 1.5-6 2.3zm66 0c-1.7.9-4.3 2.9-5.9 4.4-1.6 1.6-3.8 4.7-5 6.9-2.1 3.9-2.2 5.3-2.4 44.3l-.2 40.2h66.5c-1.2-5-2.4-7.6-3.4-9-1-1.4-3.4-3.5-5.2-4.8-1.9-1.2-4.5-2.2-5.7-2.2-2.2 0-2.3-.3-2.3-8.8v-8.7c6.6 1.2 10.8 2.6 13.6 3.9 2.7 1.3 6.9 4.3 9.3 6.7 2.3 2.4 5.2 6.4 6.4 8.9 1.2 2.5 2.4 6.6 2.7 9.3l.6 4.7c12.3 0 12.5-.1 13.9-3.3.7-1.7 1.7-5.7 2-8.7.4-3 .2-8.2-.4-11.5-.6-3.3-2.3-8.5-3.8-11.5s-5-7.7-7.7-10.4c-2.8-2.7-7.7-6.2-11-7.7s-7.6-3.1-9.5-3.4c-3.4-.7-3.7-.5-6.2 3.6-1.4 2.4-4.8 6.4-7.5 8.9-2.7 2.4-7.8 5.8-11.3 7.4-5.8 2.7-7.6 3.1-15.7 3.1-5.1 0-9.6-.3-10-.8-.5-.4.1-4 1.2-8l2-7.2c10.4-.4 14.5-1.2 17-2.4 2.2-1.1 5.5-3.7 7.4-5.8 1.8-2.1 4-5.4 4.8-7.3.8-1.9 1.4-6 1.4-9s-.7-7.3-1.6-9.5c-.9-2.2-3.1-5.5-4.9-7.3-1.7-1.9-4.7-4.2-6.6-5.2-2-1-5.8-2.1-8.5-2.4-2.8-.3-6.4-.1-8 .3-1.7.4-4.4 1.5-6 2.3zM133.2 356.6c0 49.5.2 59.7 1.5 66.2.9 4.3 2.9 11.2 4.5 15.3 1.7 4.1 4.7 10.4 6.8 14 2.2 3.6 7.2 10.1 11.3 14.4 4 4.3 10.1 9.8 13.4 12.2 3.3 2.3 9.8 6.1 14.5 8.3 4.6 2.2 12.5 5 17.5 6.3 8.7 2.2 10.3 2.3 53.5 2.3 43.1 0 44.7-.1 53.5-2.3 4.9-1.3 12.8-4.1 17.5-6.3 4.6-2.2 11.2-6 14.5-8.3 3.3-2.4 8.9-7.4 12.5-11.2 3.5-3.8 8.2-9.6 10.4-12.9 2.2-3.3 5.2-8.8 6.7-12.3 1.6-3.4 3.8-9.5 5.1-13.5 2.1-7.1 2.2-8.1 2.2-69l.1-61.7H133.2zm-36.7-22.2c-1.6.8-4.3 3-6 4.9-1.8 1.8-4 5.1-4.9 7.3-1 2.2-1.7 6.5-1.7 9.5-.1 3.5.7 7.2 2 10 1.2 2.5 3.8 6 5.9 7.9 2.1 1.9 5.2 4 6.9 4.7 1.6.7 6.2 1.6 10.2 2.1l7.3.8v-13c-14.9-10.1-19.5-13.3-19.7-13.8-.2-.4 1.6-3.6 3.9-7.2s4.4-6.6 4.5-6.5c.1 0 2.5 1.6 5.3 3.5 2.7 1.9 5.2 3.5 5.5 3.5.2 0 .5-3.8.5-8.5v-8.5c-9 .1-12.8.5-14.2.9-1.5.5-4 1.5-5.5 2.4zm299.8 5.1c-.1 4.7.1 8.6.4 8.6.2 0 2.4-1.3 4.7-2.8 2.3-1.6 4.8-3.2 5.5-3.5.8-.5 2.7 1.6 5.3 5.8 2.2 3.6 3.8 6.8 3.6 7.2-.2.5-4.8 3.7-10.1 7.3l-9.6 6.5v13c11.3-1.3 16.4-2.5 18.6-3.5 2.2-1 5.5-3.6 7.4-5.7 1.8-2.1 4-5.4 4.8-7.3.8-1.9 1.5-6 1.5-9s-.7-7.3-1.7-9.5c-.9-2.2-3.1-5.5-4.9-7.3-1.7-1.9-4.9-4.3-7.1-5.4-2.5-1.3-6.7-2.3-11.2-2.6l-7.1-.5zM1.2 233.2h33v16h-33zm477 0h33v16h-33zM81.7 55.1l23 23.1-11.5 11.5-23-23zm349 0 11.5 11.5L431 77.9c-6.2 6.1-11.7 11.2-12.3 11.2-.5 0-3.4-2.4-11.5-10.5zm-314 35 34.5 34.5-11.4 11.5-34.5-34.5zm278.9 0 11.6 11.5-35 35-11.5-11.5zM49 93.1c.4 0 19 12.1 82.1 54l-9 14-40.7-27.2c-22.4-14.9-41-27.2-41.3-27.4-.2-.2 1.5-3.3 3.9-6.9 2.4-3.6 4.6-6.5 5-6.5zm414.4 0c.4 0 2.5 2.7 4.7 6s4 6.3 4 6.7c0 .4-18 12.8-40 27.5s-40.4 26.8-41 26.8c-.5 0-2.8-2.7-5-6s-3.7-6.5-3.5-7c.3-.6 18.4-12.9 40.3-27.5s40.1-26.5 40.5-26.5zm-439.3 43c.3-.1 7.1 2.7 15 6 8 3.4 14.7 6.2 14.8 6.3.1.1-.9 3.1-2.3 6.7-1.5 3.6-2.9 6.9-3.3 7.3-.4.5-7-1.7-14.7-4.8-7.7-3.2-14.3-6-14.7-6.4-.4-.3.4-3.9 1.9-7.9s3-7.2 3.3-7.2zm463.5 0c.6 0 2.3 3.2 3.9 7.2s2.5 7.6 2 7.9c-.5.4-7.2 3.2-14.9 6.3-7.7 3.1-14.2 5.4-14.5 5-.2-.3-1.7-3.6-3.2-7.3-1.5-3.6-2.6-6.7-2.5-6.8.1-.1 6.5-2.9 14.2-6.2 7.7-3.3 14.5-6 15-6.1zM70 155.1c.4 0 10.5 4.1 22.6 9.1 12.1 5 22.2 9.2 22.3 9.2.1.1-1.1 3.3-2.7 7.2-1.6 3.8-3.3 7.1-3.7 7.3-.5.1-10.8-3.9-45.3-18.3l1.6-3.5c.8-1.9 2.2-5.2 3-7.3.8-2 1.8-3.7 2.2-3.7zm372 .3c.7.1 2.6 3.3 4.2 7.2 1.6 3.8 3 7 3 7s-9.9 4.1-22 9.2-22.4 9.3-22.8 9.3c-.4 0-2.2-3.2-3.9-7.2-1.8-4-2.9-7.4-2.5-7.6.3-.1 10.1-4.3 21.6-9.1 11.6-4.9 21.6-8.9 22.4-8.8zM11.4 183.8c1.8.3 23.3 4.6 47.7 9.5 24.5 4.8 44.7 8.9 44.9 9.1.1.1-.3 3.5-1 7.5-.8 4.1-1.7 7.6-2.1 7.8-.4.2-21.8-3.7-47.5-8.8-25.7-5-47.1-9.4-47.6-9.7-.5-.4-.3-3.8.4-7.6.7-3.9 1.4-7.3 1.6-7.7.2-.4 1.8-.5 3.6-.1zm492.2-.3c.6.1 1.7 3.6 2.4 7.7.7 4 1 7.7.5 8-.5.3-21.8 4.8-47.4 9.8-25.5 5.1-46.9 9-47.5 8.8-.5-.2-1.5-3.8-2.3-7.8-.7-4.1-1.1-7.5-1-7.6.2-.1 21.5-4.4 47.3-9.6 25.9-5.2 47.5-9.4 48-9.3zM51.1 233.1h49v16h-49zm361 0h49v16h-49zm-310.9 31.4c.4.6 1.2 4.2 1.9 8.1.7 3.8 1.1 7 .9 7.1-.2 0-21.1 4.2-46.4 9.2-25.3 5.1-46.9 9.2-48 9.2-1.7 0-2.1-1.1-3.2-7.7-.8-4.3-1.2-7.9-1-7.9.1-.1 21.6-4.4 47.6-9.6 31.9-6.3 47.7-9.1 48.2-8.4zm311.8-1c.9.3 22.3 4.6 47.6 9.6s46.2 9.2 46.4 9.3c.1.1-.3 3.5-1 7.5-.8 4.1-1.8 7.6-2.4 7.9-.5.3-21.9-3.6-47.5-8.7-25.5-5.1-46.8-9.6-47.3-9.9-.5-.3-.3-3.8.4-7.6.7-3.9 1.4-7.4 1.7-7.8.3-.4 1.2-.6 2.1-.3zm-247.1 67.6h16.2l.5 3.5c.3 2 1.9 5 3.9 7.2 2 2.3 5.1 4.3 7.5 5 3.3 1 5.1 1 8.8 0 3.2-.8 5.7-2.4 8-5 1.9-2.1 3.6-5.2 4.3-10.7h16.5l-.7 5.2c-.4 2.9-1.6 7.1-2.7 9.3-1 2.2-3.9 6-6.2 8.4-2.4 2.5-6.8 5.6-9.9 7-4.5 2.1-6.9 2.6-14 2.6-7.3 0-9.2-.4-13.7-2.8-2.9-1.5-6.9-4.4-9-6.5-2.1-2-4.9-6-6.2-8.7-1.3-2.8-2.6-7.2-2.9-9.8zm115 0h16.3l.5 3.5c.3 2.1 1.9 5.1 3.9 7.3 2.2 2.5 4.8 4.1 8 5 3.7 1 5.4 1 8.7 0 2.5-.8 5.5-2.8 7.5-5s3.6-5.2 4.4-10.8h16.5l-.6 4.8c-.3 2.6-1.6 7-2.9 9.7-1.4 2.8-4.1 6.7-6.2 8.8-2.1 2-6.2 5-9 6.5-4.6 2.3-6.5 2.7-13.8 2.7-7 0-9.5-.4-14-2.5-3-1.4-7.4-4.6-9.8-7-2.4-2.5-5.3-6.5-6.5-9-1.1-2.4-2.3-6.6-2.5-9.2zm16.5 74h15.8v4.2c0 2.4-.9 7.2-2 10.8-1.1 3.6-3.6 8.8-5.5 11.7-2 2.9-5.5 7.1-7.8 9.3-2.3 2.3-6.5 5.4-9.2 7-2.8 1.5-7.5 3.5-10.5 4.4-4.5 1.3-10.9 1.6-63 1.6v-16l28.7-.3c26.6-.2 29.1-.4 33.3-2.3 2.4-1.1 6.6-4 9.3-6.5 2.6-2.4 5.9-6.7 7.2-9.4 1.4-2.8 2.7-7.2 3.1-9.8z"
      style={{
        fill: "#fff",
      }}
    />
  </Svg>
);

export default SvgComponent;
