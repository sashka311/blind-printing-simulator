import React from "react";

function SvgSelector({ id }) {
  switch (id) {
    case "reset":
      return (
        <svg width="21px" height="21px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="matrix(0 1 1 0 2.5 2.5)"
          >
            <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" />
            <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" />
          </g>
        </svg>
      );
    case "speed":
      return (
        <svg className="err" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.553454 16.1329C0.553454 10.369 5.23633 5.6864 10.9999 5.6864C16.7599 5.6864 21.4464 10.3719 21.4464 16.1329H18.3706C18.3706 14.1173 17.5643 12.2919 16.2574 10.9635L12.5262 14.3132C12.5562 14.9873 12.229 15.6548 11.614 16.0316C10.713 16.5838 9.53365 16.3007 8.98141 15.3998C8.42922 14.4979 8.71141 13.3195 9.61329 12.7663C10.2273 12.3894 10.9708 12.4016 11.5586 12.7334L16.2273 10.9316C14.8933 9.59096 13.0454 8.76125 10.9999 8.76125C6.92277 8.76125 3.62925 12.0548 3.62925 16.1319H0.553406L0.553454 16.1329Z"
            fill="#62EE89"
          ></path>
        </svg>
      );
    case "mistake":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.9592 1.76426C10.9128 1.76426 10.8655 1.77973 10.8268 1.7952L3.78569 4.86662C3.62926 4.9285 3.52097 5.10037 3.52097 5.27226C3.52097 10.0117 3.8089 12.7393 4.89276 14.8207C5.98433 16.8944 7.83221 18.2195 10.7633 20.1687C10.9034 20.2623 11.0985 20.2623 11.2386 20.1687C14.1781 18.2196 16.0176 16.8944 17.1092 14.8207C18.193 12.7393 18.481 10.0108 18.481 5.27138C18.481 5.0995 18.3795 4.92849 18.224 4.86574L11.1769 1.7952C11.115 1.76426 11.0368 1.75653 10.9586 1.76426H10.9592ZM11.0056 2.67605L17.593 5.55233C17.5853 10.0579 17.2819 12.5992 16.3304 14.4159C15.3944 16.2086 13.758 17.4246 11.0058 19.2645C8.24498 17.4246 6.61627 16.2085 5.67254 14.4159C4.72879 12.5992 4.42538 10.0579 4.40991 5.55233L11.0056 2.67605ZM11.0056 6.38679C10.3971 6.38679 9.89857 6.8775 9.89857 7.48594L10.1246 11.4459C10.1246 11.9289 10.5148 12.3268 11.0056 12.3268C11.4887 12.3268 11.8789 11.9289 11.8789 11.4459L12.1049 7.48594C12.1049 6.8775 11.6056 6.38679 11.0056 6.38679V6.38679ZM11.0056 12.9817C10.3971 12.9817 9.89857 13.4724 9.89857 14.0809C9.89857 14.6893 10.3979 15.18 11.0056 15.18C11.6056 15.18 12.1049 14.6893 12.1049 14.0809C12.1049 13.4724 11.6056 12.9817 11.0056 12.9817V12.9817Z"
            fill="#FF6B00"
          ></path>
        </svg>
      );

    default:
      return <svg></svg>;
  }
}

export default SvgSelector;