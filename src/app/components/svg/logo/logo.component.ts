import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'svg-logo',
  encapsulation: ViewEncapsulation.None,
  template: `
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#logo-vimox_svg__a)">
        <path
          d="M13.913 1.646 6.01 8.763 0 0h13.282a.946.946 0 0 1 .63 1.646Z"
          fill="url(#logo-vimox_svg__b)"
        ></path>
        <path
          style="mix-blend-mode:multiply"
          d="M11.548 1.646A.946.946 0 0 0 10.918 0H0l5.106 7.446 6.442-5.8Z"
          fill="url(#logo-vimox_svg__c)"
        ></path>
        <path
          d="M24.378 0 12.19 17.773 9.92 14.47a4.523 4.523 0 0 1 .209-5.387L17.388 0h6.99Z"
          fill="url(#logo-vimox_svg__d)"
        ></path>
        <path
          style="mix-blend-mode:multiply"
          d="m17.387 0-7.27 9.075a4.523 4.523 0 0 0-.199 5.394l2.271 3.304C9.778 11.28 17.387 0 17.387 0Z"
          fill="url(#logo-vimox_svg__e)"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="logo-vimox_svg__b"
          x1="12.137"
          y1="-4.355"
          x2="-0.524"
          y2="8.304"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#007BFF"></stop>
          <stop offset="0.59" stop-color="#007BFF"></stop>
          <stop offset="1" stop-color="#007BFF"></stop>
        </linearGradient>
        <linearGradient
          id="logo-vimox_svg__c"
          x1="10.971"
          y1="5.198"
          x2="7.398"
          y2="3.342"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#007BFF"></stop>
          <stop offset="1" stop-color="#fff"></stop>
        </linearGradient>
        <linearGradient
          id="logo-vimox_svg__d"
          x1="1469.68"
          y1="304.456"
          x2="409.027"
          y2="1214.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#007BFF"></stop>
          <stop offset="0" stop-color="#377DFF"></stop>
          <stop offset="0.59" stop-color="#2C8CF3"></stop>
          <stop offset="0.59" stop-color="#007BFF"></stop>
          <stop offset="1" stop-color="#7FB0FF"></stop>
        </linearGradient>
        <linearGradient
          id="logo-vimox_svg__e"
          x1="413.453"
          y1="1311.31"
          x2="940.82"
          y2="667.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#377DFF"></stop>
          <stop offset="1" stop-color="#fff"></stop>
        </linearGradient>
        <clipPath id="logo-vimox_svg__a">
          <path fill="#fff" d="M0 0h24.378v17.773H0z"></path>
        </clipPath>
      </defs>
    </svg>
  `,
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
