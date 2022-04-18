import "./_header.styles.scss";

const Header = () => {
  return (
    <>
      <header>
        <svg
          width="170"
          height="48"
          viewBox="0 0 170 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.184 36.24C62.264 36.24 62.324 36.224 62.364 36.192C62.404 36.16 62.424 36.112 62.424 36.048C62.424 36 62.404 35.956 62.364 35.916C62.324 35.876 62.248 35.848 62.136 35.832L61.224 35.616C61.016 35.568 60.868 35.468 60.78 35.316C60.692 35.164 60.648 34.96 60.648 34.704V0.336C60.648 0.24 60.62 0.16 60.564 0.096C60.508 0.032 60.424 0 60.312 0C60.216 0 60.132 0.008 60.06 0.024C59.988 0.04 59.856 0.072 59.664 0.12L50.568 2.64C50.504 2.656 50.448 2.68 50.4 2.712C50.352 2.744 50.328 2.792 50.328 2.856C50.328 2.92 50.348 2.972 50.388 3.012C50.428 3.052 50.504 3.072 50.616 3.072H51.552C51.696 3.072 51.8 3.104 51.864 3.168C51.928 3.232 51.96 3.328 51.96 3.456V34.704C51.96 34.96 51.92 35.164 51.84 35.316C51.76 35.468 51.608 35.568 51.384 35.616L50.472 35.832C50.36 35.848 50.284 35.876 50.244 35.916C50.204 35.956 50.184 36 50.184 36.048C50.184 36.112 50.208 36.16 50.256 36.192C50.304 36.224 50.36 36.24 50.424 36.24H62.184ZM12.336 48C16.272 48 19.304 47.28 21.432 45.84C23.56 44.4 24.624 42.528 24.624 40.224C24.624 38.96 24.34 37.912 23.772 37.08C23.204 36.248 22.212 35.58 20.796 35.076C19.38 34.572 17.408 34.176 14.88 33.888C13.376 33.712 12.232 33.532 11.448 33.348C10.664 33.164 10.128 32.96 9.84 32.736C9.552 32.512 9.408 32.24 9.408 31.92C9.408 31.6 9.496 31.344 9.672 31.152C9.73067 31.088 9.78844 31.0347 9.84533 30.992L9.875 30.973L9.95067 30.9813C10.6769 31.0631 11.44 31.104 12.24 31.104C14.352 31.104 16.24 30.72 17.904 29.952C19.568 29.184 20.88 28.148 21.84 26.844C22.8 25.54 23.28 24.08 23.28 22.464C23.28 21.056 22.86 19.728 22.02 18.48C21.18 17.232 19.948 16.216 18.324 15.432C17.6744 15.1184 16.9678 14.8675 16.2043 14.6794L16.062 14.647C16.25 14.1483 16.464 13.758 16.704 13.476C17.024 13.1 17.432 12.912 17.928 12.912C18.376 12.912 18.764 13.076 19.092 13.404C19.42 13.732 19.744 14.112 20.064 14.544C20.384 14.976 20.744 15.356 21.144 15.684C21.544 16.012 22.04 16.176 22.632 16.176C23.624 16.176 24.388 15.884 24.924 15.3C25.46 14.716 25.728 13.904 25.728 12.864C25.728 11.68 25.4 10.72 24.744 9.984C24.088 9.248 23.096 8.88 21.768 8.88C20.216 8.88 18.948 9.424 17.964 10.512C17.0557 11.5163 16.3144 12.8069 15.7401 14.3838L15.677 14.563L15.4218 14.5121C14.4867 14.3414 13.4741 14.256 12.384 14.256C9.968 14.256 7.88 14.648 6.12 15.432C4.36 16.216 3.004 17.276 2.052 18.612C1.1 19.948 0.624 21.456 0.624 23.136C0.624 24.56 1.092 25.876 2.028 27.084C2.964 28.292 4.3 29.264 6.036 30C6.84613 30.3435 7.72857 30.6068 8.68331 30.79L8.927 30.834C7.65259 30.9875 6.59692 31.2335 5.76 31.572C4.672 32.012 3.888 32.576 3.408 33.264C2.928 33.952 2.688 34.736 2.688 35.616C2.688 36.576 2.952 37.34 3.48 37.908C3.876 38.334 4.452 38.6948 5.208 38.9902L5.223 38.997L5.12126 39.0099C3.47226 39.2428 2.24918 39.6195 1.452 40.14C0.484 40.772 0 41.76 0 43.104C0 44.08 0.404 44.936 1.212 45.672C2.02 46.408 3.328 46.98 5.136 47.388C6.944 47.796 9.344 48 12.336 48ZM11.544 29.652C11.08 29.1 10.66 28.26 10.284 27.132C9.908 26.004 9.6 24.608 9.36 22.944C9.136 21.296 9.052 19.88 9.108 18.696C9.164 17.512 9.336 16.596 9.624 15.948C9.912 15.3 10.288 14.944 10.752 14.88C11.408 14.784 12.072 15.372 12.744 16.644C13.416 17.916 13.928 19.792 14.28 22.272C14.632 24.784 14.66 26.74 14.364 28.14C14.068 29.54 13.584 30.288 12.912 30.384C12.464 30.448 12.008 30.204 11.544 29.652ZM7.668 45.504C8.812 46.752 10.448 47.376 12.576 47.376C13.728 47.376 14.684 47.268 15.444 47.052C16.204 46.836 16.772 46.488 17.148 46.008C17.524 45.528 17.712 44.896 17.712 44.112C17.712 43.424 17.512 42.832 17.112 42.336C16.712 41.84 16 41.42 14.976 41.076C13.952 40.732 12.512 40.432 10.656 40.176C8.88369 39.9249 7.43176 39.6466 6.30021 39.341L6.153 39.3L6.1248 39.3792C6.0992 39.456 6.0736 39.5456 6.048 39.648C5.984 39.904 5.952 40.192 5.952 40.512C5.952 42.592 6.524 44.256 7.668 45.504ZM42.984 36.72C44.488 36.72 45.676 36.476 46.548 35.988C47.42 35.5 48.044 34.952 48.42 34.344C48.796 33.736 48.984 33.248 48.984 32.88C48.984 32.8 48.972 32.748 48.948 32.724C48.924 32.7 48.888 32.688 48.84 32.688C48.808 32.688 48.78 32.7 48.756 32.724C48.732 32.748 48.712 32.8 48.696 32.88C48.632 33.376 48.484 33.716 48.252 33.9C48.02 34.084 47.784 34.176 47.544 34.176C47.304 34.176 47.1 34.08 46.932 33.888C46.764 33.696 46.68 33.408 46.68 33.024V21.168C46.68 18.928 45.916 17.216 44.388 16.032C42.86 14.848 40.56 14.256 37.488 14.256C35.216 14.256 33.316 14.56 31.788 15.168C30.26 15.776 29.112 16.532 28.344 17.436C27.576 18.34 27.192 19.232 27.192 20.112C27.192 21.136 27.476 21.896 28.044 22.392C28.612 22.888 29.336 23.136 30.216 23.136C31.528 23.136 32.592 22.732 33.408 21.924C34.224 21.116 34.632 20.176 34.632 19.104V16.56C34.632 15.984 34.792 15.528 35.112 15.192C35.432 14.856 35.864 14.688 36.408 14.688C36.84 14.688 37.204 14.856 37.5 15.192C37.796 15.528 37.944 15.984 37.944 16.56V25.44L37.8917 25.4226C37.5564 25.3228 37.1334 25.2658 36.6227 25.2516L36.36 25.248C32.568 25.248 29.868 25.796 28.26 26.892C26.652 27.988 25.848 29.504 25.848 31.44C25.848 32.976 26.452 34.24 27.66 35.232C28.868 36.224 30.392 36.72 32.232 36.72C33.672 36.72 35.012 36.412 36.252 35.796C37.0151 35.4169 37.6645 34.9333 38.2004 34.3452L38.381 34.137L38.3833 34.1899C38.4322 34.7894 38.7256 35.3194 39.2633 35.7799L39.432 35.916C40.136 36.452 41.32 36.72 42.984 36.72ZM35.04 33.36C35.472 34 36.024 34.32 36.696 34.32L36.8542 34.3119C37.1716 34.2796 37.4949 34.1503 37.824 33.924L37.944 33.835V25.868L37.872 25.848C37.536 25.768 37.144 25.728 36.696 25.728C35.992 25.728 35.432 26.096 35.016 26.832C34.6 27.568 34.392 28.704 34.392 30.24C34.392 31.68 34.608 32.72 35.04 33.36ZM76.092 36.192C76.052 36.224 75.992 36.24 75.912 36.24H64.152C64.088 36.24 64.032 36.224 63.984 36.192C63.936 36.16 63.912 36.112 63.912 36.048C63.912 36 63.932 35.956 63.972 35.916C64.012 35.876 64.088 35.848 64.2 35.832L65.112 35.616C65.336 35.568 65.488 35.468 65.568 35.316C65.648 35.164 65.688 34.96 65.688 34.704V3.456C65.688 3.328 65.656 3.232 65.592 3.168C65.528 3.104 65.424 3.072 65.28 3.072H64.344C64.232 3.072 64.156 3.052 64.116 3.012C64.076 2.972 64.056 2.92 64.056 2.856C64.056 2.792 64.08 2.744 64.128 2.712C64.176 2.68 64.232 2.656 64.296 2.64L73.392 0.12C73.584 0.072 73.716 0.04 73.788 0.024C73.86 0.008 73.944 0 74.04 0C74.152 0 74.236 0.032 74.292 0.096C74.348 0.16 74.376 0.24 74.376 0.336V34.704C74.376 34.96 74.42 35.164 74.508 35.316C74.596 35.468 74.744 35.568 74.952 35.616L75.864 35.832C75.976 35.848 76.052 35.876 76.092 35.916C76.132 35.956 76.152 36 76.152 36.048C76.152 36.112 76.132 36.16 76.092 36.192ZM88.44 36.72C90.44 36.72 92.232 36.3 93.816 35.46C95.4 34.62 96.652 33.476 97.572 32.028C98.492 30.58 98.952 28.944 98.952 27.12C98.952 27.024 98.932 26.96 98.892 26.928C98.852 26.896 98.808 26.88 98.76 26.88C98.744 26.88 98.716 26.892 98.676 26.916C98.636 26.94 98.616 26.992 98.616 27.072C98.616 28.56 98.06 29.748 96.948 30.636C95.836 31.524 94.392 31.968 92.616 31.968C90.408 31.968 88.64 31.212 87.312 29.7C86.3713 28.629 85.7638 27.1064 85.4895 25.1323L85.461 24.912H98.376C98.568 24.912 98.7165 24.8762 98.8214 24.8045L98.892 24.744C98.996 24.632 99.048 24.496 99.048 24.336C99.048 22.416 98.632 20.696 97.8 19.176C96.968 17.656 95.788 16.456 94.26 15.576C92.732 14.696 90.92 14.256 88.824 14.256C86.472 14.256 84.428 14.716 82.692 15.636C80.956 16.556 79.616 17.876 78.672 19.596C77.728 21.316 77.256 23.376 77.256 25.776C77.256 27.92 77.736 29.816 78.696 31.464C79.656 33.112 80.976 34.4 82.656 35.328C84.336 36.256 86.264 36.72 88.44 36.72ZM85.32 22.464C85.32 23.016 85.3384 23.543 85.3753 24.045L85.399 24.336H90.024C90.312 24.336 90.456 24.16 90.456 23.808C90.456 20.592 90.164 18.284 89.58 16.884C88.996 15.484 88.392 14.784 87.768 14.784C87.336 14.784 86.936 15.012 86.568 15.468C86.2 15.924 85.9 16.712 85.668 17.832C85.436 18.952 85.32 20.496 85.32 22.464ZM113.784 36.24C113.88 36.24 113.952 36.224 114 36.192C114.048 36.16 114.072 36.112 114.072 36.048C114.072 36 114.056 35.96 114.024 35.928C113.992 35.896 113.928 35.872 113.832 35.856L111.48 35.376C111.288 35.328 111.136 35.216 111.024 35.04C110.912 34.864 110.856 34.672 110.856 34.464V23.52C110.856 22.432 110.92 21.544 111.048 20.856C111.176 20.168 111.356 19.664 111.588 19.344C111.82 19.024 112.088 18.864 112.392 18.864C112.728 18.864 112.96 18.976 113.088 19.2C113.216 19.424 113.288 19.712 113.304 20.064L113.352 20.976C113.416 22.144 113.704 23.036 114.216 23.652C114.728 24.268 115.552 24.576 116.688 24.576C117.92 24.576 118.944 24.16 119.76 23.328C120.576 22.496 120.984 21.216 120.984 19.488C120.984 17.728 120.64 16.416 119.952 15.552C119.264 14.688 118.264 14.256 116.952 14.256C115.88 14.256 114.848 14.596 113.856 15.276C112.864 15.956 112.052 16.964 111.42 18.3C111.194 18.7771 111.009 19.2956 110.864 19.8554L110.856 19.885V14.784C110.856 14.72 110.845 14.6596 110.824 14.6027L110.784 14.52C110.736 14.44 110.648 14.4 110.52 14.4C110.424 14.4 110.332 14.408 110.244 14.424C110.156 14.44 110.04 14.464 109.896 14.496L100.776 16.56C100.68 16.576 100.608 16.608 100.56 16.656C100.512 16.704 100.488 16.752 100.488 16.8C100.488 16.848 100.512 16.892 100.56 16.932C100.608 16.972 100.664 16.992 100.728 16.992H101.784C101.928 16.992 102.028 17.036 102.084 17.124C102.14 17.212 102.168 17.328 102.168 17.472V34.848C102.168 35.04 102.128 35.204 102.048 35.34C101.968 35.476 101.816 35.568 101.592 35.616L100.728 35.808C100.632 35.824 100.552 35.856 100.488 35.904C100.424 35.952 100.392 36 100.392 36.048C100.392 36.096 100.416 36.14 100.464 36.18C100.512 36.22 100.584 36.24 100.68 36.24H113.784ZM131.484 11.4C130.548 12.328 129.344 12.792 127.872 12.792C126.416 12.792 125.232 12.328 124.32 11.4C123.408 10.472 122.952 9.336 122.952 7.992C122.952 6.648 123.408 5.512 124.32 4.584C125.232 3.656 126.416 3.192 127.872 3.192C129.344 3.192 130.548 3.656 131.484 4.584C132.42 5.512 132.888 6.648 132.888 7.992C132.888 9.336 132.42 10.472 131.484 11.4ZM133.848 36.24C133.928 36.24 133.988 36.224 134.028 36.192C134.068 36.16 134.088 36.112 134.088 36.048C134.088 36 134.068 35.956 134.028 35.916C133.988 35.876 133.912 35.848 133.8 35.832L132.888 35.616C132.68 35.568 132.532 35.468 132.444 35.316C132.356 35.164 132.312 34.96 132.312 34.704V14.496C132.312 14.4 132.284 14.32 132.228 14.256C132.172 14.192 132.088 14.16 131.976 14.16C131.88 14.16 131.796 14.168 131.724 14.184C131.652 14.2 131.52 14.232 131.328 14.28L122.232 16.8C122.168 16.816 122.112 16.84 122.064 16.872C122.016 16.904 121.992 16.952 121.992 17.016C121.992 17.08 122.012 17.132 122.052 17.172C122.092 17.212 122.168 17.232 122.28 17.232H123.216C123.36 17.232 123.464 17.264 123.528 17.328C123.592 17.392 123.624 17.488 123.624 17.616V34.704C123.624 34.96 123.584 35.164 123.504 35.316C123.424 35.468 123.272 35.568 123.048 35.616L122.136 35.832C122.024 35.848 121.948 35.876 121.908 35.916C121.868 35.956 121.848 36 121.848 36.048C121.848 36.112 121.872 36.16 121.92 36.192C121.968 36.224 122.024 36.24 122.088 36.24H133.848ZM155.7 35.988C154.828 36.476 153.64 36.72 152.136 36.72C150.472 36.72 149.288 36.452 148.584 35.916L148.415 35.7799C147.878 35.3194 147.584 34.7894 147.535 34.1899L147.533 34.137L147.352 34.3452C146.817 34.9333 146.167 35.4169 145.404 35.796C144.164 36.412 142.824 36.72 141.384 36.72C139.544 36.72 138.02 36.224 136.812 35.232C135.604 34.24 135 32.976 135 31.44C135 29.504 135.804 27.988 137.412 26.892C139.02 25.796 141.72 25.248 145.512 25.248L145.775 25.2516C146.285 25.2658 146.708 25.3228 147.044 25.4226L147.096 25.44V16.56C147.096 15.984 146.948 15.528 146.652 15.192C146.356 14.856 145.992 14.688 145.56 14.688C145.016 14.688 144.584 14.856 144.264 15.192C143.944 15.528 143.784 15.984 143.784 16.56V19.104C143.784 20.176 143.376 21.116 142.56 21.924C141.744 22.732 140.68 23.136 139.368 23.136C138.488 23.136 137.764 22.888 137.196 22.392C136.628 21.896 136.344 21.136 136.344 20.112C136.344 19.232 136.728 18.34 137.496 17.436C138.264 16.532 139.412 15.776 140.94 15.168C142.468 14.56 144.368 14.256 146.64 14.256C149.712 14.256 152.012 14.848 153.54 16.032C155.068 17.216 155.832 18.928 155.832 21.168V33.024C155.832 33.408 155.916 33.696 156.084 33.888C156.252 34.08 156.456 34.176 156.696 34.176C156.936 34.176 157.172 34.084 157.404 33.9C157.636 33.716 157.784 33.376 157.848 32.88C157.864 32.8 157.884 32.748 157.908 32.724C157.932 32.7 157.96 32.688 157.992 32.688C158.04 32.688 158.076 32.7 158.1 32.724C158.124 32.748 158.136 32.8 158.136 32.88C158.136 33.248 157.948 33.736 157.572 34.344C157.196 34.952 156.572 35.5 155.7 35.988ZM145.848 34.32C145.176 34.32 144.624 34 144.192 33.36C143.76 32.72 143.544 31.68 143.544 30.24C143.544 28.704 143.752 27.568 144.168 26.832C144.584 26.096 145.144 25.728 145.848 25.728C146.296 25.728 146.688 25.768 147.024 25.848L147.096 25.868V33.835L146.976 33.924C146.647 34.1503 146.324 34.2796 146.006 34.3119L145.848 34.32ZM167.112 36.036C166.36 36.492 165.512 36.72 164.568 36.72C163.656 36.72 162.828 36.492 162.084 36.036C161.34 35.58 160.752 34.968 160.32 34.2C159.888 33.432 159.672 32.592 159.672 31.68C159.672 30.784 159.888 29.96 160.32 29.208C160.752 28.456 161.34 27.856 162.084 27.408C162.828 26.96 163.656 26.736 164.568 26.736C165.512 26.736 166.36 26.96 167.112 27.408C167.864 27.856 168.46 28.456 168.9 29.208C169.34 29.96 169.56 30.784 169.56 31.68C169.56 32.592 169.34 33.432 168.9 34.2C168.46 34.968 167.864 35.58 167.112 36.036Z"
            fill="black"
          />
        </svg>

        <div className="header-slideButton link1">START SLIDESHOW</div>
      </header>
      <hr className="header-line"></hr>
    </>
  );
};

export default Header;